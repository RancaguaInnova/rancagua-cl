import React, { useContext, useEffect, useState } from 'react'
import { ServicesContext } from 'core/providers/contexts/Services'
import { ServiceElement } from 'core/services/Service'
import styles from './styles.module.sass'
import Title from 'components/Title'
import ViewMoreButton from 'components/ViewMoreButton'
import ItemsList, { Item } from 'components/ItemsList'

/**
  Cast services array to items array type
 */
const serviceToItem = (services: ServiceElement[]): Item[] => {
  return services.map(procedure => {
    return {
      id: procedure.id,
      title: procedure.title,
      link: procedure.link,
      avatar: { url: procedure.icon },
    }
  })
}

const Services: React.FC = () => {
  const [services, setServices] = useState<Item[]>([])
  const { Service } = useContext(ServicesContext)

  useEffect(() => {
    async function loadServices() {
      const list: ServiceElement[] = await Service.list({ limit: 5 })
      setServices(serviceToItem(list))
    }

    loadServices()
  }, [])

  return (
    <section className={`section ${styles.services}`}>
      <Title>SERVICIOS</Title>
      <ItemsList items={services} />
      <ViewMoreButton text='Ver todos los Servicios' />
    </section>
  )
}

export default Services
