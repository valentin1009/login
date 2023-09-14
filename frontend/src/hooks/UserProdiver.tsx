import qs from "qs";
import {createContext, ReactNode, useContext, useEffect, useMemo, useState} from "react";
import {request} from "../utils/request";
import {usePersistentState} from "./usePersistentState";
import {toast} from "react-toastify";

type UserType = {
    name: string;
    email: string;
    lat: number | null;
    long: number | null;
}

type UserProviderInterface = {
    user: UserType | null;
    setUser: (value: UserType | null) => void;
    isLogin: boolean;
    loginLoading: boolean;
    login: (email: string, password: string) => void;
    logout: () => void;
};

type Props = {
    children: ReactNode;
};

const defaultState = {
    user: null,
    setUser: () => {},
    isLogin: false,
    loginLoading: false,
    login: () => {},
    logout: () => {},
};

export const UserContext = createContext<UserProviderInterface>(defaultState);

export const useUser = () => useContext(UserContext);

export const UserProvider: React.FC<Props> = ({ children }) => {

    const [user, setUser] = usePersistentState<UserType | null>('userData', null);
    const [loginLoading, setLoginLoading] = useState<boolean>(false);
    const [loginError, setLoginError] = useState<string | null>(null);

    const isLogin = useMemo(() => !!user, [user]);


    const login = async (email: string, password: string) => {
        setLoginLoading(true);

        try {
            const response = await request<UserType>("http://localhost:3001/api/user/auth", {
                body: qs.stringify({email, password}),
            });

            setUser(response);
            toast("Logged in successfully");
        } catch (e) {

            setLoginError("Invalid credentials");
        } finally {
            setLoginLoading(false);
        }
    }

    const logout = () => {
        setUser(null);
    }

    return <UserContext.Provider value={{
        user,
        setUser,
        isLogin,
        login,
        logout,
        loginLoading
    }}>
        {children}
    </UserContext.Provider>
}