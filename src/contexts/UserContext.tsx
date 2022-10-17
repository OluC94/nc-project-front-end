import { createContext } from "react";

interface UserContextInterface {
  username: string | null;
}

export const UserContext = createContext({} as UserContextInterface | null);
