'use client';

import Box from '@/components/BoxMesh';
import StlMesh from '@/components/ViewMeshModel';
import { GizmoHelper, GizmoViewport, OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

export default function CutPage() {
  return (
    <div className='h-screen'>
      <div className='absolute top-20 left-4 z-10 bg-white p-4 rounded-lg shadow-lg'>
        <h2 className='text-lg font-semibold mb-2'>Cut 3D Model</h2>
        <p className='text-sm text-gray-600 mb-4'>
          Cutting functionality coming soon...
        </p>
        <div className='space-y-2'>
          <button className='w-full px-3 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors'>
            Add Cut Plane
          </button>
          <button className='w-full px-3 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors'>
            Apply Cut
          </button>
        </div>
      </div>

      <Canvas>
        <GizmoHelper alignment='bottom-right'>
          <GizmoViewport
            axisColors={['red', 'green', 'blue']}
            labelColor='black'
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

        <Box position={[0, 2, 0]} />
        <StlMesh url='https://bsdgncamawsfsmpmxevw.supabase.co/storage/v1/object/public/all//fixed.stl' />
        <OrbitControls />
      </Canvas>
    </div>
  );
}
