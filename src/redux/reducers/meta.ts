interface IMeta {
  connected: boolean
  status: string
}
interface IFSA {
  type?: string,
  payload?: any, // tslint:disable-line no-any
}

const metaReducer = (
  state = {
    connected: false,
    status: 'disconnected',
  },
  action: IFSA = {} // tslint:disable-line no-any
): IMeta => {
  switch (action.type) {
    case 'CONNECT':
      return {
        connected: true,
        status: 'connected',
      }
    default:
      return state
  }
}

export default metaReducer
