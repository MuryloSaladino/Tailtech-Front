import { ReactNode, createContext, useEffect, useState } from "react";
import { TUser } from "../types/user.types";
import { useNavigate } from "react-router-dom";

interface IUserProvider {
    user: TUser | null;
    logout: () => void;
    loadingUser: boolean;
}

export const UserContext = createContext({} as IUserProvider)

export function UserProvider({ children }: { children?: ReactNode }) {

    const navigate = useNavigate()

    const [user, setUser] = useState<TUser | null>(null)
    const [loadingUser, setLoadingUser] = useState(false)

    const logout = () => {
        setUser(null)
        navigate("/login")
    }

    // teste
    useEffect(() => {
        setLoadingUser(true)
        const id = setTimeout(() => {
            setUser({ email: "user@mail.com", fullname: "Nome Completo", id: "UserID" })
            setLoadingUser(false)
        }, 1000)

        return () => clearTimeout(id)
    }, [])

    return(
        <UserContext.Provider
            children={children}
            value={{ user, logout, loadingUser }}
        />
    )
}