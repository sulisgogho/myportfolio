'use client';

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { useTheme } from 'next-themes';

interface Projects3DBackgroundProps {
    className?: string;
}

export function Projects3DBackground({ className = '' }: Projects3DBackgroundProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const { resolvedTheme } = useTheme();

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const isDark = resolvedTheme === 'dark';

        // 1. Scene, Camera, Renderer
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(
            60,
            container.clientWidth / container.clientHeight,
            0.1,
            1000
        );
        camera.position.set(0, 8, 22);
        camera.lookAt(0, 0, 0);

        const renderer = new THREE.WebGLRenderer({
            alpha: true,
            antialias: true,
            powerPreference: 'high-performance',
        });
        renderer.setSize(container.clientWidth, container.clientHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        container.appendChild(renderer.domElement);

        // 2. Interactive 3D Cyber Wave Mesh (Point Grid Matrix)
        const cols = 45;
        const rows = 45;
        const count = cols * rows;
        const separation = 1.3;

        const positions = new Float32Array(count * 3);
        const originalY = new Float32Array(count);
        const colors = new Float32Array(count * 3);

        const color1 = new THREE.Color(isDark ? 0x38bdf8 : 0x0284c7); // Cyan / Sky
        const color2 = new THREE.Color(isDark ? 0xa855f7 : 0x7c3aed); // Purple / Violet
        const tempColor = new THREE.Color();

        let index = 0;
        for (let ix = 0; ix < cols; ix++) {
            for (let iz = 0; iz < rows; iz++) {
                const x = (ix - cols / 2) * separation;
                const z = (iz - rows / 2) * separation;
                const y = 0;

                positions[index * 3] = x;
                positions[index * 3 + 1] = y;
                positions[index * 3 + 2] = z;

                originalY[index] = y;

                // Color gradient along diagonal
                const ratio = (ix + iz) / (cols + rows);
                tempColor.copy(color1).lerp(color2, ratio);

                colors[index * 3] = tempColor.r;
                colors[index * 3 + 1] = tempColor.g;
                colors[index * 3 + 2] = tempColor.b;

                index++;
            }
        }

        const geometry = new THREE.BufferGeometry();
        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

        // Soft circular glowing particle texture
        const createParticleTexture = () => {
            const canvas = document.createElement('canvas');
            canvas.width = 64;
            canvas.height = 64;
            const ctx = canvas.getContext('2d');
            if (ctx) {
                const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
                gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
                gradient.addColorStop(0.3, 'rgba(255, 255, 255, 0.7)');
                gradient.addColorStop(0.8, 'rgba(255, 255, 255, 0.15)');
                gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
                ctx.fillStyle = gradient;
                ctx.fillRect(0, 0, 64, 64);
            }
            const texture = new THREE.CanvasTexture(canvas);
            return texture;
        };

        const material = new THREE.PointsMaterial({
            size: 0.45,
            vertexColors: true,
            map: createParticleTexture(),
            transparent: true,
            opacity: isDark ? 0.75 : 0.55,
            blending: THREE.AdditiveBlending,
            depthWrite: false,
        });

        const waveMesh = new THREE.Points(geometry, material);
        waveMesh.rotation.x = 0.35; // Tilted towards user
        waveMesh.position.y = -4;
        scene.add(waveMesh);

        // 3. Floating Geometric Wireframe Polyhedron above the waves
        const polyGeo = new THREE.IcosahedronGeometry(3.5, 1);
        const polyMat = new THREE.MeshBasicMaterial({
            color: isDark ? 0x38bdf8 : 0x2563eb,
            wireframe: true,
            transparent: true,
            opacity: isDark ? 0.22 : 0.15,
        });
        const polyMesh = new THREE.Mesh(polyGeo, polyMat);
        polyMesh.position.set(12, 3, -6);
        scene.add(polyMesh);

        // Inner glowing core
        const coreGeo = new THREE.OctahedronGeometry(1.8, 0);
        const coreMat = new THREE.MeshBasicMaterial({
            color: isDark ? 0xa855f7 : 0x9333ea,
            wireframe: true,
            transparent: true,
            opacity: isDark ? 0.35 : 0.25,
        });
        const coreMesh = new THREE.Mesh(coreGeo, coreMat);
        polyMesh.add(coreMesh);

        // 4. Mouse Tracking & Scroll Velocity Tracking
        let mouseX = 0;
        let mouseY = 0;
        let targetX = 0;
        let targetY = 0;

        let scrollY = window.scrollY || 0;
        let targetScrollY = scrollY;
        let scrollVelocity = 0;
        let lastScrollY = scrollY;

        const handleMouseMove = (e: MouseEvent) => {
            const rect = container.getBoundingClientRect();
            mouseX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
            mouseY = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
        };

        const handleScroll = () => {
            const currentScroll = window.scrollY || window.pageYOffset;
            targetScrollY = currentScroll;
            scrollVelocity = (currentScroll - lastScrollY) * 0.08;
            lastScrollY = currentScroll;
        };

        window.addEventListener('mousemove', handleMouseMove, { passive: true });
        window.addEventListener('scroll', handleScroll, { passive: true });

        // 5. Animation Loop
        let animId: number;
        const clock = new THREE.Clock();

        const animate = () => {
            animId = requestAnimationFrame(animate);

            const elapsedTime = clock.getElapsedTime();

            // Smooth mouse interpolation
            targetX += (mouseX - targetX) * 0.05;
            targetY += (mouseY - targetY) * 0.05;

            // Smooth scroll interpolation & decay velocity
            scrollY += (targetScrollY - scrollY) * 0.08;
            scrollVelocity *= 0.92; // Friction decay

            // Calculate dynamic wave animation influenced by scroll & mouse
            const posAttr = geometry.attributes.position as THREE.BufferAttribute;
            const posArr = posAttr.array as Float32Array;

            let idx = 0;
            const scrollFactor = scrollY * 0.003;
            const waveSpeed = elapsedTime * 1.5 + scrollFactor;

            for (let ix = 0; ix < cols; ix++) {
                for (let iz = 0; iz < rows; iz++) {
                    const i3 = idx * 3;
                    const x = posArr[i3];
                    const z = posArr[i3 + 2];

                    // Combined sinusoidal wave + scroll dynamic ripple + mouse ripple
                    const wave1 = Math.sin(x * 0.25 + waveSpeed);
                    const wave2 = Math.cos(z * 0.25 + waveSpeed * 0.8);
                    const distFromCenter = Math.sqrt(x * x + z * z);
                    const ripple = Math.sin(distFromCenter * 0.3 - waveSpeed * 1.2) * (1 + Math.abs(scrollVelocity) * 0.2);

                    posArr[i3 + 1] = (wave1 + wave2) * 1.2 + ripple * 0.8;

                    idx++;
                }
            }
            posAttr.needsUpdate = true;

            // Rotate Wave Matrix subtly with scroll & mouse
            waveMesh.rotation.z = Math.sin(elapsedTime * 0.3) * 0.05 + targetX * 0.08 + scrollVelocity * 0.02;
            waveMesh.rotation.y = targetX * 0.15;
            waveMesh.position.z = Math.min(2, scrollVelocity * 0.1);

            // Animate floating Polyhedron & respond to scroll
            polyMesh.rotation.x = elapsedTime * 0.3 + scrollY * 0.002;
            polyMesh.rotation.y = elapsedTime * 0.4 + scrollY * 0.003;
            polyMesh.position.y = 3 + Math.sin(elapsedTime * 0.8) * 1.2 - (scrollY % 500) * 0.01;

            coreMesh.rotation.x = -elapsedTime * 0.6;
            coreMesh.rotation.y = elapsedTime * 0.5;

            // Camera reacts subtly to scroll
            camera.position.y = 8 + targetY * 2 - (scrollY % 800) * 0.005;
            camera.position.x = targetX * 3;
            camera.lookAt(0, 0, 0);

            renderer.render(scene, camera);
        };

        animate();

        // 6. Responsive Resize
        const handleResize = () => {
            if (!container) return;
            camera.aspect = container.clientWidth / container.clientHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(container.clientWidth, container.clientHeight);
        };

        window.addEventListener('resize', handleResize);

        // Cleanup
        return () => {
            cancelAnimationFrame(animId);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
            if (container.contains(renderer.domElement)) {
                container.removeChild(renderer.domElement);
            }
            geometry.dispose();
            material.dispose();
            polyGeo.dispose();
            polyMat.dispose();
            coreGeo.dispose();
            coreMat.dispose();
            renderer.dispose();
        };
    }, [resolvedTheme]);

    return (
        <div
            ref={containerRef}
            className={`pointer-events-none select-none absolute inset-0 overflow-hidden ${className}`}
            style={{ zIndex: 0 }}
        />
    );
}
