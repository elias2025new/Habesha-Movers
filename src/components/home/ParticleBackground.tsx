"use client";

import { useEffect, useRef } from 'react';

const ParticleBackground = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;
        let particles: Particle[] = [];

        // Configuration - Low count for low GPU usage
        const PARTICLE_COUNT = 20;
        const COLORS = ['#8B3A2C', '#DEA02C', '#CCCCCC']; // Primary, Secondary, Grey

        class Particle {
            x: number;
            y: number;
            size: number;
            speedX: number;
            speedY: number;
            rotation: number;
            rotationSpeed: number;
            color: string;
            opacity: number;

            constructor() {
                this.x = Math.random() * canvas!.width;
                this.y = Math.random() * canvas!.height;
                this.size = Math.random() * 15 + 5; // Size between 5 and 20
                this.speedX = (Math.random() - 0.5) * 0.5; // Slow movement
                this.speedY = (Math.random() - 0.5) * 0.5;
                this.rotation = Math.random() * Math.PI * 2;
                this.rotationSpeed = (Math.random() - 0.5) * 0.02;
                this.color = COLORS[Math.floor(Math.random() * COLORS.length)];
                this.opacity = Math.random() * 0.5 + 0.3; // Much higher opacity (0.3 to 0.8)
            }

            update() {
                this.x += this.speedX;
                this.y += this.speedY;
                this.rotation += this.rotationSpeed;

                // Wrap around screen
                if (this.x > canvas!.width + 50) this.x = -50;
                if (this.x < -50) this.x = canvas!.width + 50;
                if (this.y > canvas!.height + 50) this.y = -50;
                if (this.y < -50) this.y = canvas!.height + 50;
            }

            draw() {
                if (!ctx) return;
                ctx.save();
                ctx.translate(this.x, this.y);
                ctx.rotate(this.rotation);
                ctx.globalAlpha = this.opacity;
                ctx.fillStyle = this.color;

                // Draw Box (Square)
                const halfSize = this.size / 2;
                ctx.fillRect(-halfSize, -halfSize, this.size, this.size);

                // Optional: Draw stroke for "box" look
                ctx.strokeStyle = this.color;
                ctx.lineWidth = 1;
                ctx.strokeRect(-halfSize, -halfSize, this.size, this.size);

                ctx.restore();
            }
        }

        const init = () => {
            resizeCanvas();
            particles = [];
            for (let i = 0; i < PARTICLE_COUNT; i++) {
                particles.push(new Particle());
            }
        };

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particles.forEach(particle => {
                particle.update();
                particle.draw();
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        window.addEventListener('resize', resizeCanvas);
        init();
        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
            style={{ opacity: 1.0 }}
        />
    );
};

export default ParticleBackground;
