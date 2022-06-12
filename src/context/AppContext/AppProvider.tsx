import { ReactNode, useReducer, FC } from 'react'
import { appReducer } from './reducer'
import { AppContext } from './AppCtx'
import { IAppContext } from './types'

interface Props {
  children: ReactNode
}

export const INITIAL_STATE: IAppContext = {
    gridHeader: <></>
}

const AppContextProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, INITIAL_STATE)

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  )
}

export default AppContextProvider
