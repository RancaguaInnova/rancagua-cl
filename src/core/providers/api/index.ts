const API_URL = 'https://services.smartrancagua.com/'

export interface RequestParams {
  method: String
  headers?: Headers
  body?: any
}

export const GET = async (url: string, opc: RequestInit) => {
  return CALL(url, { ...opc, method: 'GET' })
}

export const POST = async (url: string, opc: RequestInit) => {
  return CALL(url, { ...opc, method: 'POST' })
}

export const PUT = async (url: string, opc: RequestInit) => {
  return CALL(url, { ...opc, method: 'PUT' })
}

export const DELETE = async (url: string, opc: RequestInit) => {
  return CALL(url, { ...opc, method: 'DELETE' })
}

export const CALL = async (url: string, opc: RequestInit) => {
  try {
    // Check session, add Bearer
    const params: RequestInit = {
      method: opc.method,
      headers: opc.headers
        ? opc.headers
        : new Headers({ 'Content-Type': 'application/json', 'X-Origin': 'webviews' }),
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
