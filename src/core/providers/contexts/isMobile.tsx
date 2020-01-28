import React, { createContext } from 'react'
import { isMobile } from 'mobile-device-detect'

export const MobileContext = createContext(isMobile)

type MobileContextProps = {
  children: React.ReactNode
}

const MobileContextProvider: React.FC<MobileContextProps> = ({ children }) => (
  <MobileContext.Provider value={isMobile}>{children}</MobileContext.Provider>
)

export default MobileContextProvider
