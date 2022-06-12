import { ReactElement, ReactNode } from "react";

export interface IAppContext {
  gridHeader?: ReactElement;
  errorMsg?:boolean
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
  SetHeader = "SET_HEADER",
  SetErrorMsg="SET_ERROR_MSG"
}

type AppCtxPayload = {
  [ActionTypes.SetHeader]:IAppContext,
  [ActionTypes.SetErrorMsg]:boolean
};

export type AppCtxActions = ActionMap<AppCtxPayload>[keyof ActionMap<
  AppCtxPayload
>];

