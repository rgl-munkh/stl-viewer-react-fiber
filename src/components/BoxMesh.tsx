import { useFrame } from "@react-three/fiber"
import { useRef, useState } from "react"

function Box(props) {
  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <mesh
      {...props}
      >
      <boxGeometry args={[3, 0, 3]} />
      <meshStandardMaterial color={'orange'} opacity={0.5} transparent/>
    </mesh>
  )
}
export default Box