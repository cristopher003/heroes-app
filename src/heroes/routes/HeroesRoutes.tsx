import { Outlet } from "react-router-dom"
import { Navbar } from "../components"


export const HeroesRoutes = () => {
  return (
    <>
    <Navbar></Navbar>
    <Outlet/>
    </>
  )
}
