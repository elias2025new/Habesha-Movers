import * as THREE from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader.js';
import gsap from 'gsap';

// --- SCENE SETUP ---
const scene = new THREE.Scene();
scene.background = new THREE.Color(0xf0f0f0); // Match HTML background
// Add some fog for depth
scene.fog = new THREE.Fog(0xf0f0f0, 20, 100);

const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
// Side view, slightly elevated
camera.position.set(0, 5, 30);
camera.lookAt(0, 2, 0);

const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
document.getElementById('container').appendChild(renderer.domElement);

// --- LIGHTING ---
const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
scene.add(ambientLight);

const dirLight = new THREE.DirectionalLight(0xffffff, 1.5);
dirLight.position.set(10, 20, 10);
dirLight.castShadow = true;
dirLight.shadow.mapSize.width = 2048;
dirLight.shadow.mapSize.height = 2048;
scene.add(dirLight);

// Floor
const planeGeom = new THREE.PlaneGeometry(500, 500);
const planeMat = new THREE.ShadowMaterial({ opacity: 0.1 }); // Subtle shadow
const plane = new THREE.Mesh(planeGeom, planeMat);
plane.rotation.x = -Math.PI / 2;
plane.receiveShadow = true;
scene.add(plane);

// --- TRUCK GROUP ---
const truckGroup = new THREE.Group();
scene.add(truckGroup);

// Start off-screen LEFT
const START_X = -60;
const CENTER_X = 0;
const END_X = 80;

truckGroup.position.x = START_X;

// Slogan Texture
// Load Custom Logo
// User replaced logo - Added cache-buster to force reload
const sloganTexture = new THREE.TextureLoader().load('truck/new_logo.png?v=' + Date.now(),
    (tex) => console.log('✅ Logo texture loaded', tex),
    undefined,
    (err) => console.error('❌ Error loading logo texture:', err)
);
sloganTexture.colorSpace = THREE.SRGBColorSpace;
sloganTexture.flipY = true; // Fix upside down issue. Default is true.

