import { useContext } from "react"
import { GlobalContext } from "./global"

export function ButtonComponent(){
  const {themeChange} = useContext(GlobalContext);
  return (
    <button onClick={themeChange}>toggle</button>
  )
}