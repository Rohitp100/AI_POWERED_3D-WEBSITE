import { useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

const CameraRig = ({ children }) => {
  const group = useRef();
  const { camera, gl } = useThree();
  const controls = useRef();

  useFrame(() => {
    if (group.current) {
      group.current.rotation.set(0, Math.PI, 0); 
    }

    if (controls.current) {
      controls.current.update();
    }
  });

  return (
    <>
      <group ref={group}>{children}</group>
      <OrbitControls
        ref={controls}
        args={[camera, gl.domElement]}
        enableRotate
        enableZoom 
        zoomSpeed={1} 
      />
    </>
  );
};

export default CameraRig;

