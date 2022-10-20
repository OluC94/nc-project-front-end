import { createContext } from "react";

interface EventContextInterface {
  eventID: string;
  setEventID?: any;
}

export const EventContext = createContext({} as EventContextInterface);
