import React, { useContext, useEffect, useState } from 'react'

import { ServicesContext } from 'core/providers/contexts/Services'
import { ProcedureElement } from 'core/services/Procedure'

import Title from 'components/Title'
import ItemsList, { Item } from 'components/ItemsList'

import styles from './styles.module.sass'

/**
  Cast procedures array to items array type
 */
export const procedureToItem = (procedures: ProcedureElement[]): Item[] => {
  return procedures.map(procedure => {
    return {
      id: procedure.id,
      title: procedure.title,
      link: procedure.link,
      avatar: { url: procedure.icon },
    }
  })
}

const Services: React.FC = () => {
  const [procedures, setProcedures] = useState<Item[]>([])
  const { Procedure } = useContext(ServicesContext)
  useEffect(() => {
    async function loadProcedures() {
      const list: ProcedureElement[] = await Procedure.list()
      setProcedures(procedureToItem(list))
    }

    loadProcedures()
  }, [Procedure])
  return (
    <section className={`section ${styles.procedures}`}>
      <Title style={{ fontWeight: 'bold' }}>TRÁMITES</Title>
      <ItemsList items={procedures} />
    </section>
  )
}

export default Services
