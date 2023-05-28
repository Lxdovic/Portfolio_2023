import { Canvas, useFrame } from "@react-three/fiber";
import { LayerMaterial, Depth, Fresnel } from "lamina";
import { useRef } from "react";

const TorusKnot = (props: any) => {
  return (
    <div {...props}>
      <Canvas camera={{ position: [0, 1, 3.5] }}>
        <TorusKnotMesh />
      </Canvas>
    </div>
  );
};

const TorusKnotMesh = (props: any) => {
  const ref: any = useRef();
  const meshRef: any = useRef();
  const gradient = 0.7;

  // Animate gradient
  useFrame((state) => {
    const sin = Math.sin(state.clock.elapsedTime / 2);
    const cos = Math.cos(state.clock.elapsedTime / 2);

    ref.current.layers[0].origin.set(cos / 2, 0, 0);
    ref.current.layers[1].origin.set(cos, sin, cos);
    ref.current.layers[2].origin.set(sin, cos, sin);
    ref.current.layers[3].origin.set(cos, sin, cos);

    meshRef.current.rotation.x = state.clock.elapsedTime / 2;
    meshRef.current.rotation.y = state.clock.elapsedTime / 2;
    meshRef.current.rotation.z = state.clock.elapsedTime / 2;
  });

  return (
    <mesh {...props} ref={meshRef}>
      <torusKnotGeometry args={[1, 0.4, 200, 32]} />
      <LayerMaterial ref={ref} toneMapped={false}>
        <Depth
          colorA="#000080"
          colorB="black"
          alpha={1}
          mode="normal"
          near={0.5 * gradient}
          far={0.5}
          origin={[0, 0, 0]}
        />
        <Depth
          colorA="blue"
          colorB="#FF00C6"
          alpha={1}
          mode="add"
          near={2 * gradient}
          far={2}
          origin={[0, 1, 1]}
        />
        <Depth
          colorA="green"
          colorB="#FF00C6"
          alpha={1}
          mode="add"
          near={3 * gradient}
          far={3}
          origin={[0, 1, -1]}
        />
        <Depth
          colorA="#9800FF"
          colorB="red"
          alpha={1}
          mode="overlay"
          near={1.5 * gradient}
          far={1.5}
          origin={[1, -1, -1]}
        />
        <Fresnel
          mode="add"
          color="white"
          intensity={0.5}
          power={1.5}
          bias={0.05}
        />
      </LayerMaterial>
    </mesh>
  );
};

export default TorusKnot;
