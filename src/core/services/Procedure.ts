export type ProcedureElement = {
  id: string
  title: string
  icon: string
  link: string
  ranking?: number
}

export type ListProcedureFilter = {
  limit: number // 0: all
}

export default class Procedure {
  /**
    Get procedure by id
   */
  async get(id: string): Promise<ProcedureElement> {
    try {
      const procedure: ProcedureElement | undefined = proceduresList.find(p => p.id === id)
      if (procedure) return Promise.resolve(procedure)
      else return Promise.reject(new Error('Not found!'))
    } catch (error) {
      return Promise.reject(null)
    }
  }

  /**
    Get list of procedures
   */
  async list(filter: ListProcedureFilter = { limit: 0 }): Promise<ProcedureElement[]> {
    try {
      const procedures: ProcedureElement[] =
        filter.limit === 0 || filter.limit >= proceduresList.length
          ? proceduresList
          : proceduresList.slice(0, filter.limit)
      return Promise.resolve(procedures)
    } catch (error) {
      return Promise.reject(error)
    }
  }
}

// Fake API response
const proceduresList: ProcedureElement[] = [
  {
    id: '1',
    title: 'PAGOS',
    icon: '/assets/images/icons/pay.png',
    link: '',
    ranking: 1,
  },
  {
    id: '2',
    title: 'PATENTES',
    icon: '/assets/images/icons/plate.png',
    link: '',
    ranking: 1,
  },
  {
    id: '3',
    title: 'LICENCIA DE CONDUCIR',
    icon: '/assets/images/icons/car.png',
    link: '',
    ranking: 1,
  },
  {
    id: '4',
    title: 'SOLICITUDES',
    icon: '/assets/images/icons/requests.png',
    link: '',
    ranking: 1,
  },
  {
    id: '5',
    title: 'CERTIFICADOS',
    icon: '/assets/images/icons/document.png',
    link: '',
    ranking: 1,
  },
  {
    id: '6',
    title: 'PAGOS',
    icon: '/assets/images/icons/pay.png',
    link: '',
    ranking: 1,
  },
  {
    id: '7',
    title: 'PATENTES',
    icon: '/assets/images/icons/plate.png',
    link: '',
    ranking: 1,
  },
  {
    id: '8',
    title: 'LICENCIA DE CONDUCIR',
    icon: '/assets/images/icons/car.png',
    link: '',
    ranking: 1,
  },
  {
    id: '9',
    title: 'SOLICITUDES',
    icon: '/assets/images/icons/requests.png',
    link: '',
    ranking: 1,
  },
  {
    id: '10',
    title: 'CERTIFICADOS',
    icon: '/assets/images/icons/document.png',
    link: '',
    ranking: 1,
  },
  {
    id: '11',
    title: 'PAGOS',
    icon: '/assets/images/icons/pay.png',
    link: '',
    ranking: 1,
  },
  {
    id: '12',
    title: 'PATENTES',
    icon: '/assets/images/icons/plate.png',
    link: '',
    ranking: 1,
  },
  {
    id: '13',
    title: 'LICENCIA DE CONDUCIR',
    icon: '/assets/images/icons/car.png',
    link: '',
    ranking: 1,
  },
  {
    id: '14',
    title: 'SOLICITUDES',
    icon: '/assets/images/icons/requests.png',
    link: '',
    ranking: 1,
  },
  {
    id: '15',
    title: 'CERTIFICADOS',
    icon: '/assets/images/icons/document.png',
    link: '',
    ranking: 1,
  },
]
