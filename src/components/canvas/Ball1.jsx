import React, { Suspense, useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";

import CanvasLoader from "../Loader";

import * as THREE from 'three';

const Ball1 = ({ icon, position, rotation }) => {
  const decal = useMemo(() => new THREE.TextureLoader().load(icon), [icon]);

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.03} />
      <directionalLight position={[10, 5, -5]} />
      <mesh castShadow receiveShadow scale={1} position={position}>
        <icosahedronGeometry args={[1, 10]} />
        <meshStandardMaterial
          color='#800000'
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1.2}
          map={decal}
          flatShading
        />
      </mesh>
    </Float>
  );
};

const BallCanvas1 = ({ icons }) => {
  return (
    <Canvas frameloop='always'
    shadows
    dpr={[1, 1]}
    camera={{ position: [0, 0, 5], fov: 75 }}
    gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <group>
          {icons.map((icon, index) => {
            const row = Math.floor(index / 3);
            const col = index % 3;
            return (
              <Ball1 key={icon} icon={icon} position={[col * 3 - 4, row * 3 + -2, -9]} />
            );
          })}
        </group>
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default BallCanvas1;