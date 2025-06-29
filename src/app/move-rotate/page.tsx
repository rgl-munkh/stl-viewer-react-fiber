"use client";

import TransformMeshModel from "@/components/TransformMeshModel";
import {
  GizmoHelper,
  GizmoViewport,
  OrbitControls,
  TransformControls,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useState } from "react";

const ViewModel = ({
  url,
  transformControlsMode,
}: {
  url: string;
  transformControlsMode: "translate" | "rotate" | "scale";
}) => {
  const [isDragging, setIsDragging] = useState(false);
  return (
    <Canvas>
      <GizmoHelper alignment="bottom-right">
        <GizmoViewport
          axisColors={["red", "green", "blue"]}
          labelColor="black"
        />
      </GizmoHelper>
      <axesHelper args={[10]} />
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
      <TransformControls
        mode={transformControlsMode}
        onMouseDown={() => setIsDragging(true)}
        onMouseUp={() => setIsDragging(false)}
      >
        <TransformMeshModel url={url} />
      </TransformControls>
      <OrbitControls enabled={!isDragging} />
    </Canvas>
  );
};

export default function MoveRotatePage() {
  const [transformControlsMode, setTransformControlsMode] = useState<
    "translate" | "rotate" | "scale"
  >("translate");

  return (
    <div className="h-screen">
      <div className="space-x-2">
        <button
          className="px-3 py-2 border"
          onClick={() => setTransformControlsMode("translate")}
        >
          Translate
        </button>
        <button
          className="px-3 py-2 border"
          onClick={() => setTransformControlsMode("rotate")}
        >
          Rotate
        </button>
      </div>
      <ViewModel
        transformControlsMode={transformControlsMode}
        url="https://bsdgncamawsfsmpmxevw.supabase.co/storage/v1/object/public/all//fixed.stl"
      />
    </div>
  );
}
