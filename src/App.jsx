import { useState } from "react";
import MyComponent1 from "./components/Classbased";
import Lifecycle from "./components/Lifecycle";
import Customhooks from "./components/Customhooks";
import Useisonline from "./components/Useisonline";
import Usemouse from "./components/Usemouse";
import Useinterval from "./components/Useinterval";
import Usedebounce from "./components/Usedebounce";
function App() {
  return (
    <>
      <MyComponent />
      <MyComponent1 />
      <Lifecycle />
      <Customhooks />
      <Useisonline />
      <Usemouse />
      <Useinterval />
      <Usedebounce />
      </>
  )
}
function MyComponent() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <p>{count}</p>
      <button onClick={incrementCount}>Increment</button>
    </div>
  );
}
export default App;

// Hooks were introduced to provide 2 things . 1, State  2, Life cycle event in functional components 

