import React, { useContext, useEffect, useState } from 'react'
import { ServicesContext } from 'core/providers/contexts/Services'
import { ProcedureElement } from 'core/services/Procedure'

import { procedureToItem } from 'pages/Procedures'

import Title from 'components/Title'
import ItemsList, { Item } from 'components/ItemsList'
import ViewMoreButton from 'components/ViewMoreButton'

import './styles.sass'

const Procedures: React.FC = () => {
  const [procedures, setProcedures] = useState<Item[]>([])
  const { Procedure } = useContext(ServicesContext)
  useEffect(() => {
    async function loadProcedures() {
      const list: ProcedureElement[] = await Procedure.list({ limit: 5 })
      setProcedures(procedureToItem(list))
    }

    loadProcedures()
  }, [])

  return (
    <section className='section procedures'>
      <Title style={{ fontWeight: 'bold' }}>TRÁMITES</Title>
      <ItemsList items={procedures} />
      <ViewMoreButton text='Ver todos los Trámites' />
    </section>
  )
}

export default Procedures
