import { useFetch } from "./useFetch"

export function Recipe(){

  const {data,error,loading} = useFetch('https://dummyjson.com/recipes');
  if (loading) return <div>Loading...</div>;

  return (
    <div>
      {data?.recipes?.length > 0 ? (
        data.recipes.map(singleRecipe => (
          <h1 key={singleRecipe.id}>{singleRecipe.name}</h1>
        ))
      ) : (
        'Nothing'
      )}
    </div>
  )
}