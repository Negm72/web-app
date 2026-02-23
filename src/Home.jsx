import './home.css';
import { useState } from 'react';
function Home()
{
    console.log("call");
    // logic  /// init value
    const[count,setCount]=useState(0);
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
    function show()
    {
        setCount(count+1);
    }
    return(
        <>
        <h1>{user.name}</h1>
        <h2>{user.age}</h2>
        <h3>{count}</h3>
        <button onClick={show}> inc </button>
        </>
    )
}
export default Home;