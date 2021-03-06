import React, { useRef, useState, Suspense } from 'react';
import styles from './index.module.scss';
//Components
import Header from '../components/header/header'
import { Canvas, useFrame } from '@react-three/fiber'

import { softShadows, MeshWobbleMaterial, OrbitControls, useGLTF } from '@react-three/drei';

import { useSpring, a } from '@react-spring/three';

softShadows();

const Model = () => {
  const gltf = useGLTF('chairBlue.gltf', true)

  return <primitive object={gltf.scene} dispose={null} />
}

const SpinningMesh = ({ position, args }) => {
  const mesh = useRef(null);
  // useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01));

  //
  const [expand, setExpand] = useState(false);
  // const props = useSpring({
  //   scale: expand ? [0.1, 0.1, 0.1] : [0.2, 0.2, 0.2],
  // });

  return (
    <a.mesh
      onClick={() => setExpand(!expand)}
      scale={[1, 1, 1]}
      castShadow
      position={position}
      ref={mesh}>
      {/* <boxBufferGeometry attach='geometry' args={args} /> */}
      <Model />
      {/* <MeshWobbleMaterial attach='material' color={color} speed={speed} factor={.6} /> */}
    </a.mesh>
  )
}

function Index() {
  return (
    <>
      <Header />
      <div className={styles.background} />
      <Canvas
        className={styles.root}
        shadows
        camera={{ position: [10, 50, 120], fov: 70 }}>
        <ambientLight intensity={0.3} />
        <directionalLight
          castShadow
          position={[0, 10, 0]}
          intensity={1.5}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-far={50}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
        />
        <pointLight position={[-10, 0, -20]} intensity={0.5} />
        <pointLight position={[0, -10, 0]} intensity={1.5} />

        <Suspense fallback={null} >
          <group>
            <mesh
              receiveShadow
              rotation={[-Math.PI / 2, 0, 0]}
              position={[0, -3, 0]}>
              <planeBufferGeometry attach='geometry' args={[100, 100]} />
              <shadowMaterial attach='material' opacity={.3} color={'white'} />
            </mesh>

            <SpinningMesh position={[0, 1, 0]} args={[3, 2, 1]} color='lightblue' />
          </group>
        </Suspense>
        <OrbitControls />
      </Canvas>
    </>
  )
}

export default Index;