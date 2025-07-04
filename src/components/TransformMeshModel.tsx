import { useLoader } from "@react-three/fiber";
import { useRef } from "react";
// import { STLLoader } from "three/examples/jsm/Addons.js";
import { STLLoader } from "three/examples/jsm/loaders/STLLoader.js"
import { Mesh } from "three";

type TransformMeshModelProps = {
  url: string;
};

function TransformMeshModel({ url }: TransformMeshModelProps) {
  const geometry = useLoader(STLLoader, url);
  const meshRef = useRef<Mesh>(null);

  return (
    <mesh ref={meshRef} geometry={geometry} scale={[0.01, 0.01, 0.01]}>
      <meshNormalMaterial/>
    </mesh>
  );
}

export default TransformMeshModel;
