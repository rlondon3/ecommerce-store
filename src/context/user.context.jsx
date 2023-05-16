import { createContext, useState, useEffect } from "react";
import { createUserDocFromAuth, onAuthStateChangedListener } from "../utils/firebase/firebase.utils";

//This is the value you want to access but not set
export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null,
});

//This provides the value to be used by other components
export const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null); //create the state for the context
    const value = { currentUser, setCurrentUser }; //export the value to be used by the provider

    useEffect(() => {
        const unsubscribe = onAuthStateChangedListener((user) => {
            if (user) {
                createUserDocFromAuth(user);
            }
            setCurrentUser(user);
        });

        return unsubscribe;
    }, [])

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}