"use client";

import { Canvas } from "@react-three/fiber";
import { Physics, useSphere } from "@react-three/cannon";
import { useRef, useMemo } from "react";
import { Mesh } from "three";
import * as THREE from "three";

function Ball({ position, color }: { position: [number, number, number]; color: string }) {
  const [ref] = useSphere(() => ({
    mass: 1,
    position,
    args: [0.5],
    material: {
      friction: 0.1,
      restitution: 0.7,
    },
  }));

  return (
    <mesh ref={ref as React.Ref<Mesh>} castShadow receiveShadow>
      <sphereGeometry args={[0.5, 32, 32]} />
      <meshStandardMaterial 
        color={color} 
        roughness={0.1}
        metalness={0.1}
      />
    </mesh>
  );
}

function Ground() {
  return (
    <mesh receiveShadow position={[0, -1, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      <planeGeometry args={[20, 20]} />
      <meshStandardMaterial 
        color="#F8F6EE" 
        roughness={0.8}
        metalness={0.1}
      />
    </mesh>
  );
}

function Walls() {
  return (
    <>
      {/* 左牆 */}
      <mesh position={[-10, 4, 0]} rotation={[0, Math.PI / 2, 0]}>
        <planeGeometry args={[8, 10]} />
        <meshStandardMaterial color="#F0F8F0" transparent opacity={0.3} />
      </mesh>
      {/* 右牆 */}
      <mesh position={[10, 4, 0]} rotation={[0, -Math.PI / 2, 0]}>
        <planeGeometry args={[8, 10]} />
        <meshStandardMaterial color="#F0F8F0" transparent opacity={0.3} />
      </mesh>
      {/* 後牆 */}
      <mesh position={[0, 4, -10]} rotation={[0, 0, 0]}>
        <planeGeometry args={[20, 10]} />
        <meshStandardMaterial color="#F0F8F0" transparent opacity={0.3} />
      </mesh>
      {/* 前牆 */}
      <mesh position={[0, 4, 10]} rotation={[0, Math.PI, 0]}>
        <planeGeometry args={[20, 10]} />
        <meshStandardMaterial color="#F0F8F0" transparent opacity={0.3} />
      </mesh>
    </>
  );
}

export default function Ballpit() {
  const colors = ["#E8F5E8", "#F0F8F0", "#D4F1C5"]; // 白色和淺綠色系
  
  const balls = useMemo(() => {
    return Array.from({ length: 80 }, (_, i) => ({
      position: [
        (Math.random() - 0.5) * 18, // x: -9 到 9
        Math.random() * 8 + 2,      // y: 2 到 10
        (Math.random() - 0.5) * 18  // z: -9 到 9
      ] as [number, number, number],
      color: colors[i % colors.length],
    }));
  }, []);

  return (
    <div className="w-full h-full">
      <Canvas 
        shadows 
        camera={{ 
          position: [0, 8, 12], 
          fov: 50 
        }}
        style={{ background: 'linear-gradient(to bottom, #F8F6EE, #F0F8F0)' }}
      >
        {/* 燈光設置 */}
        <ambientLight intensity={0.6} />
        <directionalLight
          position={[10, 10, 5]}
          intensity={1}
          castShadow
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
          shadow-camera-far={50}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
        />
        <pointLight position={[-10, 10, -10]} intensity={0.5} color="#E8F5E8" />
        
        {/* 物理世界 */}
        <Physics gravity={[0, -9.81, 0]} broadphase="SAP">
          {/* 球體 */}
          {balls.map((ball, index) => (
            <Ball key={index} position={ball.position} color={ball.color} />
          ))}
          
          {/* 地面 */}
          <Ground />
          
          {/* 牆壁 */}
          <Walls />
        </Physics>
      </Canvas>
    </div>
  );
}



