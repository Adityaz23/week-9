import { useEffect, useState } from "react"

function useDebounce(value, timeout) {
  const [debouncedValue, setDebounceValue] = useState(value);
  useEffect(() => {
    let timeoutNumber = setTimeout(() => {
      setDebounceValue(value)
    }, timeout)
    return () => {
      clearTimeout(timeoutNumber);
    }
  }, [value]);
  return debouncedValue;
}

function Usedebounce() {
  const [value, setValue] = useState(0);
  const debouncedValue = useDebounce(value,500)
  return (
    <>
      <h1>Use debouncing.</h1>
      <i>Debounce value is: {debouncedValue}</i>
      <input type="text" onChange={e => setValue(e.target.value)}/>
    </>
  )
}
export default Usedebounce