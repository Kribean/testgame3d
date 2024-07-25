
import './App.css';
//import {Canvas} from "@react-three/fiber"
//import { Scene } from './Scene';
//import { Perf } from 'r3f-perf';
//import { useState } from 'react';
import { PadController } from './PadController';

function App() {
  //const [isChanged,setIschanged]=useState(false);
  return (
    <div className="App">



<div className='h-screen w-full bg-red-800'>
{/**<div className="w-full p-4">
            <button className="btn btn-primary bg-blue-200 rounded w-[200px] h-[50px]" onClick={()=>{setIschanged(!isChanged)}}> change style</button>
        </div>*/}
{/**<Canvas 
gl={{
  antialias:true,
  alpha:true
}}
camera={{
  fov:45,
  near:0.1,
  far:100,
  position:[2,8,6]
}}
onCreated={()=>{console.log("hello")}}
>
  <axesHelper/>
  <Scene isChanged={isChanged}/>
  <Perf/>
</Canvas>*/}
<PadController/>
</div>
    </div>
  );
}

export default App;
