import { ReactNode, createContext, useState } from "react";
import { TUser } from "../types/user.types";
import { useNavigate } from "react-router-dom";

interface IUserProvider {
    user: TUser | null;
    logout: () => void;
}

export const UserContext = createContext({} as IUserProvider)

export function UserProvider({ children }: { children: ReactNode }) {

    const navigate = useNavigate()

    const [user, setUser] = useState<TUser | null>(null)

    const logout = () => {
        setUser(null)
        navigate("/login")
    }

    return(
        <UserContext.Provider
            children={children}
            value={{ user, logout }}
        />
    )
}