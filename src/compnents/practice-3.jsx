import { FunctionalComp } from "./functional-components";

// nested component practice
export function Nested(){
  return (
  <div>
    <p>this is a nested button</p>
    <FunctionalComp/>
  </div>
  )
}