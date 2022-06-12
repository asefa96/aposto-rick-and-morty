import { useContext } from 'react'
import {AppContext} from './AppCtx'

export const useAppCtx = () => {
  const { state, dispatch } = useContext(AppContext)

  return {
    ...state,
    dispatch
  }
}
