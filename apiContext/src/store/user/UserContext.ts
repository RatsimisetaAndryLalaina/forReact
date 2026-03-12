import { createContext } from "react";

export interface UserType {
  id: string;
  name: string;
  email: string;
}

export interface UserContextType {
  currentUser: UserType | null;
  setCurrentUser: (user: UserType) => void;
}

const UserContext = createContext<UserContextType>({
    currentUser: null,
    setCurrentUser: () => {}
});

export default UserContext;