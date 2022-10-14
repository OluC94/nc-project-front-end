import { createContext } from "react";

interface EventContextInterface {
  event: string | null;
}

export const EventContext = createContext({} as EventContextInterface | null);
