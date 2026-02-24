import './home.css';
import { useState,useEffect } from 'react';
function Home()
{

      const[count,setCount]=useState(0);
    const [time,setTime]=useState();
    useEffect(()=>
    {
    console.log("rendering");

    })
    useEffect(()=>
    {   
        // call one time after frist mount of component
        console.log("did mount");
      
    },[])
    useEffect(()=>
    {
        console.log("after count update");
    },[count])
    useEffect(()=>
    {
        return ()=>
        {
            // cleanup function
            console.log("bye")
            clear();
        }
    },[])
    let id;
    // logic  /// init value
  
    let [user,setUser]=useState({name:"ali",age:22}); // init frist time render
    // setTimeout(()=>
    // {
    //     // user="sayed";
    //     // console.log(user);
    //    const obj={}; // new place in memeory
    //    obj.name="sayed";
    //    obj.age=user.age
    //     setUser({age:user.age,name:"sayed"}); // -> override value , call Home();
    // },3000);
    // ui
    function clear()
    {
        clearInterval(id);
    }
    function show()
    {
        setCount((prev)=>prev+1);
        setCount((prev)=>prev+1);
        setCount((prev)=>prev+1);
      id=  setInterval(()=>
        {
            setTime(new Date().toLocaleTimeString())
        },1000)
    }
    return(
        <>
        <h1>{user.name}</h1>
        <h2>{user.age}</h2>
        <h3>{count}</h3>
        <h4>{time}</h4>
        <button className='bg-red-200 p-3.5 rounded-3xl' onClick={show}> inc </button>
        </>
    )
}
export default Home;