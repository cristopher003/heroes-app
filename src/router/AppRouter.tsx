import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom";

import { MarvelPage, DcPage, SearchPage, HeroPage } from "../heroes";
import { LoginPage } from "../auth/pages/LoginPage";
import { HeroesRoutes } from "../heroes/routes/HeroesRoutes";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";


const router = createBrowserRouter([
  {path:"/login",
   element:<PublicRoute><LoginPage/></PublicRoute>,
  },
  {
    path:"/",
    element:<PrivateRoute> <HeroesRoutes/></PrivateRoute> ,
    children:[
        {
            path: "marvel",
            element: <MarvelPage />,
          },
          {
              path: "dc",
              element: <DcPage />,
            },
            {
              path: "search",
              element: <SearchPage/>,
            },            {
              path: "hero/:heroeId",
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
