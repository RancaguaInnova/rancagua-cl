export type AuthState = {
  emails: Array<{ address: string; verified: boolean }> | null
  profile: {
    identifier: string
    subscriptions: any
    firstName: string
    lastName: string
    gender: string
    birthdate: string
  } | null
  userToken: string | null
  services: {
    authToken: string
  } | null
}

export type AuthActions =
  | {
      type: 'LOGIN'
      payload: {
        email: string
        password: string
      }
    }
  | {
      type: 'LOGOUT'
    }
