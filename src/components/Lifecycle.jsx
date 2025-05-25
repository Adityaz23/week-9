import { useEffect, useState } from "react"
import React from "react"

function Lifecycle() {
const [render,setRender] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setRender(false)
    },5000)
    // setInterval(() => {
    // setRender(r => !r)
    // },3000)
  },[])
  return (
    <>
    <i>{render ? <MyComponent2 /> : <b>Did not mounted!!</b>}</i>
    </>
  )
}
class MyComponent2 extends React.Component {
  componentMounted() {
    console.log("Component mounted");
  }
  componentUnmounted() {
    console.log("Unmounted");
  }
  render() {
    return <div>Hi there</div>
  }
}
// function MyComponent2() {
//   useEffect(() => {
//     console.error("Component Mounted!");
//     return () => {
//       console.log("Component unmounted!")
//     };
//   }, [])
//   // Rendering the useEffect hook.
//   return (
//     <>
//     <p>From inside the components.</p>
//     </>
//   )
// }
export default Lifecycle

//! Q. What is life cycle event ?
//! Ans. Event that you can trigerred or event that you can run whenever a life cycle of component changes, whenever a component mounts the changes.
//! Always return the function from the use effect

  // setInterval(() => {
    // setRender(r => !r)
    // },3000)
// },[])
  
// it will make the state go mount and unmount after every 3 second. 


// setTimeout(() => {
    //   setRender(false)
// },5000)
    
// this will make the state to change from mount to the unmount after 5 second.


// this is how the lifecycle component were hook beofre the useEffect .

// class MyComponent2 extends React.Component{
//   componentMounted() {
//     console.log("Component mounted");
    

//     componentUnmounted(){
//       console.log("Unmounted");
      
//     }
//      return(
//     <h2>hi there</h2>
//   )
//   }
// }