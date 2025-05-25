import { useEffect, useState } from "react"


function Useisonline() {
  const isOnline = useIsOnline();
  if (isOnline) {
    return "You are online."
  }
  else {
    return "You are offline."
  }
  
}

function useIsOnline() {
  const [isOnline, setIsOnline] = useState(window.navigator.onLine)
  
  useEffect(() => {
    window.addEventListener("online", () => {
      setIsOnline(true)
    })
    window.addEventListener("offline", () => {
      setIsOnline(false)
    })
  }, [])
  return isOnline
}
export default Useisonline