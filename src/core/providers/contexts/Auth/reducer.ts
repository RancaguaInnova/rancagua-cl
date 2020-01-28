import { AuthState, AuthActions } from './types'
import { POST } from '../../api'

export const reducer = (state: AuthState, action: AuthActions): AuthState => {
  switch (action.type) {
    case 'LOGIN':
      const {
        payload: { email, password },
      } = action
      // Call auth.login API
      try {
        const loginResponse = POST('', { body: { email, password } })
        return {
          ...state,
          ...loginResponse,
        }
      } catch (error) {
        console.log('Error login in:', error.message)
        return error
      }
    case 'LOGOUT':
      return {
        ...state,
        emails: null,
        profile: null,
        userToken: null,
        services: null,
      }
    default:
      return state
  }
}
