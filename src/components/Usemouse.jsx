import { useEffect, useState } from "react";

const usePointer = () => {
  const [mousePointer, setMousePointer] = useState({ x: 0, y: 0 });

  const handleMouse = (e) => {
    setMousePointer({ x: e.clientX, y: e.clientY });
  };
  useEffect(() => {
    window.addEventListener('mousemove', handleMouse);
    return () => {
      window.removeEventListener('mousemove', handleMouse);
    }
  }, []);
  return mousePointer
}

function Usemouse() {
  const mouseCursor = usePointer();
  return (
    <>
      <i>Your mouse position is: {mouseCursor.x} {mouseCursor.y}</i>
    </>
  )
}

export default Usemouse