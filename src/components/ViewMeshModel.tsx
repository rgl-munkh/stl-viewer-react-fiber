import { useLoader } from "@react-three/fiber";
import { STLLoader } from "three/examples/jsm/Addons.js";

const ViewMeshModel = ({ url }: { url: string }) => {
  const geometry = useLoader(STLLoader, url);

  return (
    <mesh geometry={geometry} scale={[0.01, 0.01, 0.01]}>
      <meshNormalMaterial/>
    </mesh>
  );
};

export default ViewMeshModel;
