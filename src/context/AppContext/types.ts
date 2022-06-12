import { ReactElement, ReactNode } from "react";

export interface IAppContext {
  gridHeader: ReactElement;
}

type ActionMap<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
      }
    : {
        type: Key;
        payload: M[Key];
      }
};

export enum ActionTypes {
  SetHeader = "SET_HEADER"
}

type AppCtxPayload = {
  [ActionTypes.SetHeader]:IAppContext
};

export type AppCtxActions = ActionMap<AppCtxPayload>[keyof ActionMap<
  AppCtxPayload
>];

