import React, { useContext, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
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
  const history = useHistory()
  const [services, setServices] = useState<Item[]>([])
  const { Service } = useContext(ServicesContext)

  // On load
  useEffect(() => {
    async function loadServices() {
      const list: ServiceElement[] = await Service.list({ limit: 5 })
      setServices(serviceToItem(list))
    }

    loadServices()
  }, [Service])

  return (
    <section className={`section ${styles.services}`}>
      <Title>SERVICIOS</Title>
      <ItemsList items={services} />
      <ViewMoreButton
        text='Ver todos los Servicios'
        onClick={() => {
          history.push('/servicios')
        }}
      />
    </section>
  )
}

export default Services
