import { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";

const Stars = ({ isMobile }) => {
  const ref = useRef();
  const pointsCount = isMobile ? 2000 : 5000; // Reduce points on mobile
  const [sphere] = useState(() => random.inSphere(new Float32Array(pointsCount), { radius: 1.2 }));

  useFrame((state, delta) => {
    // Optional: Reduce rotation speed for performance
    ref.current.rotation.x -= delta / (isMobile ? 20 : 10);
    ref.current.rotation.y -= delta / (isMobile ? 30 : 15);
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled>
        <PointMaterial
          transparent
          color='#f272c8'
          size={isMobile ? 0.0015 : 0.002} // Smaller size on mobile
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = ({ isMobile }) => {
  return (
    <div className='w-full h-auto absolute inset-0 z-[-1]'>
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <Stars isMobile={isMobile} />
        </Suspense>

        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
