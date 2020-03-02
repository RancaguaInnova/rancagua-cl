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

            {/* <div>aca el listado de mapas</div> */}
        </section>
    )
}

export default Maps
