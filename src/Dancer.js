import React, { useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
import { AnimationMixer } from "three";
import { OrbitControls } from "@react-three/drei";

export const Dancer = () => {
  const model = useLoader(FBXLoader, "./model/Brooklyn.fbx");
  const mixer = useRef(null);

  useEffect(() => {
    if (model.animations.length) {
      mixer.current = new AnimationMixer(model);
      const action = mixer.current.clipAction(model.animations[0]);
      action.play();
    }
    return () => mixer.current?.stopAllAction(); // Clean up the mixer on unmount
  }, [model]);

  useFrame((state, delta) => {
    mixer.current?.update(delta);
  });

  return (
    <>
      <ambientLight intensity={2} />
      <primitive scale={[0.1, 0.1, 0.1]} position-y={4} object={model} />
    </>
  );
};