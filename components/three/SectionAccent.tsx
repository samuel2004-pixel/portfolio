"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

type SectionAccentProps = {
  /** Base color of the sculpture */
  color?: string;
  /** Secondary ring color */
  ringColor?: string;
  /** "light" for dark rings on cream sections, "dark" for gold-on-dark sections */
  variant?: "light" | "dark";
  className?: string;
};

function Sculpture({
  color,
  ringColor,
}: {
  color: string;
  ringColor: string;
}) {
  const group = useRef<THREE.Group>(null!);
  const ring = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    const t = state.clock.elapsedTime;

    if (group.current) {
      group.current.rotation.y = t * 0.22;
      group.current.rotation.x = Math.sin(t * 0.35) * 0.2;
    }

    if (ring.current) {
      ring.current.rotation.z = t * 0.3;
    }
  });

  return (
    <Float speed={1.2} rotationIntensity={0.4} floatIntensity={1}>
      <group ref={group}>
        <mesh>
          <octahedronGeometry args={[0.85, 0]} />
          <meshPhysicalMaterial
            color={color}
            metalness={0.3}
            roughness={0.2}
            clearcoat={1}
            clearcoatRoughness={0.15}
          />
        </mesh>

        <mesh ref={ring} rotation={[1.1, 0.3, 0]}>
          <torusGeometry args={[1.3, 0.02, 16, 120]} />
          <meshStandardMaterial
            color={ringColor}
            metalness={0.2}
            roughness={0.3}
          />
        </mesh>
      </group>
    </Float>
  );
}

export default function SectionAccent({
  color,
  ringColor,
  variant = "light",
  className = "",
}: SectionAccentProps) {
  const resolvedColor = color ?? (variant === "dark" ? "#C5AE89" : "#B39A75");
  const resolvedRing = ringColor ?? (variant === "dark" ? "#EFE7DB" : "#9A7B53");

  return (
    <div className={`pointer-events-none h-full w-full ${className}`}>
      <Canvas camera={{ position: [0, 0, 5], fov: 40 }}>
        <ambientLight intensity={1.6} />
        <directionalLight position={[3, 4, 3]} intensity={1.4} />
        <pointLight position={[-3, -2, 2]} intensity={16} color={resolvedColor} />

        <Sculpture color={resolvedColor} ringColor={resolvedRing} />
      </Canvas>
    </div>
  );
}
