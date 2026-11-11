"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Sparkles as DreiSparkles } from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";

/**
 * NeuralNetworkLoader
 * A live, animating feed-forward neural network rendered in 3D — nodes
 * lighting up layer by layer, synapses firing signal pulses between them.
 * Palette matches the site's warm gold / cream "AI Product Studio"
 * language so it reads as this brand's AI, not a generic tech loader.
 */

const LAYER_SIZES = [4, 6, 6, 5, 3];
const LAYER_SPACING = 2.1;

const GOLD = "#4ADE80";
const GOLD_DEEP = "#22D3EE";
const CREAM = "#132036";
const SIGNAL = "#132036";

type NodePos = {
  position: THREE.Vector3;
};

function buildLayers(): NodePos[][] {
  return LAYER_SIZES.map((count, layerIndex) => {
    const x = (layerIndex - (LAYER_SIZES.length - 1) / 2) * LAYER_SPACING;

    return Array.from({ length: count }, (_, i) => {
      const y = (i - (count - 1) / 2) * 0.58;
      const z = Math.sin(i * 1.7 + layerIndex) * 0.3;

      return {
        position: new THREE.Vector3(x, y, z),
      };
    });
  });
}

function Connections({ layers }: { layers: NodePos[][] }) {
  const pairs = useMemo(() => {
    const result: { a: THREE.Vector3; b: THREE.Vector3 }[] = [];

    for (let l = 0; l < layers.length - 1; l++) {
      for (const nodeA of layers[l]) {
        for (const nodeB of layers[l + 1]) {
          result.push({ a: nodeA.position, b: nodeB.position });
        }
      }
    }

    return result;
  }, [layers]);

  const geometry = useMemo(() => {
    const points: number[] = [];

    pairs.forEach(({ a, b }) => {
      points.push(a.x, a.y, a.z, b.x, b.y, b.z);
    });

    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.Float32BufferAttribute(points, 3));

    return geo;
  }, [pairs]);

  return (
    <lineSegments geometry={geometry}>
      <lineBasicMaterial color={GOLD} transparent opacity={0.16} />
    </lineSegments>
  );
}

function Nodes({ layers }: { layers: NodePos[][] }) {
  const meshRefs = useRef<THREE.Mesh[]>([]);

  useFrame((state) => {
    meshRefs.current.forEach((mesh, i) => {
      if (!mesh) return;
      const pulse = 0.85 + Math.sin(state.clock.elapsedTime * 2.2 + i) * 0.2;
      mesh.scale.setScalar(pulse);
    });
  });

  let idx = 0;

  return (
    <group>
      {layers.map((layer) =>
        layer.map((node) => {
          const currentIdx = idx++;

          return (
            <mesh
              key={currentIdx}
              position={node.position}
              ref={(el) => {
                if (el) meshRefs.current[currentIdx] = el;
              }}
            >
              <sphereGeometry args={[0.085, 16, 16]} />
              <meshStandardMaterial
                color={GOLD}
                emissive={GOLD_DEEP}
                emissiveIntensity={1.3}
                toneMapped={false}
              />
            </mesh>
          );
        })
      )}
    </group>
  );
}

function Signals({ layers }: { layers: NodePos[][] }) {
  const segments = useMemo(() => {
    const result: {
      a: THREE.Vector3;
      b: THREE.Vector3;
      speed: number;
      offset: number;
    }[] = [];

    for (let l = 0; l < layers.length - 1; l++) {
      for (const nodeA of layers[l]) {
        for (const nodeB of layers[l + 1]) {
          if (Math.random() > 0.5) continue;

          result.push({
            a: nodeA.position,
            b: nodeB.position,
            speed: 0.55 + Math.random() * 0.7,
            offset: Math.random(),
          });
        }
      }
    }

    return result;
  }, [layers]);

  const refs = useRef<THREE.Mesh[]>([]);

  useFrame((state) => {
    segments.forEach((seg, i) => {
      const mesh = refs.current[i];
      if (!mesh) return;

      const t = (state.clock.elapsedTime * seg.speed + seg.offset) % 1;

      mesh.position.lerpVectors(seg.a, seg.b, t);

      const fade = Math.sin(t * Math.PI);
      const mat = mesh.material as THREE.MeshStandardMaterial;
      mat.emissiveIntensity = 1.4 * fade + 0.15;
    });
  });

  return (
    <group>
      {segments.map((seg, i) => (
        <mesh
          key={i}
          ref={(el) => {
            if (el) refs.current[i] = el;
          }}
        >
          <sphereGeometry args={[0.04, 8, 8]} />
          <meshStandardMaterial
            color={SIGNAL}
            emissive={SIGNAL}
            emissiveIntensity={1}
            toneMapped={false}
          />
        </mesh>
      ))}
    </group>
  );
}

function NetworkGroup() {
  const groupRef = useRef<THREE.Group>(null!);
  const layers = useMemo(() => buildLayers(), []);

  useFrame((state) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y =
      Math.sin(state.clock.elapsedTime * 0.22) * 0.4 +
      state.clock.elapsedTime * 0.04;
    groupRef.current.rotation.x =
      Math.sin(state.clock.elapsedTime * 0.16) * 0.1;
  });

  return (
    <group ref={groupRef}>
      <Connections layers={layers} />
      <Nodes layers={layers} />
      <Signals layers={layers} />
    </group>
  );
}

function CameraDrift() {
  useFrame((state) => {
    const t = state.clock.elapsedTime;
    state.camera.position.y = Math.sin(t * 0.12) * 0.3;
    state.camera.lookAt(0, 0, 0);
  });

  return null;
}

export default function NeuralNetworkLoader() {
  return (
    <div className="mx-auto h-[280px] w-full max-w-[640px] sm:h-[360px]">
      <Canvas camera={{ position: [0, 0, 7.2], fov: 40 }}>
        <ambientLight intensity={0.7} />
        <pointLight position={[4, 4, 6]} intensity={45} color={GOLD} />
        <pointLight position={[-4, -3, 4]} intensity={28} color={CREAM} />

        <CameraDrift />
        <NetworkGroup />

        <DreiSparkles
          count={30}
          scale={7}
          size={2}
          speed={0.3}
          color={CREAM}
          opacity={0.45}
        />
      </Canvas>
    </div>
  );
}
