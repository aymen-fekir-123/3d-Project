import {useState, Suspense, useEffect} from 'react';
import { Canvas } from '@react-three/fiber';

import { OrbitControls, Preload, useGLTF  } from '@react-three/drei';

import CanvasLoader from '../Loader';




const Computers = () => {

  const computer = useGLTF('/desktop_pc/scene.gltf') 

  const [isMobile, setMobile] = useState(false)

  useEffect(()=> {

    const mediaquery = window.matchMedia("(max-width:500px)");

    setMobile(mediaquery.matches);

    const handellchangemedia = (event)=>{
      setMobile(event.matches);

    }

    mediaquery.addEventListener("change", handellchangemedia);

    return () => {
      mediaquery.removeEventListener('change', handellchangemedia);
    }

  },[])

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black"/>
      
      <pointLight intensity={1}/>

      <primitive object={computer.scene} scale={isMobile ? 0.65 : 0.75} position={isMobile ? [0, -3, -2.2]:[0, -3.75, -1.5]} rotation={[-0.01, -0.2, -0.1]}/>

      
    </mesh>
  )
}

const ComputersCanvas = ()=> {
  return (
    <Canvas 
    frameloop='demand'
    shadows
    camera={{position:[20, 3, 5], fov:25}}
    gl={{preserveDrawingBuffer:true}}
    >

      <Suspense fallback={<CanvasLoader />}>

        <OrbitControls
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
        />
        <Computers/>  
        
      </Suspense> 
      <Preload all />

    </Canvas>
  )
}


export default ComputersCanvas