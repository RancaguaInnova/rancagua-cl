import React, { createContext, useReducer } from 'react'
import { AuthState, AuthActions } from './types'
import { reducer } from './reducer'

const authInitialState: AuthState = {
  emails: null,
  profile: null,
  userToken: null,
  services: null,
}

const AuthContext = createContext<{
  state: AuthState
  dispatch: (action: AuthActions) => void
}>({
  state: authInitialState,
  dispatch: () => {},
})

type AuthContextProps = {
  children: React.ReactNode
}

const AuthContextProvider = ({ children }: AuthContextProps) => {
  const [state, dispatch] = useReducer(reducer, authInitialState)
  return <AuthContext.Provider value={{ state, dispatch }}>{children}</AuthContext.Provider>
}

export { AuthContext, AuthContextProvider }
