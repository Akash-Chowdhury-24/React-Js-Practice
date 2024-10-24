import { useContext } from "react";
import { GlobalContext } from "./global";

export function TextComponent(){
  const {theme} = useContext(GlobalContext);
  return(
    <p style={{
      fontSize:theme?"30px":"60px",
      color:theme?"red":"black",
    }}>
      Akash Chowdhury
    </p>
  );
}