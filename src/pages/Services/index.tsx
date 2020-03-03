import React, { lazy, Suspense, useContext, useEffect, useState } from 'react'
import { Route, Switch } from 'react-router-dom'

import { ServicesContext } from 'core/providers/contexts/Services'
import { ServiceElement } from 'core/services/Service'

import Title from 'components/Title'
import ItemsList, { Item } from 'components/ItemsList'
import Loading from 'components/Loading'
import styles from './styles.module.sass'

const BASE_PATH = '/servicios'

// Sub Pages
const Maps = lazy(() => import('./Maps'))

/**
  Cast procedures array to items array type
 */
export const serviceToItem = (services: ServiceElement[]): Item[] => {
    return services.map((service) => {
        return {
            id: service.id,
            title: service.title,
            link: service.link,
            avatar: { url: service.icon }
        }
    })
}

const Services: React.FC = () => {
    const [ services, setServices ] = useState<Item[]>([])
    const { Service } = useContext(ServicesContext)
    useEffect(
        () => {
            async function loadServices() {
                const list: ServiceElement[] = await Service.list()
                setServices(serviceToItem(list))
            }

            loadServices()
        },
        [ Service ]
    )
    return (
        <section className={`section ${styles.services}`}>
            <Suspense fallback={<Loading />}>
                <Switch>
                    <Route path={`${BASE_PATH}/mapas`}>
                        <Maps />
                    </Route>
                    <Route path={BASE_PATH} default>
                        <Title style={{ fontWeight: 'bold' }}>SERVICIOS</Title>
                        <ItemsList items={services} />
                    </Route>
                </Switch>
            </Suspense>
        </section>
    )
}

export default Services