// --- LOAD MODEL ---
const mtlLoader = new MTLLoader();
mtlLoader.setPath('./truck/');
mtlLoader.load('tru.mtl', (materials) => {
    materials.preload();
    const objLoader = new OBJLoader();
    objLoader.setMaterials(materials);
    objLoader.setPath('./truck/');
    objLoader.load('tru.obj', (object) => {
        // --- MATERIAL FIXES ---
        object.traverse((child) => {
            if (child.isMesh) {
                child.castShadow = true;
                child.receiveShadow = true;
                if (child.material) {
                    child.material.side = THREE.DoubleSide;
                    const name = child.name.toLowerCase();

                    // 1. SPECIFIC BODY PARTS (Bi-Color Logic)
                    // 1. FORCE WHITE (Cabin) & GRAY (Box/Logo Background)
                    if (name === 'body_body') {
                        child.material.color.set(0xffffff); // Cabin -> White
                        child.material.map = null;
                        child.material.transparent = false;
                        child.material.opacity = 1.0;
                        child.material.depthWrite = true;
                    }
                    else if (name === 'body_matte_colors' || name === 'body_misc') {
                        child.material.color.set(0x999999); // Box -> Gray (Logo Background)
                        child.material.map = null;
                        child.material.transparent = false;
                        child.material.opacity = 1.0;
                        child.material.depthWrite = true;
                    }
                    // 2. GLASS & LIGHTS
                    else if (name.includes('glass') || name.includes('window')) {
                        child.material.transparent = true;
                        child.material.opacity = 0.4;
                        child.material.color.set(0xffffff);
                    }
                    // 3. BLACK PARTS (Tires, Chassis)
                    else if (name.includes('tire') || name.includes('wheel') || name.includes('chassis') || name.includes('black') || name.includes('grill') || name.includes('bumper') || name.includes('exhaust')) {
                        child.material.color.set(0x111111);
                    }
                    // 4. FALLBACK
                    else {
                        // Default to Blue if not matched? Or keep original?
                        // Let's keep original if it has map, else Blue.
                        if (!child.material.map) {
                            child.material.color.set(0xffffff);
                        }
                    }
                }
            }
        });

        // --- POSITIONING & SCALE ---
        const box = new THREE.Box3().setFromObject(object);
        const center = box.getCenter(new THREE.Vector3());

        object.scale.set(1.4, 1.4, 1.4); // Set to 1.4 per user request

        const box2 = new THREE.Box3().setFromObject(object);
        const minY = box2.min.y;

        object.position.y = -minY;

        // ROTATION: Face RIGHT (+X)
        object.rotation.y = Math.PI / 2;

        // --- LOGO PLANES (Stickers) ---
        // UVs might be missing on the truck box, so we stick planes on the sides.
        const truckBox = new THREE.Box3().setFromObject(object);
        const truckSize = truckBox.getSize(new THREE.Vector3());
        const truckCenter = truckBox.getCenter(new THREE.Vector3());

        // Assuming Truck is roughly centered and aligned +X after rotation.
        // Side walls are along +/- Z axis relative to the container.
        // Wait, 'rotation.y = PI/2' applies to the container 'object'.
        // Inside 'object' local space, it faces -Z (original).
        // So Sides are +/- X in local space of 'object'. 
        // Let's verify: Original (Face -Z). Sides are +/- X.
        // We need to place planes at +X and -X in LOCAL space.

        // Estimate Box Size (Big cube on back)
        // It's likely the upper-rear portion.
        // User requested "perfect fit between lines", previous was too big (6.8).
        // Reducing to roughly 5.4 x 2.7
        // User requested "width of 6.3" (Height 2.2).
        const stickerWidth = 6.3;
        const stickerHeight = 2.2;
        const decalGeom = new THREE.PlaneGeometry(stickerWidth, stickerHeight);
        const decalMat = new THREE.MeshBasicMaterial({
            map: sloganTexture,
            transparent: true,
            opacity: 1.0,
            side: THREE.DoubleSide,
            blending: THREE.MultiplyBlending // Attempt to blend background
        });

        // Left Side
        const stickerLeft = new THREE.Mesh(decalGeom, decalMat);
        // Local position. If truck faces -Z:
        // +X is Left? -X is Right? (Right Hand Rule: Thumb +X, Index +Y, Middle +Z)
        // If facing -Z: +X is to the Left of the driver.
        // We need to find the X width.
        // Let's use bounding box X max/min.
        stickerLeft.position.set(truckSize.x / 4, truckSize.y / 2 + 1, 0); // Guessing position
        stickerLeft.rotation.y = Math.PI / 2; // Face out?
        // Actually since sides are X-planes, normal should be X. So Rotation Y=PI/2 makes normal Z.
        // Plane is XY by default. Normal +Z.
        // To face +X: Rotate Y = PI/2.

        // Find the "Cargo" mesh to be precise if possible, otherwise guess offsets.
        // Let's attach to 'object' root.

        // Improve Placement: Find 'box' mesh precise bounds
        let boxMesh = null;
        object.traverse(c => {
            if (!boxMesh && (c.name.toLowerCase().includes('box') || c.name.toLowerCase().includes('cargo'))) {
                boxMesh = c;
            }
        });

        if (boxMesh) {
            const bBox = new THREE.Box3().setFromObject(boxMesh);
            const bSize = bBox.getSize(new THREE.Vector3());
            const bCenter = bBox.getCenter(new THREE.Vector3());

            // Convert World Center to Local
            // This is getting complex due to transforms.
            // Simpler: Just rely on the main object bbox we calculated earlier (which is world aligned *before* adding to scene? No, setFromObject reads current world structure).

            // Let's just hardcode offsets relative to the main `object` center, it is safer.
            // Original Model Size (before scale 0.75):
            // Width (X): ~2.5m? Length (Z): ~8m? Height (Y): ~3.5m?
            // After Scale 0.75:

            // Offset calculation:
            // Side (Local X): roughly +/- (truckSize.x / 2) - epsilon? 
            // Note: 'size' from getFromObject includes rotation? No, 'object' has rot Y PI/2.
            // But we are adding children TO 'object'. We work in LOCAL space.
            // In LOCAL space (pre-rotation), truck faces -Z. Width is X.
            // X width is the narrow dimension? No, Truck Width is usually narrow (2.5m). Length is Z (8m).

            const halfWidth = 1.25; // x
            const heightCenter = 2.5; // y
            const lengthCenter = -2.0; // z (Box is usually behind cabin)

            const s1 = stickerLeft.clone();
            s1.position.set(1.5, 2.7, -1.0); // Moved to Z = -1.0 per user request
            s1.rotation.y = Math.PI / 2;
            object.add(s1);

            const s2 = stickerLeft.clone();
            s2.position.set(-1.5, 2.7, -1.0); // Moved to Z = -1.0
            s2.rotation.y = -Math.PI / 2;
            object.add(s2);
            s2.rotation.y = -Math.PI / 2;
            object.add(s2);

            console.log("✅ Added Logo Stickers");
        } else {
            // Fallback if no box name found
            const s1 = stickerLeft.clone();
            s1.position.set(1.3, 2.5, -2);
            s1.rotation.y = Math.PI / 2;
            object.add(s1);
            const s2 = stickerLeft.clone();
            s2.position.set(-1.3, 2.5, -2);
            s2.rotation.y = -Math.PI / 2;
            object.add(s2);
        }

        truckGroup.add(object);

        // --- WHEEL FIX (Reusing Logic) ---
        const wheels = [];
        object.traverse((child) => {
            if (child.isMesh && child.name.toLowerCase().includes('wheel')) wheels.push(child);
        });

        wheels.forEach(wheel => {
            const wheelBox = new THREE.Box3().setFromObject(wheel);
            const wheelCenter = wheelBox.getCenter(new THREE.Vector3());
            const size = wheelBox.getSize(new THREE.Vector3()); // World Size

            const pivot = new THREE.Group();
            pivot.name = `pivot_${wheel.name}`;

            const parentInverse = new THREE.Matrix4().copy(wheel.parent.matrixWorld).invert();
            const localCenter = wheelCenter.clone().applyMatrix4(parentInverse);

            pivot.position.copy(localCenter);
            wheel.parent.add(pivot);

            // Hide original
            wheel.visible = false;

            // HIDE FAR SIDE WHEELS Check
            // Truck faces -Z (local). Left is +X, Right is -X.
            // Scene view is from Z positive (Side view).
            // Truck rotates Y=90, so it faces +X world.
            // Its Right side (-X local) is facing the camera (+Z world).
            // Its Left side (+X local) is away from camera (-Z world).
            // So we HIDE positive X.
            if (localCenter.x > 0) {
                // Far side wheel. Don't generate new wheel.
                return;
            }

            pivot.add(wheel);
            wheel.position.sub(localCenter);

            // Create New Wheel
            const parentScale = new THREE.Vector3();
            wheel.parent.getWorldScale(parentScale);
            const scaleFactor = 1 / (parentScale.x || 0.5);

            const radius = (Math.max(size.y, size.z) / 2) * scaleFactor;
            const width = size.x * scaleFactor;

            const newWheelGroup = new THREE.Group();

            const tireGeom = new THREE.CylinderGeometry(radius, radius, width, 24);
            const tireMat = new THREE.MeshStandardMaterial({ color: 0x111111, roughness: 0.9 });
            const tire = new THREE.Mesh(tireGeom, tireMat);
            tire.rotation.z = Math.PI / 2;
            newWheelGroup.add(tire);

            const rimRadius = radius * 0.6;
            const rimGeom = new THREE.CylinderGeometry(rimRadius, rimRadius, width * 1.05, 24);
            const rimMat = new THREE.MeshStandardMaterial({ color: 0xcccccc, metalness: 0.8 });
            const rim = new THREE.Mesh(rimGeom, rimMat);
            rim.rotation.z = Math.PI / 2;
            newWheelGroup.add(rim);

            const spokeGeom = new THREE.BoxGeometry(width * 1.1, radius * 0.15, radius * 1.6);
            const spokeMat = new THREE.MeshStandardMaterial({ color: 0x888888 });
            const spoke1 = new THREE.Mesh(spokeGeom, spokeMat);
            newWheelGroup.add(spoke1);
            const spoke2 = new THREE.Mesh(spokeGeom, spokeMat);
            spoke2.rotation.x = Math.PI / 2;
            newWheelGroup.add(spoke2);

            newWheelGroup.name = "generated_wheel";
            pivot.add(newWheelGroup);
        });

        // --- START ANIMATION ONCE LOADED ---
        startAnimation();

    });
});

