import { useEffect, useState } from "react";

function UseInterval(fn,timeout) {
  useEffect(() => {
    setInterval(() => {
      fn()
    },timeout)
  },[])
}
function Useinterval() {
  const [count, setCount] = useState(0);
  UseInterval(() => {
    setCount(prev => prev + 1);
  }, 4000);
  return (

    <>
      <h1>Use interval hook.</h1>
      <b>Timer is at {count}</b>
    </>
  )
}
export default Useinterval;