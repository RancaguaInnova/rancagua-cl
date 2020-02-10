import React, { useContext, useEffect, useState } from 'react'

import { ServicesContext } from 'core/providers/contexts/Services'
import { ServiceElement } from 'core/services/Service'

import Title from 'components/Title'
import ItemsList, { Item } from 'components/ItemsList'

import styles from './styles.module.sass'

/**
  Cast procedures array to items array type
 */
export const serviceToItem = (services: ServiceElement[]): Item[] => {
  return services.map(service => {
    return {
      id: service.id,
      title: service.title,
      link: service.link,
      avatar: { url: service.icon },
    }
  })
}

const Services: React.FC = () => {
  const [services, setServices] = useState<Item[]>([])
  const { Service } = useContext(ServicesContext)
  useEffect(() => {
    async function loadServices() {
      const list: ServiceElement[] = await Service.list()
      setServices(serviceToItem(list))
    }

    loadServices()
  }, [Service])
  return (
    <section className={`section ${styles.services}`}>
      <Title style={{ fontWeight: 'bold' }}>SERVICIOS</Title>
      <ItemsList items={services} />
    </section>
  )
}

export default Services
