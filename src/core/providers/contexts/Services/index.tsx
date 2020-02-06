import React, { createContext } from 'react'

import Procedure from 'core/services/Procedure'
import Service from 'core/services/Service'

const services = {
  Procedure: new Procedure(),
  Service: new Service(),
}

export const ServicesContext = createContext(services)

type ServicesContextProps = {
  children: React.ReactNode
}

export const ServicesContextProvider: React.FC<ServicesContextProps> = ({ children }) => (
  <ServicesContext.Provider value={services}>{children}</ServicesContext.Provider>
)
