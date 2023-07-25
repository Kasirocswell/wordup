import React, { useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const modelPath = "/mic.glb";

const ThreeScene = () => {
  const [model, setModel] = useState(null);
  const gltfRef = useRef();

  useEffect(() => {
    const loader = new GLTFLoader();

    loader.load(
      modelPath,
      (gltf) => {
        gltf.scene.traverse((child) => {
          if (child.isMesh) {
            child.material.transparent = true;
          }
        });
        gltf.scene.scale.set(8, 8, 8);
        gltf.scene.rotation.x = Math.PI / 6;
        setModel(gltf.scene);
        gltf.scene.position.z = 1;
        gltf.scene.position.y = -2;
        gltf.scene.position.y = 0.001;
      },
      undefined,
      (error) => console.error(error)
    );
  }, []);

  useFrame(() => {
    if (gltfRef.current) {
      gltfRef.current.rotation.y += 0.004;
    }
  });

  return model ? (
    <>
      <ambientLight />
      <pointLight position={[5, 16, 5]} />
      <primitive ref={gltfRef} object={model} />
    </>
  ) : null;
};
const Scene = () => {
  return (
    <div
      className="pl-[600px] w-screen bg-transparent flex justify-center items-center z-10"
      style={{ height: "100vh" }}
    >
      <Canvas>
        <ThreeScene />
      </Canvas>
    </div>
  );
};

export default Scene;
