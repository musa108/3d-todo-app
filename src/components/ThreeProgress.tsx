"use client";
import React, { useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useTasks } from "@/context/TaskContext";
import * as THREE from "three";

function ProgressMesh({ ratio }: { ratio: number }) {
  const meshRef = React.useRef<THREE.Mesh | null>(null);
  useFrame((_, delta) => {
    if (meshRef.current) meshRef.current.rotation.y += delta * 0.3;
  });

  return (
    <group>
      <mesh position={[0, 0, 0]} rotation={[0, 0, 0]} >
        <boxGeometry args={[2.6, 0.18, 0.18]} />
        <meshStandardMaterial color={"#2d3748"} />
      </mesh>

      <mesh ref={meshRef} position={[-1.3 + (2.6 * ratio) / 2, 0, 0.001]}>
        <boxGeometry args={[2.6 * ratio, 0.18, 0.18]} />
        <meshStandardMaterial color={ratio > 0.99 ? "#22c55e" : "#fb923c"} />
      </mesh>
    </group>
  );
}

export default function ThreeProgress() {
  const { state } = useTasks();
  const total = state.tasks.length;
  const done = state.tasks.filter(t => t.status === "done").length;
  const ratio = total ? Math.min(1, done / total) : 0;

  const clearRatio = useMemo(() => ratio, [ratio]);

  return (
    <div className="w-full h-40">
      <Canvas orthographic camera={{ zoom: 80, position: [0, 0, 5] }}>
        <ambientLight intensity={0.8} />
        <directionalLight position={[5, 5, 5]} intensity={0.6} />
        <ProgressMesh ratio={clearRatio} />
      </Canvas>
      <div className="mt-3 text-sm theme-muted">{done} of {total} tasks done</div>
    </div>
  );
}
