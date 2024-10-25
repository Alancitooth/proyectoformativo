import { createContext, useState, useContext, children } from "react";

import { registerRequest } from "../api/auth";

export const AuthContext = createContext ();

export const useAuth = () =>{
    const context = useContext(AuthContext);
    if(!context){
        throw new Error("useAuth must be uses within an AuthProvider");
    }
    return context;
}

export const AuthProvider = ({children}) =>{
    const [user, setUser] = useState(null);
    cosnt [isAuthenticated, setIsAuthenticated] = useState(false)
    const  [errors, setErrors] = useState([]);

    const singup = async (user) => {
        try {
            const response = await registerRequest(user);
            console.log(response);
            setUser(response.data);
            setIsAuthenticated(true)
        } catch (error) {
            setErrors (error.response.data)
            console.log(error);
        }
    }

    return(
        <AuthContext.Provider value={{
            singup,
            user,
            isAuthenticated,
            errors
        }}>
            {children}
        </AuthContext.Provider>
    )

}
