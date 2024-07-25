import { useLoader } from "@react-three/fiber"
import { GLTFLoader } from "three/examples/jsm/Addons.js"
import { useGLTF } from "@react-three/drei"
useGLTF.preload("./model/multimeter_-_free.glb")
export const Scene3D=()=>{
    //const model = useLoader(GLTFLoader,"./model/multimeter_-_free.glb")
    const model =useGLTF("./model/multimeter_-_free.glb")
    console.log(model)

    return(
        <>
        <ambientLight intensity={2}/>
        <primitive
        scale={[0.1, 0.1, 0.1]}
        position-y={4}
        object={model.scene}/>
        </>
        
        
    )
}