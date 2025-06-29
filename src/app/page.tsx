"use client";

import { BoxMesh } from "@/components/BoxMesh";
import StlMesh from "@/components/StlMesh";
import {
  GizmoHelper,
  GizmoViewport,
  OrbitControls,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

export default function Home() {
  return (
    <Canvas>
      <GizmoHelper alignment="bottom-right">
        <GizmoViewport
          axisColors={["red", "green", "blue"]}
          labelColor="black"
        />
      </GizmoHelper>
      {/* <axesHelper args={[10]} /> */}
      <ambientLight intensity={Math.PI / 2} />
      <spotLight
        position={[10, 10, 10]}
        angle={0.15}
        penumbra={1}
        decay={0}
        intensity={Math.PI}
      />
      <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
      <BoxMesh position={[-1.2, 0, 0]} />
      <StlMesh url="https://bsdgncamawsfsmpmxevw.supabase.co/storage/v1/object/public/all//fixed.stl" />
      <OrbitControls />
    </Canvas>
  );
}
