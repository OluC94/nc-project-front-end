import { createContext } from "react";

interface UserContextInterface {
  username: string;
}

export const UserContext = createContext({} as UserContextInterface);
