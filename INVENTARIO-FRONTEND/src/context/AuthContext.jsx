import { createContext } from "react";
import { useEffect, useState } from "react";

const AuthContext = createContext()

const AuthContextProvider = (props) => {

    const [info, setInfo] = useState()

    const loginUser = async(user) => {
        try {
            const response = await fetch(
                "https://backend-inventario-six.vercel.app/api/v1/login",
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(user),
                },
            );

            const data = await response.json()

            if (!response.ok) {
                throw new Error(data.msg);
            }

            setInfo(data)

        } catch (error) {
            console.log(error)
        }
    }

    const login = (user) => {
        loginUser(user)
    }

    return(
        <AuthContext.Provider value={{
            login
        }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export {
    AuthContext,
    AuthContextProvider
}