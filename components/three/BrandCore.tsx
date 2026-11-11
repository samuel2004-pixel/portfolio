"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, RoundedBox, Sparkles as DreiSparkles } from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";

/**
 * BrandCore
 * The centerpiece 3D scene for the loading screen. Built from the same
 * warm cream / gold "AI Product Studio" language used across the Hero,
 * floating cards and Footer, so the loader feels like the opening frame
 * of the same visual world instead of a generic tech loader.
 *
 * Layers: a glowing gold core, a wireframe containment shell spinning
 * the opposite way, three orbiting rings, a swarm of orbiting shards,
 * a drifting particle field, and a slow camera drift for parallax.
 */

const GOLD = "#4ADE80";
const GOLD_DEEP = "#22D3EE";
const CREAM = "#132036";
const CREAM_DEEP = "#1E2A44";

type BrandCoreProps = {
  /** 0-100 loading progress; nudges the core's energy as it climbs */
  progress?: number;
};

function CoreShape({ progress = 60 }: { progress?: number }) {
  const meshRef = useRef<THREE.Mesh>(null!);
  const materialRef = useRef<THREE.MeshPhysicalMaterial>(null!);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.35;
      meshRef.current.rotation.x =
        Math.sin(state.clock.elapsedTime * 0.4) * 0.15;

      const pulse = 1 + Math.sin(state.clock.elapsedTime * 1.6) * 0.05;
      meshRef.current.scale.setScalar(pulse);
    }

    if (materialRef.current) {
      const energy = 0.3 + (progress / 100) * 0.55;
      materialRef.current.emissiveIntensity =
        energy + Math.sin(state.clock.elapsedTime * 2.2) * 0.08;
    }
  });

  return (
    <mesh ref={meshRef}>
      <icosahedronGeometry args={[1.05, 1]} />
      <meshPhysicalMaterial
        ref={materialRef}
        color={GOLD}
        metalness={0.35}
        roughness={0.15}
        clearcoat={1}
        clearcoatRoughness={0.1}
        emissive={GOLD_DEEP}
        emissiveIntensity={0.35}
      />
    </mesh>
  );
}

function ContainmentShell() {
  const shellRef = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    if (!shellRef.current) return;
    shellRef.current.rotation.y = -state.clock.elapsedTime * 0.18;
    shellRef.current.rotation.x = state.clock.elapsedTime * 0.09;
  });

  return (
    <mesh ref={shellRef}>
      <icosahedronGeometry args={[1.55, 1]} />
      <meshBasicMaterial
        color={CREAM}
        wireframe
        transparent
        opacity={0.18}
      />
    </mesh>
  );
}

function OrbitRings() {
  const ringA = useRef<THREE.Mesh>(null!);
  const ringB = useRef<THREE.Mesh>(null!);
  const ringC = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (ringA.current) ringA.current.rotation.x = t * 0.25;
    if (ringB.current) ringB.current.rotation.y = t * 0.3;
    if (ringC.current) ringC.current.rotation.z = t * 0.2;
  });

  return (
    <group>
      <mesh ref={ringA} rotation={[0.5, 0.2, 0]}>
        <torusGeometry args={[1.9, 0.025, 24, 200]} />
        <meshStandardMaterial
          color={CREAM_DEEP}
          metalness={0.2}
          roughness={0.25}
        />
      </mesh>

      <mesh ref={ringB} rotation={[1.1, 0.6, 0]}>
        <torusGeometry args={[2.35, 0.02, 24, 200]} />
        <meshStandardMaterial
          color={GOLD}
          metalness={0.2}
          roughness={0.2}
          emissive={GOLD}
          emissiveIntensity={0.25}
        />
      </mesh>

      <mesh ref={ringC} rotation={[0.2, 1.3, 0.4]}>
        <torusGeometry args={[2.75, 0.015, 24, 200]} />
        <meshStandardMaterial
          color={CREAM}
          metalness={0.15}
          roughness={0.3}
        />
      </mesh>
    </group>
  );
}

type ShardConfig = {
  radius: number;
  height: number;
  speed: number;
  offset: number;
  size: number;
  tilt: number;
  kind: "box" | "torus" | "octa";
};

