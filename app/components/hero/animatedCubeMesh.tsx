"use client";

import React, { useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import * as THREE from "three";

interface CubeletPosition {
  x: number;
  y: number;
  z: number;
  originalX: number;
  originalY: number;
  originalZ: number;
}

const CubeletMesh = ({
  mouseX,
  mouseY,
}: {
  mouseX: number;
  mouseY: number;
}) => {
  const groupRef = useRef<THREE.Group>(null);
  const cubeletsRef = useRef<THREE.Mesh[]>([]);
  const [positions, setPositions] = useState<CubeletPosition[]>([]);

  const cubeletSize = 0.7;
  const gap = 0.1;
  const gridSize = 5;

  useEffect(() => {
    const newPositions: CubeletPosition[] = [];
    for (let x = 0; x < gridSize; x++) {
      for (let y = 0; y < gridSize; y++) {
        for (let z = 0; z < gridSize; z++) {
          const posX = (x - gridSize / 2) * (cubeletSize + gap);
          const posY = (y - gridSize / 2) * (cubeletSize + gap);
          const posZ = (z - gridSize / 2) * (cubeletSize + gap);

          newPositions.push({
            x: posX,
            y: posY,
            z: posZ,
            originalX: posX,
            originalY: posY,
            originalZ: posZ,
          });
        }
      }
    }
    setPositions(newPositions);
  }, []);

  useFrame(() => {
    if (!groupRef.current) return;

    cubeletsRef.current.forEach((mesh, index) => {
      if (!positions[index]) return;

      const pos = positions[index];
      const dx = mouseX - pos.originalX;
      const dy = mouseY - pos.originalY;

      const distance = Math.sqrt(dx * dx + dy * dy);
      const maxDistance = 8;
      const influence = Math.max(0, 1 - distance / maxDistance);

      const delayFactor = 0.08 + (index % 10) * 0.02;
      const speed = 0.08 * delayFactor;
      const strength = 0.3;

      mesh.position.x +=
        (pos.originalX - pos.x - dx * influence * strength) * speed;
      mesh.position.y +=
        (pos.originalY - pos.y - dy * influence * strength) * speed;

      const scale = 1 - influence * 0.15;
      mesh.scale.set(scale, scale, scale);

      pos.x = mesh.position.x;
      pos.y = mesh.position.y;
    });
  });

  return (
    <group ref={groupRef}>
      {positions.map((pos, index) => (
        <mesh
          key={index}
          position={[pos.x, pos.y, pos.z]}
          castShadow
          receiveShadow
          ref={(el) => {
            if (el) cubeletsRef.current[index] = el;
          }}
        >
          <boxGeometry args={[cubeletSize, cubeletSize, cubeletSize]} />
          <meshPhongMaterial
            color="#3f0c40"
            shininess={200}
            emissive="#4b0d52"
            wireframe={false}
            specular="#ffffff"
          />
        </mesh>
      ))}
    </group>
  );
};

export default function AnimatedCubeMesh() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = -(e.clientY / window.innerHeight) * 2 + 1;

      setMousePos({
        x: x * 5,
        y: y * 5,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="mesh-cube">
      <Canvas
        shadows
        className="mesh-cub"
        style={{ width: "100%", height: "100%" }}
      >
        <PerspectiveCamera 
          makeDefault 
          position={[0, 0, 8]} 
          fov={50} 
          near={0.1}
          far={1000}
        />

        <ambientLight intensity={0.4} />
        
        <directionalLight
          position={[10, 10, 5]}
          intensity={1.2}
          castShadow
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
          shadow-camera-near={1}
          shadow-camera-far={30}
          shadow-bias={-0.001}
          shadow-radius={2}
        />
        
        <pointLight position={[-5, 5, 10]} intensity={0.5} color="#f8a6e6" />
        <pointLight position={[0, 0, 15]} intensity={0.3} color="#f8f1a5" />

        <mesh
          rotation={[-Math.PI / 2, 0, 0]}
          position={[0, -8, 0]}
          receiveShadow
        >
          <planeGeometry args={[30, 30]} />
          <meshPhongMaterial
            color="#000000"
            shininess={0}
            emissive="#000000"
          />
        </mesh>

        <CubeletMesh mouseX={mousePos.x} mouseY={mousePos.y} />

        <fog attach="fog" args={["#000000", 5, 25]} />
      </Canvas>
    </div>
  );
}