// --- DUST SYSTEM ---
const particleCount = 1000;
const particlesGeom = new THREE.BufferGeometry();
const particlePositions = new Float32Array(particleCount * 3);
const particleVelocities = [];
const particleLife = new Float32Array(particleCount);

for (let i = 0; i < particleCount; i++) {
    particlePositions[i * 3 + 1] = -500; // Hide deep underground
    particleVelocities.push({ x: 0, y: 0, z: 0 });
    particleLife[i] = 0;
}

particlesGeom.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));

const particleMat = new THREE.PointsMaterial({
    color: 0x555555,
    size: 5.0,
    transparent: true,
    opacity: 0.6,
    map: createDustTexture(),
    depthWrite: false,
    blending: THREE.NormalBlending
});

const particleSystem = new THREE.Points(particlesGeom, particleMat);
particleSystem.frustumCulled = false;
scene.add(particleSystem);

function createDustTexture() {
    const cvs = document.createElement('canvas');
    cvs.width = 32; cvs.height = 32;
    const ctx = cvs.getContext('2d');
    const grd = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
    grd.addColorStop(0, 'rgba(255,255,255,1)');
    grd.addColorStop(1, 'rgba(255,255,255,0)');
    ctx.fillStyle = grd;
    ctx.fillRect(0, 0, 32, 32);
    return new THREE.CanvasTexture(cvs);
}

