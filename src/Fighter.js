import { useFrame } from "@react-three/fiber"
//import { GLTFLoader } from "three/examples/jsm/Addons.js"
import { useAnimations, useGLTF } from "@react-three/drei"
import { useEffect, useRef } from "react"

export const Fighter=({isChanged})=>{
    const danceRef = useRef();
    //const model = useLoader(GLTFLoader,"./model/multimeter_-_free.glb")
    const model =useGLTF("./model/breakfight.glb")
    const animations = useAnimations(model.animations,model.scene)
    console.log(model)
    
    useEffect(()=>{
       // isChanged?animations.actions.breakdance.play():animations.actions.couppied.play();
       animations.actions[isChanged?'breakdance':'couppied'].reset().fadeIn(0.5).play()
       return ()=>{
        animations.actions[isChanged?'breakdance':'couppied'].fadeOut(0.5)
       }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[isChanged])
    useFrame((state,delta)=>{
        console.log("panam",danceRef.current.position.y)
        danceRef.current.position.y=0;
        danceRef.current.position.x=0;
        danceRef.current.position.z=0;
        //planeRef.current.rotation.y+=delta;
        })
    return(
        <>
        <ambientLight intensity={3} />
        <primitive
        ref={danceRef}
        position-y={0}
        object={model.scene}/>
        </>
        
        
    )
}
useGLTF.preload("./model/breakfight.glb")