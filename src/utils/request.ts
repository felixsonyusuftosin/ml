const axios = require('axios')


type RequestReturnType = {
  status: number
  data: unknown | unknown[] | null
  error?: null | string
}

const axiosConfig: any = {
  method: 'get',
  responseType: 'json',
  validateStatus: (status: number) => status < 400 || status === 404
}

const request = async (
  url: string,
  rest = {}
): Promise<RequestReturnType> => {
  const updatedConfigurations = { ...axiosConfig, url, ...rest }
  try {
    const { data, status } = await axios(updatedConfigurations)
    if (status === 404) {
      return { status: 404, data: null }
    }
    if (updatedConfigurations.method === 'delete' || status === 204) {
      return { status, data: 'success' }
    }
    return { status, data }
  } catch (error) {
    if (error.response) {
      const { data, status } = error.response
      return { status, data: null, error: data }
    } else if (error.request) {
      return { status: 400, data: null, error: error.message }
    }
    return { status: 500, data: null, error: error.message }
  }
}

export default request
