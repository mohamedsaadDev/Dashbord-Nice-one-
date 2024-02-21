"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { getAllOrder } from "./getOrder";
import { getAllUsers } from "./getUsers";
import { UserType } from "@/type/type";
import Cookies from "js-cookie";
const cookie = Cookies.get("cookie");
const token = cookie ? atob(cookie) : null;
//const token = cookie token:string|null
interface AppContextType {
    Orders: string[];
    Users: UserType[];
}
export const AppContext = createContext<AppContextType>({
    Orders: [],
    Users: [],
});
export function AppWrapper({ children }: { children: React.ReactNode }) {
    const [Orders, setOrders] = useState<string[]>([]);
    const [Users, setUser] = useState<UserType[]>([]);
    const getData = async () => {
        try {
            const dataUser = await getAllUsers(token);
            setUser(dataUser);
            const dataOrder = await getAllOrder(token);
            setOrders(dataOrder);
        } catch (e) {
            console.log(e);
        }
    };
    useEffect(() => {
        getData();
    }, []);
    const contextValue: AppContextType = {
        Orders,
        Users,
    };
    return (
        <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
    );
}
export function useAppContext(): AppContextType {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error('useAppContext must be used within an AppWrapper');
    }
    return context;
}
