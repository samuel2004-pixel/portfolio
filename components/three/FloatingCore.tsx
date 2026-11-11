"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function Sculpture() {
  const group = useRef<THREE.Group>(null!);

  useFrame((state) => {
    if (!group.current) return;

    group.current.rotation.y = state.clock.elapsedTime * 0.12;
    group.current.rotation.x =
      Math.sin(state.clock.elapsedTime * 0.4) * 0.08;
  });

  return (
    <Float
      speed={1}
      rotationIntensity={0.2}
      floatIntensity={0.6}
    >
      <group ref={group}>

        <mesh rotation={[0.4, 0.2, 0]}>
          <torusGeometry args={[1.45, 0.05, 32, 220]} />
          <meshPhysicalMaterial
            color="#1E2A44"
            metalness={0.15}
            roughness={0.18}
            clearcoat={1}
          />
        </mesh>

        <mesh rotation={[1.2, 0.6, 0]}>
          <torusGeometry args={[1.1, 0.05, 32, 220]} />
          <meshPhysicalMaterial
            color="#1E2A44"
            metalness={0.15}
            roughness={0.18}
            clearcoat={1}
          />
        </mesh>

        <mesh rotation={[0.2, 1.4, 0]}>
          <torusGeometry args={[0.75, 0.05, 32, 220]} />
          <meshPhysicalMaterial
            color="#1E2A44"
            metalness={0.15}
            roughness={0.18}
            clearcoat={1}
          />
        </mesh>

      </group>
    </Float>
  );
}

export default function FloatingCore() {
  return (
    <div className="h-[620px] w-[520px]">
      <Canvas camera={{ position: [0, 0, 5], fov: 42 }}>

        <ambientLight intensity={2.2} />

        <directionalLight
          position={[4, 5, 4]}
          intensity={2}
        />

        <pointLight
          position={[-4, -2, 3]}
          intensity={1.5}
        />

        <Sculpture />

        <Environment preset="studio" />

      </Canvas>
    </div>
  );
}