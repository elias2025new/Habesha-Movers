'use client';

import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader.js';
import gsap from 'gsap';

export default function Preloader() {
    const containerRef = useRef<HTMLDivElement>(null);
    const backgroundRef = useRef<HTMLDivElement>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        document.body.classList.add('preloader-active');
        return () => {
            document.body.classList.remove('preloader-active');
        };
    }, []);

    useEffect(() => {
        if (!containerRef.current) return;

        // --- BOT DETECTION ---
        // Skip difficult 3D animation for bots/crawlers to improve SEO and indexing speed
        const userAgent = navigator.userAgent.toLowerCase();
        const isBot = /bot|googlebot|crawler|spider|robot|crawling/i.test(userAgent);

        if (isBot) {
            setLoading(false);
            return;
        }

        // --- SCENE SETUP ---
        const scene = new THREE.Scene();
        // scene.background = new THREE.Color(0xf0f0f0); // REMOVED: Managed by DOM element for transparency
        // scene.fog = new THREE.Fog(0xf0f0f0, 20, 100); // REMOVED: Fog interferes with transparency

        const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
        // Side view, slightly elevated
        camera.position.set(0, 5, 30);
        camera.lookAt(0, 2, 0);

        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.shadowMap.enabled = true;
        renderer.shadowMap.type = THREE.PCFSoftShadowMap;
        containerRef.current.appendChild(renderer.domElement);

        // --- LIGHTING ---
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
        scene.add(ambientLight);

        const dirLight = new THREE.DirectionalLight(0xffffff, 1.5);
        dirLight.position.set(10, 20, 10);
        dirLight.castShadow = true;
        dirLight.shadow.mapSize.width = 2048;
        dirLight.shadow.mapSize.height = 2048;
        scene.add(dirLight);

        // Floor - Make shadow plane only
        const planeGeom = new THREE.PlaneGeometry(500, 500);
        const planeMat = new THREE.ShadowMaterial({ opacity: 0.1 });
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

        // Slogan Texture - Try to load from public folder
        const sloganTexture = new THREE.TextureLoader().load('/truck/new_logo.png?v=' + Date.now(),
            undefined,
            undefined,
            (err) => console.warn('Logo texture load error', err)
        );
        sloganTexture.colorSpace = THREE.SRGBColorSpace;
        sloganTexture.flipY = true;

        // --- DUST SYSTEM ---
        const particleCount = 1000;
        const particlesGeom = new THREE.BufferGeometry();
        const particlePositions = new Float32Array(particleCount * 3);
        const particleVelocities: { x: number, y: number, z: number }[] = [];
        const particleLife = new Float32Array(particleCount);

        for (let i = 0; i < particleCount; i++) {
            particlePositions[i * 3 + 1] = -500; // Hide deep underground
            particleVelocities.push({ x: 0, y: 0, z: 0 });
            particleLife[i] = 0;
        }

        particlesGeom.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));

        function createDustTexture() {
            const cvs = document.createElement('canvas');
            cvs.width = 32; cvs.height = 32;
            const ctx = cvs.getContext('2d');
            if (ctx) {
                const grd = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
                grd.addColorStop(0, 'rgba(255,255,255,1)');
                grd.addColorStop(1, 'rgba(255,255,255,0)');
                ctx.fillStyle = grd;
                ctx.fillRect(0, 0, 32, 32);
            }
            return new THREE.CanvasTexture(cvs);
        }

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

        let emitDust = false;

        // --- ANIMATION SEQUENCE ---
        function startAnimation() {
            const tl = gsap.timeline({
                onComplete: () => {
                    setLoading(false);
                }
            });

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

            // PHASE 3: EXIT + DUST + FADE BACKGROUND
            tl.add('exit');

            // Truck moves out
            tl.to(truckGroup.position, {
                x: END_X,
                duration: 1.2,
                ease: "power3.in",
                onStart: () => {
                    emitDust = true;
                },
                onUpdate: () => updateWheels(3.0),
                onComplete: () => { emitDust = false; }
            }, 'exit');

            // Fade out background slightly before truck leaves to reveal page
            if (backgroundRef.current) {
                tl.to(backgroundRef.current, {
                    opacity: 0,
                    backdropFilter: 'blur(0px)', // Animate blur removal
                    duration: 0.8,
                    ease: "power2.inOut"
                }, 'exit');
            }

            // Slight buffer before removing component
            tl.to({}, { duration: 0.5 });
        }

        function updateWheels(speedFactor: number) {
            if (truckGroup.children.length === 0) return;
            const model = truckGroup.children[0];
            if (model) {
                model.traverse((child) => {
                    if (child.name.includes('pivot_')) {
                        child.rotation.x -= 0.1 * speedFactor;
                    }
                });
            }
        }


        // --- LOAD MODEL ---
        const mtlLoader = new MTLLoader();
        mtlLoader.setPath('/truck/');
        mtlLoader.load('tru.mtl', (materials) => {
            materials.preload();
            const objLoader = new OBJLoader();
            objLoader.setMaterials(materials);
            objLoader.setPath('/truck/');
            objLoader.load('tru.obj', (object) => {
                // --- MATERIAL FIXES ---
                object.traverse((child) => {
                    if ((child as THREE.Mesh).isMesh) {
                        child.castShadow = true;
                        child.receiveShadow = true;
                        const meshChild = child as THREE.Mesh;
                        if (meshChild.material) {
                            // Type assertion to handle potential array of materials (though OBJLoader usually returns one or MeshPhongMaterial)
                            const mat = Array.isArray(meshChild.material) ? meshChild.material[0] : meshChild.material;
                            mat.side = THREE.DoubleSide;

                            const name = child.name.toLowerCase();

                            // 1. SPECIFIC BODY PARTS (Bi-Color Logic)
                            // 1. FORCE WHITE (Cabin) & GRAY (Box/Logo Background)
                            if (name === 'body_body') {
                                (mat as any).color.set(0xffffff); // Cabin -> White
                                (mat as any).map = null;
                                mat.transparent = false;
                                mat.opacity = 1.0;
                                mat.depthWrite = true;
                            }
                            else if (name === 'body_matte_colors' || name === 'body_misc') {
                                (mat as any).color.set(0x999999); // Box -> Gray (Logo Background)
                                (mat as any).map = null;
                                mat.transparent = false;
                                mat.opacity = 1.0;
                                mat.depthWrite = true;
                            }
                            // 2. GLASS & LIGHTS
                            else if (name.includes('glass') || name.includes('window')) {
                                mat.transparent = true;
                                mat.opacity = 0.4;
                                (mat as any).color.set(0xffffff);
                            }
                            // 3. BLACK PARTS
                            else if (name.includes('tire') || name.includes('wheel') || name.includes('chassis') || name.includes('black') || name.includes('grill') || name.includes('bumper') || name.includes('exhaust')) {
                                (mat as any).color.set(0x111111);
                            }
                            // 4. FALLBACK
                            else {
                                if (!(mat as any).map) {
                                    (mat as any).color.set(0xffffff);
                                }
                            }
                        }
                    }
                });

                // --- POSITIONING & SCALE ---
                object.scale.set(1.4, 1.4, 1.4);

                const box2 = new THREE.Box3().setFromObject(object);
                const minY = box2.min.y;
                object.position.y = -minY;
                object.rotation.y = Math.PI / 2;

                // --- LOGO PLANES (Stickers) ---
                // Simple hardcoded offset approach based on intro.js

                // Check if we can find the box mesh
                let boxMesh: THREE.Object3D | null = null;
                object.traverse((c: THREE.Object3D) => {
                    if (!boxMesh && (c.name.toLowerCase().includes('box') || c.name.toLowerCase().includes('cargo'))) {
                        boxMesh = c;
                    }
                });

                const decalGeom = new THREE.PlaneGeometry(6.3, 2.2);
                const decalMat = new THREE.MeshBasicMaterial({
                    map: sloganTexture,
                    transparent: true,
                    opacity: 1.0,
                    side: THREE.DoubleSide,
                    blending: THREE.MultiplyBlending,
                    premultipliedAlpha: true
                });

                // Fallback offsets from intro.js
                const s1 = new THREE.Mesh(decalGeom, decalMat);
                s1.position.set(1.3, 2.7, -1.0); // Tweaked Z per intro.js latest
                s1.rotation.y = Math.PI / 2;
                object.add(s1);

                const s2 = new THREE.Mesh(decalGeom, decalMat);
                s2.position.set(-1.3, 2.7, -1.0);
                s2.rotation.y = -Math.PI / 2;
                object.add(s2);

                truckGroup.add(object);

                // --- WHEEL FIX ---
                const wheels: THREE.Object3D[] = [];
                object.traverse((child) => {
                    if ((child as THREE.Mesh).isMesh && child.name.toLowerCase().includes('wheel')) wheels.push(child);
                });

                wheels.forEach(wheel => {
                    const wheelBox = new THREE.Box3().setFromObject(wheel);
                    const wheelCenter = wheelBox.getCenter(new THREE.Vector3());
                    const size = wheelBox.getSize(new THREE.Vector3());

                    const pivot = new THREE.Group();
                    pivot.name = `pivot_${wheel.name}`;

                    if (wheel.parent) {
                        const parentInverse = new THREE.Matrix4().copy(wheel.parent.matrixWorld).invert();
                        const localCenter = wheelCenter.clone().applyMatrix4(parentInverse);

                        pivot.position.copy(localCenter);
                        wheel.parent.add(pivot);
                        wheel.visible = false;

                        // Hide far side wheels
                        if (localCenter.x > 0) return;

                        pivot.add(wheel);
                        wheel.position.sub(localCenter);

                        // Reconstruct Wheel
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
                    }
                });

                startAnimation();
            });
        });

        // --- ANIMATION LOOP ---
        const clock = new THREE.Clock();
        let requestId: number;

        function animate() {
            requestId = requestAnimationFrame(animate);
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

        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(requestId);
            if (containerRef.current) {
                if (containerRef.current.contains(renderer.domElement)) {
                    containerRef.current.removeChild(renderer.domElement);
                }
            }
            renderer.dispose();
            // Clean up other resources if needed
        };
    }, []); // Run once on mount

    if (!loading) return null;

    return (
        <div
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: 10000,
                pointerEvents: 'none'
            }}
        >
            {/* Background Layer - Glassmorphism */}
            <div
                ref={backgroundRef}
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(255,255,255,0.7)', // Semi-transparent white
                    backdropFilter: 'blur(15px)', // Heavy blur
                    zIndex: 0
                }}
            />
            {/* 3D Canvas Container */}
            <div
                ref={containerRef}
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    zIndex: 1,
                    backgroundColor: 'transparent'
                }}
            />
        </div>
    );
}
