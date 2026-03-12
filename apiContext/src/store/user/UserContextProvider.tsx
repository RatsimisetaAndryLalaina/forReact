import { useReducer } from "react";
import UserContext, { type UserType } from "./UserContext";

const updateUser = (user: UserType, {action, payload}: {action: string, payload: UserType}) => {
    console.log('tena tonga aty tokoa');
    switch(action) {
        case 'SET_USER':
            return payload;
        default:
            return user;
    }
}

const UserContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, dispatchUpdateUser] = useReducer(updateUser, {id: '', name: '', email: ''});

    return <UserContext.Provider value={{
        currentUser: user,
        setCurrentUser: (user: UserType) => {
            console.log('goes here');
            dispatchUpdateUser({action: 'SET_USER', payload: user})
        }
    }}>
        {children}
    </UserContext.Provider>
}

export default UserContextProvider;