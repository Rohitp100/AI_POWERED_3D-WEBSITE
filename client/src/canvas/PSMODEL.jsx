import * as THREE from 'three';
import { useSnapshot } from 'valtio';
import { useGLTF} from '@react-three/drei';
import state from '../store';

const PSMODEL = () => {
  const snap = useSnapshot(state);
  const { nodes, materials } = useGLTF('/PS.glb');

  const textureLoader = new THREE.TextureLoader();

  const platePattern = snap.plate ? textureLoader.load(snap.plate) : '';
  const midPattern = snap.mid ? textureLoader.load(snap.mid) : '';
  const standPattern = snap.stand ? textureLoader.load(snap.stand) : '';

  return (
    <group>

      {Object.values(nodes).map((mesh, index) => {
        return (
          mesh && (
            <mesh
              key={index}
              castShadow
              geometry={mesh.geometry}
              material={materials.lambert1}
              dispose={null}
            >
              {mesh.name === 'mesh_9' && platePattern != '' && (
                <meshStandardMaterial map={platePattern} color={snap.color} />
              )}
              {mesh.name === 'mesh_10' && platePattern != '' && (
                <meshStandardMaterial map={platePattern} color={snap.color} />
              )}
              {mesh.name === 'mesh_0' && platePattern != '' && (
                <meshStandardMaterial map={platePattern} color={snap.color} />
              )}
              {mesh.name === 'mesh_1' && platePattern != '' && (
                <meshStandardMaterial map={platePattern} color={snap.color} />
              )}
              {mesh.name === 'mesh_2' && standPattern != '' && (
                <meshStandardMaterial map={standPattern} color={snap.color2} />
              )}
              {mesh.name === 'mesh_3' && standPattern != '' && (
                <meshStandardMaterial map={standPattern} color={snap.color2} />
              )}
                {mesh.name === 'mesh_5' && midPattern != '' && (
                <meshStandardMaterial map={midPattern} color={snap.color1} />
              )}
              {mesh.name === 'mesh_17' && midPattern != '' && (
                <meshStandardMaterial map={midPattern} color={snap.color1} />
              )}
              {mesh.name === 'mesh_18' && midPattern != '' && (
                <meshStandardMaterial map={midPattern} color={snap.color1} />
              )}
              {mesh.name === 'mesh_4' && midPattern != '' && (
                <meshStandardMaterial map={midPattern} color={snap.color1} />
              )}
              {mesh.name === 'mesh_21' && platePattern != '' && (
                <meshStandardMaterial map={platePattern} color={snap.color} />
              )}
              {mesh.name === 'mesh_22' && platePattern != '' && (
                <meshStandardMaterial map={platePattern} color={snap.color} />
              )}
              {mesh.name === 'mesh_19' && standPattern != '' && (
                <meshStandardMaterial map={standPattern} color={snap.color2} />
              )}
              {mesh.name === 'mesh_20' && standPattern != '' && (
                <meshStandardMaterial map={standPattern} color={snap.color2} />
              )}
              {mesh.name === 'mesh_4' && standPattern != '' && (
                <meshStandardMaterial map={standPattern} color={snap.color2} />
              )}
              {mesh.name === 'mesh_6' && midPattern != '' && (
                <meshStandardMaterial map={midPattern} color={snap.color1} />
              )}
              {mesh.name === 'mesh_7' && midPattern != '' && (
                <meshStandardMaterial map={midPattern} color={snap.color1} />
              )}
              {mesh.name === 'mesh_8' && midPattern != '' && (
                <meshStandardMaterial map={midPattern} color={snap.color1} />
              )}
              {mesh.name === 'mesh_13' && (
                <meshStandardMaterial color={'#525CEB'} />
              )}
              {mesh.name === 'mesh_15' && platePattern != '' && (
                <meshStandardMaterial map={platePattern} color={snap.color} />
              )}

              








              {mesh.name === 'mesh_9' && platePattern == '' && (
                <meshStandardMaterial color={snap.color} />
              )}
              {mesh.name === 'mesh_10' && platePattern == '' && (
                <meshStandardMaterial color={snap.color} />
              )}
              {mesh.name === 'mesh_0' && platePattern == '' && (
                <meshStandardMaterial color={snap.color} />
              )}
              {mesh.name === 'mesh_1' && platePattern == '' && (
                <meshStandardMaterial color={snap.color} />
              )}
              {mesh.name === 'mesh_2' && standPattern == '' && (
                <meshStandardMaterial color={snap.color2} />
              )}
              {mesh.name === 'mesh_3' && standPattern == '' && (
                <meshStandardMaterial color={snap.color2} />
              )}
                {mesh.name === 'mesh_5' && midPattern == '' && (
                <meshStandardMaterial color={snap.color1} />
              )}
              {mesh.name === 'mesh_17' && midPattern == '' && (
                <meshStandardMaterial color={snap.color1} />
              )}
              {mesh.name === 'mesh_18' && midPattern == '' && (
                <meshStandardMaterial color={snap.color1} />
              )}
              {mesh.name === 'mesh_4' && midPattern == '' && (
                <meshStandardMaterial color={snap.color1} />
              )}
              {mesh.name === 'mesh_21' && platePattern == '' && (
                <meshStandardMaterial color={snap.color} />
              )}
              {mesh.name === 'mesh_22' && platePattern == '' && (
                <meshStandardMaterial color={snap.color} />
              )}
              {mesh.name === 'mesh_19' && standPattern == '' && (
                <meshStandardMaterial color={snap.color2} />
              )}
              {mesh.name === 'mesh_20' && standPattern == '' && (
                <meshStandardMaterial color={snap.color2} />
              )}
              {mesh.name === 'mesh_4' && standPattern == '' && (
                <meshStandardMaterial color={snap.color2} />
              )}
              {mesh.name === 'mesh_6' && midPattern == '' && (
                <meshStandardMaterial color={snap.color1} />
              )}
              {mesh.name === 'mesh_7' && midPattern == '' && (
                <meshStandardMaterial color={snap.color1} />
              )}
              {mesh.name === 'mesh_8' && midPattern == '' && (
                <meshStandardMaterial color={snap.color1} />
              )}
              {mesh.name === 'mesh_13' && (
                <meshStandardMaterial color={'#525CEB'} />
              )}
              {mesh.name === 'mesh_15' && platePattern == '' && (
                <meshStandardMaterial color={snap.color} />
              )}
              
            </mesh>
          )
        );
      })}
    </group>
  );
};

export default PSMODEL;