import { ActionTypes, AppCtxActions, IAppContext } from "./types";

export const appReducer = (state: IAppContext, action: AppCtxActions) => {
  switch (action.type) {
    case ActionTypes.SetHeader:
      state.gridHeader = action.payload.gridHeader;
      return { ...state };
    case ActionTypes.SetErrorMsg:
      state.errorMsg=action.payload;
      return { ...state };
    default:
      return state;
  }
};
