import { Box } from "@mui/material";
import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import ProtectedRoute from "../components/ProtectedRoute";
import Home from "../pages/Home";
import { UserProvider } from "../providers/UserProvider";

const mainRouter = createBrowserRouter([
    {
        path: "*",
        element: <Box>Not found</Box>
    },
    {
        path: "/login",
        element: <UserProvider><Login/></UserProvider>
    },
    {
        path: "/",
        element: <UserProvider><ProtectedRoute/></UserProvider>,
        children: [
            {
                path: "home",
                element: <Home/>
            }
        ]
    }
])

export default mainRouter