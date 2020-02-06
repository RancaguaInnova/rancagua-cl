import React, { useContext, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { ServicesContext } from 'core/providers/contexts/Services'
import { ProcedureElement } from 'core/services/Procedure'

import { procedureToItem } from 'pages/Procedures'

import Title from 'components/Title'
import ItemsList, { Item } from 'components/ItemsList'
import ViewMoreButton from 'components/ViewMoreButton'

import styles from './styles.module.sass'

const Procedures: React.FC = () => {
  const history = useHistory()
  const [procedures, setProcedures] = useState<Item[]>([])
  const { Procedure } = useContext(ServicesContext)

  // On load
  useEffect(() => {
    async function loadProcedures() {
      const list: ProcedureElement[] = await Procedure.list({ limit: 5 })
      setProcedures(procedureToItem(list))
    }

    loadProcedures()
  }, [Procedure])

  return (
    <section className={`section ${styles.procedures}`}>
      <Title style={{ fontWeight: 'bold' }}>TRÁMITES</Title>
      <ItemsList items={procedures} />
      <ViewMoreButton
        text='Ver todos los Trámites'
        onClick={() => {
          history.push('/tramites')
        }}
      />
    </section>
  )
}

export default Procedures
