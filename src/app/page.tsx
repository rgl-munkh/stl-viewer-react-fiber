"use client";

import StlMesh from "@/components/ViewMeshModel";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

const ViewModel = ({ url }: { url: string }) => {
  return (
    <Canvas>
      <axesHelper args={[100]} />
      <gridHelper args={[100, 100]} />
      <ambientLight intensity={Math.PI / 2} />
      <spotLight
        position={[10, 10, 10]}
        angle={0.15}
        penumbra={1}
        decay={0}
        intensity={Math.PI}
      />
      <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />

      <StlMesh url={url} />
      <OrbitControls />
    </Canvas>
  );
};

export default function Home() {
  return (
    <div className="h-screen">
      <ViewModel url="https://bsdgncamawsfsmpmxevw.supabase.co/storage/v1/object/public/all//fixed.stl" />
    </div>
  );
}
