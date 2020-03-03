import React, { lazy, Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'

import { Breadcrumb } from 'antd'
import { Link } from 'react-router-dom'

import Loading from 'components/Loading'
import Title from 'components/Title'
import ItemsList, { Item } from 'components/ItemsList'
import styles from './styles.module.sass'

const BASE_PATH = '/servicios/mapas'

// Sub Pages
const GarbageCollector = lazy(() => import('./GarbageCollector'))
const Parking = lazy(() => import('./Parking'))
const Maps: React.FC = () => {
    const mapList = (
        <div>
            <Title style={{ fontWeight: 'bold' }}>MAPAS</Title>
            <Breadcrumb>
                <Breadcrumb.Item>
                    <Link to='/'>Home</Link>
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                    <Link to='/servicios'>Servicios</Link>
                </Breadcrumb.Item>
                <Breadcrumb.Item>Mapas</Breadcrumb.Item>
            </Breadcrumb>
            <div className={styles.list}>
                <ItemsList items={maps} style={{ metaTitle: styles.metaTitle, meta: styles.meta }} />
            </div>
        </div>
    )

    return (
        <div>
            <Suspense fallback={<Loading />}>
                <Switch>
                    <Route path={`${BASE_PATH}/basura`}>
                        <GarbageCollector />
                    </Route>
                    <Route path={`${BASE_PATH}/estacionamientos`}>
                        <Parking />
                    </Route>
                    <Route path={BASE_PATH} default>
                        {mapList}
                    </Route>
                </Switch>
            </Suspense>
        </div>
    )
}

export default Maps

const maps = [
    {
        id: '',
        title: 'Recolección de Basura',
        description: 'Mapa en tiempo real con la ubicación de los camiones de basura domiciliaria',
        link: '/servicios/mapas/basura',
        avatar: { url: '/assets/images/icons/garbage-collector.png' }
    },
    {
        id: '',
        title: 'Estacionamientos públicos',
        description: 'Mapa en tiempo real de estacionamientos públicos disponibles en el centro de la ciudad',
        link: '/servicios/mapas/estacionamientos',
        avatar: { url: '/assets/images/icons/garbage-collector.png' }
    },
    {
        id: '',
        title: 'Ferias Libres',
        description: 'Mapa de los camiones de recolección de Basura',
        link: '',
        avatar: { url: '/assets/images/icons/garbage-collector.png' }
    },
    {
        id: '',
        title: 'Red de Ciclovías',
        description: 'Mapa de los camiones de recolección de Basura',
        link: '',
        avatar: { url: '/assets/images/icons/garbage-collector.png' }
    }
]
