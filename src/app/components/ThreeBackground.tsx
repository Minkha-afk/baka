"use client";
import { useEffect, useRef } from "react";
import * as THREE from "three";

const ThreeBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let scene: THREE.Scene, camera: THREE.PerspectiveCamera, renderer: THREE.WebGLRenderer, particles: THREE.Points;
    let mouseX = 0, mouseY = 0;
    let animationId: number;

    function createParticles() {
      const particleCount = 150;
      const geometry = new THREE.BufferGeometry();
      const positions = new Float32Array(particleCount * 3);
      const colors = new Float32Array(particleCount * 3);
      for (let i = 0; i < particleCount; i++) {
        positions[i * 3] = (Math.random() - 0.5) * 25;
        positions[i * 3 + 1] = (Math.random() - 0.5) * 25;
        positions[i * 3 + 2] = (Math.random() - 0.5) * 25;
        const colorChoice = Math.random();
        if (colorChoice < 0.33) {
          colors[i * 3] = 0;
          colors[i * 3 + 1] = 0.96;
          colors[i * 3 + 2] = 1;
        } else if (colorChoice < 0.66) {
          colors[i * 3] = 1;
          colors[i * 3 + 1] = 0;
          colors[i * 3 + 2] = 1;
        } else {
          colors[i * 3] = 0;
          colors[i * 3 + 1] = 1;
          colors[i * 3 + 2] = 0.25;
        }
      }
      geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
      geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));
      const material = new THREE.PointsMaterial({
        size: 0.08,
        vertexColors: true,
        transparent: true,
        opacity: 0.8,
        blending: THREE.AdditiveBlending,
      });
      particles = new THREE.Points(geometry, material);
      scene.add(particles);
    }

    function animate() {
      animationId = requestAnimationFrame(animate);
      if (particles) {
        particles.rotation.x += 0.0005;
        particles.rotation.y += 0.001;
      }
      camera.position.x += (mouseX - camera.position.x) * 0.05;
      camera.position.y += (-mouseY - camera.position.y) * 0.05;
      camera.lookAt(scene.position);
      renderer.render(scene, camera);
    }

    function handleMouseMove(event: MouseEvent) {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      mouseY = (event.clientY / window.innerHeight) * 2 - 1;
    }

    function handleResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    }

    // Setup
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current!,
      alpha: true,
      antialias: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    createParticles();
    camera.position.z = 5;
    animate();
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);
    // Cleanup
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationId);
      renderer.dispose();
    };
  }, []);

  return <canvas ref={canvasRef} id="three-canvas" style={{position: "fixed", top: 0, left: 0, width: "100%", height: "100%", zIndex: -1}} />;
};

export default ThreeBackground; 