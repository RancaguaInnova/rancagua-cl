export type ServiceElement = {
  id: string
  title: string
  icon: string
  link: string
  ranking?: number
}

export type ListServiceFilter = {
  limit: number // 0: all
}

export default class Service {
  /**
    Get service by id
   */
  async get(id: string): Promise<ServiceElement> {
    try {
      const service: ServiceElement | undefined = servicesList.find(p => p.id === id)
      if (service) return Promise.resolve(service)
      else return Promise.reject(new Error('Not found!'))
    } catch (error) {
      return Promise.reject(null)
    }
  }

  /**
    Get list of services
   */
  async list(filter: ListServiceFilter = { limit: 0 }): Promise<ServiceElement[]> {
    try {
      const services: ServiceElement[] =
        filter.limit === 0 || filter.limit >= servicesList.length
          ? servicesList
          : servicesList.slice(0, filter.limit)
      return Promise.resolve(services)
    } catch (error) {
      return Promise.reject(error)
    }
  }
}

// Fake API response
const servicesList: ServiceElement[] = [
  {
    id: '1',
    title: 'MAPAS',
    icon: '/assets/images/icons/map.png',
    link: '',
    ranking: 1,
  },
  {
    id: '2',
    title: 'ORGANIZACIONES COMUNITARIAS',
    icon: '/assets/images/icons/comunity.png',
    link: '',
    ranking: 1,
  },
  {
    id: '3',
    title: 'DECRETOS MUNICIPALES',
    icon: '/assets/images/icons/document.png',
    link: '',
    ranking: 1,
  },
  {
    id: '4',
    title: 'TRANSPARENCIA',
    icon: '/assets/images/icons/book.png',
    link: '',
    ranking: 1,
  },
  {
    id: '5',
    title: 'BOLSA DE EMPLEO',
    icon: '/assets/images/icons/student.png',
    link: '',
    ranking: 1,
  },
]
