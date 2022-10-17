import { createContext } from "react";

interface EventContextInterface {
  eventID: string | null;
}

export const EventContext = createContext({} as EventContextInterface | null);
