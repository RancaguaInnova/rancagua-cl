import React, { createContext } from 'react'
import { isMobile } from 'mobile-device-detect'

export const MobileContext = createContext(isMobile)

type MobileContextProps = {
  children: React.ReactNode
}

export const MobileContextProvider: React.FC<MobileContextProps> = ({ children }) => (
  <MobileContext.Provider value={isMobile}>{children}</MobileContext.Provider>
)
