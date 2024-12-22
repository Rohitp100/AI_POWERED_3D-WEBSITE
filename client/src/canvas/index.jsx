import { Canvas } from '@react-three/fiber'
import { Environment, Center } from '@react-three/drei';

import PS5 from './PSMODEL';
import CameraRig from './CameraRig';

const CanvasModel = () => {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <Environment preset='city' />

      <CameraRig>
        <Center>
          <PS5 />
        </Center>
      </CameraRig>

    </Canvas>
  )
}

export default CanvasModel