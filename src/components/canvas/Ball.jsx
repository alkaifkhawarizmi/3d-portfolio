import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";

import CanvasLoader from "../Loader";

const Ball = ({ imgUrl, isMobile }) => {
  const [decal] = useTexture([imgUrl]);

  return (
    <Float speed={1} rotationIntensity={0.5} floatIntensity={1}>
      <ambientLight intensity={isMobile ? 0.1 : 0.25} />
      <directionalLight position={[0, 0, 0.05]} intensity={0.5} />
      <mesh castShadow receiveShadow scale={isMobile ? 1.5 : 2.75}>
        {/* Reduce subdivision level for less complexity */}
        <icosahedronGeometry args={[1, 0]} />
        <meshStandardMaterial
          color="#fff8eb"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[Math.PI * 2, 0, 6.25]}
          scale={1}
          map={decal}
          flatShading
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon, isMobile }) => {
  return (
    <Canvas
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
