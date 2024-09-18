import { useContext } from "react"
import { UserContext } from "../../providers/UserProvider"
import { Outlet } from "react-router-dom"
import Login from "../../pages/Login"

export default function ProtectedRoute() {

    const { user } = useContext(UserContext)

    return user ? <Outlet/> : <Login/>
}