function OrbitingShards() {
  const shards = useMemo<ShardConfig[]>(
    () => [
      { radius: 2.6, height: 0.4, speed: 0.35, offset: 0, size: 0.22, tilt: 0.3, kind: "box" },
      { radius: 3.1, height: -0.3, speed: 0.28, offset: 2.1, size: 0.16, tilt: -0.4, kind: "octa" },
      { radius: 2.3, height: 0.9, speed: 0.42, offset: 4.2, size: 0.13, tilt: 0.6, kind: "box" },
      { radius: 3.4, height: -0.6, speed: 0.22, offset: 1.3, size: 0.19, tilt: -0.2, kind: "torus" },
      { radius: 3.75, height: 0.15, speed: 0.19, offset: 3.4, size: 0.15, tilt: 0.5, kind: "octa" },
      { radius: 2.85, height: -1.1, speed: 0.31, offset: 5.1, size: 0.12, tilt: -0.6, kind: "box" },
    ],
    []
  );

  const refs = useRef<THREE.Group[]>([]);

  useFrame((state) => {
    const t = state.clock.elapsedTime;

    shards.forEach((shard, i) => {
      const group = refs.current[i];
      if (!group) return;

      const angle = t * shard.speed + shard.offset;

      group.position.set(
        Math.cos(angle) * shard.radius,
        shard.height + Math.sin(t * 0.6 + shard.offset) * 0.2,
        Math.sin(angle) * shard.radius
      );

      group.rotation.y = angle * 1.4;
      group.rotation.x = shard.tilt + Math.sin(t * 0.5 + i) * 0.2;
    });
  });

  return (
    <group>
      {shards.map((shard, i) => (
        <group
          key={i}
          ref={(el) => {
            if (el) refs.current[i] = el;
          }}
        >
          {shard.kind === "box" && (
            <RoundedBox
              args={[shard.size, shard.size, shard.size]}
              radius={shard.size * 0.28}
              smoothness={4}
            >
              <meshPhysicalMaterial
                color={i % 2 === 0 ? CREAM : GOLD}
                metalness={0.2}
                roughness={0.2}
                clearcoat={1}
              />
            </RoundedBox>
          )}

          {shard.kind === "octa" && (
            <mesh>
              <octahedronGeometry args={[shard.size, 0]} />
              <meshPhysicalMaterial
                color={GOLD_DEEP}
                metalness={0.3}
                roughness={0.2}
                emissive={GOLD_DEEP}
                emissiveIntensity={0.3}
              />
            </mesh>
          )}

          {shard.kind === "torus" && (
            <mesh rotation={[1.2, 0, 0]}>
              <torusGeometry args={[shard.size, shard.size * 0.32, 12, 48]} />
              <meshPhysicalMaterial
                color={CREAM_DEEP}
                metalness={0.25}
                roughness={0.2}
                clearcoat={1}
              />
            </mesh>
          )}
        </group>
      ))}
    </group>
  );
}

function DustField() {
  const pointsRef = useRef<THREE.Points>(null!);

  const positions = useMemo(() => {
    const count = 260;
    const arr = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      const radius = 3.2 + Math.random() * 3.4;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      arr[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta) * 0.6;
      arr[i * 3 + 2] = radius * Math.cos(phi);
    }

    return arr;
  }, []);

  useFrame((state) => {
    if (!pointsRef.current) return;
    pointsRef.current.rotation.y = state.clock.elapsedTime * 0.04;
    pointsRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.06) * 0.1;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        color={GOLD}
        size={0.028}
        transparent
        opacity={0.55}
        sizeAttenuation
      />
    </points>
  );
}

function CameraDrift() {
  useFrame((state) => {
    const t = state.clock.elapsedTime;
    state.camera.position.x = Math.sin(t * 0.15) * 0.6;
    state.camera.position.y = Math.cos(t * 0.12) * 0.35;
    state.camera.lookAt(0, 0, 0);
  });

  return null;
}

function Scene({ progress }: { progress: number }) {
  const groupRef = useRef<THREE.Group>(null!);

  useFrame((state) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y =
      Math.sin(state.clock.elapsedTime * 0.15) * 0.25;
  });

  return (
    <group ref={groupRef}>
      <Float speed={1.4} rotationIntensity={0.3} floatIntensity={0.8}>
        <CoreShape progress={progress} />
        <ContainmentShell />
      </Float>

      <OrbitRings />
      <OrbitingShards />
      <DustField />

      <DreiSparkles
        count={40}
        scale={5}
        size={2.4}
        speed={0.35}
        color={CREAM}
        opacity={0.6}
      />
    </group>
  );
}

export default function BrandCore({ progress = 60 }: BrandCoreProps) {
  return (
    <div className="mx-auto h-[300px] w-full max-w-[560px] sm:h-[380px]">
      <Canvas camera={{ position: [0, 0, 7.2], fov: 42 }}>
        <ambientLight intensity={1.4} />
        <directionalLight position={[4, 5, 4]} intensity={1.6} color={GOLD} />
        <pointLight position={[-4, -2, 3]} intensity={30} color={GOLD_DEEP} />
        <pointLight position={[3, 3, 5]} intensity={25} color={CREAM} />

        <CameraDrift />
        <Scene progress={progress} />
      </Canvas>
    </div>
  );
}
