import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/public/Login";
import ProtectedRoute from "../components/ProtectedRoute";
import Home from "../pages/protected/Home";
import { UserProvider } from "../providers/UserProvider";
import PassControl from "../pages/protected/PassControl";
import PetsList from "../pages/protected/PetsList";
import NotFound from "../pages/public/NotFound";
import RegisterPet from "../pages/protected/RegisterPet";
import Register from "../pages/public/Register";
import { ThemeProvider } from "@emotion/react";
import appTheme from "../styles/theme";

const mainRouter = createBrowserRouter([
    {
        path: "*",
        element: <NotFound/>
    },
    {
        path: "/login",
        element: (
            <UserProvider> 
                <Login/> 
            </UserProvider>
        )
    },
    {
        path: "/register",
        element: <Register/>
    },
    {
        path: "/",
        element: (
            <UserProvider> 
                <ThemeProvider theme={appTheme}>
                    <ProtectedRoute/> 
                </ThemeProvider>
            </UserProvider>
        ),
        children: [
            {
                path: "home",
                element: <Home/>
            },
            {
                path: "pass-control",
                element: <PassControl/>
            },
            {
                path: "my-pets",
                element: <PetsList/>
            },
            {
                path: "register-pet",
                element: <RegisterPet/>
            }
        ]
    }
])

export default mainRouter