import moment from 'moment'
export const setStorage = (key: string, data: any, expiration: number = 3600) => {
  try {
    const storage = {
      value: data,
      expireAt: moment()
        .add(expiration, 'seconds')
        .toDate(),
    }

    localStorage.setItem(key, JSON.stringify(storage))
  } catch (error) {
    console.log('error', error)
    return null
  }
}
