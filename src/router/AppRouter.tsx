import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom";

import { MarvelPage, DcPage, SearchPage, HeroPage } from "../heroes";
import { LoginPage } from "../auth/pages/LoginPage";
import { HeroesRoutes } from "../heroes/routes/HeroesRoutes";


const router = createBrowserRouter([
  {path:"/login",
   element:<LoginPage/>,
  },
  {
    path:"/",
    element:<HeroesRoutes/>,
    children:[
        {
            path: "/marvel",
            element: <MarvelPage />,
          },
          {
              path: "/dc",
              element: <DcPage />,
            },
            {
              path: "/search",
              element: <SearchPage/>,
            },            {
              path: "/hero",
              element: <HeroPage />,
            },
            {
              path: "/",
              element: <Navigate to={"/marvel"} />,
            },
    ]
   }

  ]);
  
export const AppRouter = () => {
  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}