let emitDust = false;

// --- ANIMATION SEQUENCE ---
function startAnimation() {
    const tl = gsap.timeline();

    // PHASE 1: ENTER
    tl.to(truckGroup.position, {
        x: CENTER_X,
        duration: 3.5,
        ease: "power2.out",
        onUpdate: () => updateWheels(0.7)
    });

    // Bounce
    tl.to(truckGroup.position, { y: 0.2, duration: 0.2, yoyo: true, repeat: 1, ease: "sine.inOut" }, "-=0.5");

    // PHASE 2: IDLE
    tl.to({}, { duration: 1.0 });

    // PHASE 3: EXIT + DUST
    tl.to(truckGroup.position, {
        x: END_X,
        duration: 1.2,
        ease: "power3.in",
        onStart: () => {
            console.log("SMOKE START");
            emitDust = true;
        },
        onUpdate: () => updateWheels(3.0),
        onComplete: () => { emitDust = false; }
    });

    // PHASE 4: UI FADE
    tl.add(() => {
        document.getElementById('content-overlay').classList.add('visible');
    }, "-=0.8");
}

function updateWheels(speedFactor) {
    const model = truckGroup.children[0];
    if (model) {
        model.traverse((child) => {
            if (child.name.includes('pivot_')) {
                child.rotation.x -= 0.1 * speedFactor;
            }
        });
    }
}

// --- LOOP ---
const clock = new THREE.Clock();
function animate() {
    requestAnimationFrame(animate);
    const delta = Math.min(clock.getDelta(), 0.1);

    if (emitDust) {
        const truckX = truckGroup.position.x;
        const spawnX = truckX - 3.5;
        const spawnY = 0.5;

        for (let k = 0; k < 20; k++) {
            for (let i = 0; i < particleCount; i++) {
                if (particleLife[i] <= 0) {
                    particleLife[i] = 1.0 + Math.random();
                    particlePositions[i * 3] = spawnX + (Math.random() - 0.5) * 2;
                    particlePositions[i * 3 + 1] = spawnY + Math.random() * 0.5;
                    const side = Math.random() > 0.5 ? 1 : -1;
                    particlePositions[i * 3 + 2] = (side * 2.5) + (Math.random() - 0.5) * 1.5;

                    particleVelocities[i] = {
                        x: -2.0 - Math.random() * 3.0,
                        y: 0.3 + Math.random() * 0.8,
                        z: (Math.random() - 0.5) * 1.5
                    };
                    break;
                }
            }
        }
    }

    let activeAny = false;
    for (let i = 0; i < particleCount; i++) {
        if (particleLife[i] > 0) {
            activeAny = true;
            particlePositions[i * 3] += particleVelocities[i].x * delta * 20;
            particlePositions[i * 3 + 1] += particleVelocities[i].y * delta * 20;
            particlePositions[i * 3 + 2] += particleVelocities[i].z * delta * 20;

            particleVelocities[i].x *= 0.95;
            particleVelocities[i].y += 0.1 * delta * 20;
            particleLife[i] -= delta * 0.8;

            if (particleLife[i] <= 0) {
                particlePositions[i * 3 + 1] = -500;
            }
        }
    }

    if (activeAny) {
        particlesGeom.attributes.position.needsUpdate = true;
        particlesGeom.computeBoundingSphere();
    }

    renderer.render(scene, camera);
}
animate();

window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});
