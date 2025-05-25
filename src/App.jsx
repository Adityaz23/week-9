import { useState } from "react";
import MyComponent1 from "./components/Classbased";
import Lifecycle from "./components/Lifecycle";
import Customhooks from "./components/Customhooks";
function App() {
  return (
    <>
      <MyComponent />
      <MyComponent1 />
      <Lifecycle />
      <Customhooks />
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

