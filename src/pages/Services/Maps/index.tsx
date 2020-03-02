import React from 'react'
import { Breadcrumb } from 'antd'
import { Link } from 'react-router-dom'
import Title from 'components/Title'
import ItemsList, { Item } from 'components/ItemsList'
import styles from './styles.module.sass'
const Maps: React.FC = () => {
    return (
        <section className={`section ${styles.maps}`}>
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
            {/* <div>aca el listado de mapas</div> */}
        </section>
    )
}

export default Maps

const maps = [
    {
        id: '',
        title: 'Recolección de Basura',
        description: 'Mapa en tiempo real con la ubicación de los camiones de basura domiciliaria',
        link: '',
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
