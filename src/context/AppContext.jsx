import { createContext, useReducer } from "react";
import appReducer, { intialState } from "./appReducer";

export const AppContext = createContext(null)

export const AppProvider = ({ children }) => {

    const [state, dispatch] = useReducer(appReducer, intialState)

    const registerUser = (newUser) => {
        dispatch({
            type: 'REGISTER_USER',
            payload:{
                user: newUser
            }
        })
    }
    

    const loginUser = (user) => {
        dispatch({
            type: 'LOGIN_USER',
            payload:{
             user
            }
        })
    }
    

    const value ={
        auth: state.auth,
        registerUser,
        loginUser
    }

    return (
        <AppContext.Provider  value={value}>
            {children}
        </AppContext.Provider>
    )


}

