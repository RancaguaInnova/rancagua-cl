const API_URL = process.env.API_URL

export interface RequestParams extends RequestInit {
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE'
  headers?: Headers
  body?: any
}

export const GET = async (url: string, opc: RequestParams = {}) => {
  return CALL(url, { ...opc, method: 'GET' })
}

export const POST = async (url: string, opc: RequestParams = {}) => {
  return CALL(url, { ...opc, method: 'POST' })
}

export const PUT = async (url: string, opc: RequestParams = {}) => {
  return CALL(url, { ...opc, method: 'PUT' })
}

export const DELETE = async (url: string, opc: RequestParams = {}) => {
  return CALL(url, { ...opc, method: 'DELETE' })
}

export const CALL = async (url: string, opc: RequestParams = {}) => {
  try {
    // Check session, add Bearer
    const params: RequestParams = {
      method: opc.method,
      headers: opc.headers
        ? opc.headers
        : new Headers({ 'Content-Type': 'application/json', 'X-Origin': 'rancagua.cl' }),
    }

    if (opc.body) params.body = JSON.stringify(opc.body)

    const fullUrl =
      url.search('http:') !== -1 || url.search('https:') !== -1 ? url : `${API_URL}${url}`
    const request = new Request(fullUrl, params)

    let response = await fetch(request)
    try {
      const json = await response.json()
      return Promise.resolve(json)
    } catch (err) {
      return Promise.resolve(response)
    }
  } catch (error) {
    return Promise.reject(error)
  }
}
