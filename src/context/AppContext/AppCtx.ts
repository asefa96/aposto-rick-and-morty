import { createContext, Dispatch } from "react";
import { AppCtxActions, IAppContext } from "./types";

interface AppContextProps {
  state: IAppContext;
  dispatch: Dispatch<AppCtxActions>;
}

export const AppContext = createContext<AppContextProps>(
  {} as AppContextProps
);
