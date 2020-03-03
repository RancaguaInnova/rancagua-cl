import React from 'react'
import { Breadcrumb } from 'antd'
import { Link } from 'react-router-dom'
import Title from 'components/Title'
import ItemsList, { Item } from 'components/ItemsList'
import styles from './styles.module.sass'
const Maps: React.FC = () => {
    return (
        <div>
            <Title style={{ fontWeight: 'bold' }}>RECOLECCIÓN DE BASURA</Title>
            <Breadcrumb>
                <Breadcrumb.Item>
                    <Link to='/servicios'>Servicios</Link>
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                    <Link to='/servicios/mapas'>Mapas</Link>
                </Breadcrumb.Item>
                <Breadcrumb.Item>Recolección de Basura</Breadcrumb.Item>
            </Breadcrumb>
            <div className={styles.iframeContainer}>
                <iframe
                    frameBorder='0'
                    src='https://webviews.smartrancagua.com/integration/garbage-collector/embed'
                    style={{ width: '100%', height: '75vh', padding: '4px' }}
                />
            </div>
        </div>
    )
}

export default Maps
