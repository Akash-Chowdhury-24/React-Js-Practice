import { Component1 } from "./component";
import { Layout } from "./layout";
import { NotFoundPage } from "./notFoundPage";
import { Recipe } from "./recipe";
import { RecipeDetails } from "./recipe-details";
import { useRoutes } from 'react-router-dom';

export function CustomRoutes(){
  const element = useRoutes([
    {
      path: '/home',
      element: <Layout/>,
      children:[
        {
          path: 'recipe',
          element: <Recipe/>,
        },
        {
          path: 'component',
          element: <Component1/>,
        },
        {
          path: 'recipe/:id',
          element: <RecipeDetails/>,
        }
      ],
    },
    {
      path: '*',
      element: <NotFoundPage/>,
    }
  ]);

  return element;
}