import { Canvas } from "@react-three/fiber";
import { Joystick } from "./Joystick";
import { Scene } from "./Scene";

export const PadController = () => {
  return (
    <div className="flex flex-row w-full items-center justify-center h-screen">
      <div className="flex flex-col items-center justify-center w-1/4 h-full">
        <Joystick />
      </div>
      <div className="bg-red-200 w-2/4 h-full">
        <Canvas
          gl={{
            antialias: true,
            alpha: true,
          }}
          camera={{
            fov: 45,
            near: 0.1,
            far: 100,
            position: [2, 8, 6],
          }}
          onCreated={() => {
            console.log("hello");
          }}
        >
          <axesHelper />
          <Scene />
        </Canvas>
      </div>
      <div className="flex flex-col justify-center w-1/4 bg-orange-200 h-full gap-y-4">
        <div className="flex flex-row justify-center items-center ">
          <button className="btn btn-neutral">X</button>
        </div>
        <div className="flex flex-row justify-center gap-x-16">
          <button className="btn btn-neutral">Y</button>
          <button className="btn btn-neutral">A</button>
        </div>
        <div className="flex flex-row justify-center ">
          <button className="btn btn-neutral">X</button>
        </div>
      </div>
    </div>
  );
};
