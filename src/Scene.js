import { useFrame } from "@react-three/fiber"
import { Suspense, useRef } from "react"
import * as THREE from "three";
import { OrbitControls } from "@react-three/drei";
//import { Custom } from "./Custom";
//import { Scene3D } from "./Scene3D";
//import { Bike } from "./Bike";
import { useLoader } from "@react-three/fiber";
//import { Dancer } from "./Dancer";
import { Fighter } from "./Fighter";

export const Scene = ({isChanged})=>{
  const texture = useLoader(THREE.TextureLoader,"./img/black-shini.png");
  console.log(texture)
    const cubeREf=useRef()
    const planeRef=useRef()
    //const {gl,camera}= useThree();
useFrame((state,delta)=>{
//cubeREf.current.rotation.y+=delta;
//planeRef.current.rotation.y+=delta;
})
    return(
<>
<OrbitControls/>
<axesHelper args={[3]}/>
<gridHelper args={[20,20]}/>
<directionalLight/>
<Suspense fallback={
  <mesh  >
    <boxGeometry/>
    <meshBasicMaterial color={"green"} />
</mesh>
}>
{/*<Scene3D/>*/}
<Fighter isChanged={isChanged}/>
</Suspense>
{/*<Dancer/>*/}
{/*<Bike/>*/}
{/*<Custom/>*/}

<mesh ref={planeRef} position-x={2}  >
    <planeGeometry  args={[2,2]}/>
    <meshBasicMaterial
     //color={"orange"} 
     map={texture}
     side={THREE.DoubleSide} 
     />
  </mesh>
  <mesh position-x={-2} ref={cubeREf} >
    <boxGeometry/>
    <meshBasicMaterial color={"blue"} />
  </mesh>
</>
    )
}