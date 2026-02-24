import { useState } from 'react';
import style from './about.module.css';
function About() {
  const [str,setStr]=useState(true);
  function toggle()
  {
    if(str) 
    {
      return <h1>hi</h1>
    }
      else
      {
        return null;
      }
  }
  return (
    <>
    {
     str&&<h1>hi</h1>
    }
    <h2 className={str?style.red:style.blue}> change color</h2>
    <button onClick={()=>setStr(!str)}>toggle</button>
    </>
    
  )
}

export default About