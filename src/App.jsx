import Home from './Components/Home'
import About from './Components/About'
import React, { useState } from 'react';
import Products from './Components/Products';
function App() {
  let[x,setx]=useState("");
  return (
    <React.Fragment>

      <About/>
      {/* <Products/> */}
    </React.Fragment>
  )
}

export default App
