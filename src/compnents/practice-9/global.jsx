import { createContext, useState } from "react";

export const GlobalContext = createContext(null);

export function GlobalState({children}){

  const [theme,settheme] = useState(true);

  const themeChange=()=>{
    settheme(!theme);
  }

  return (
  <GlobalContext.Provider value={{theme,themeChange}}>
    {children}
  </GlobalContext.Provider>
  );
}