import { useParams } from "react-router-dom"

export function RecipeDetails(){

  const {id} = useParams();

  return (
    <div>
      <h1>Recipe of {id}</h1>
    </div>
  )
}