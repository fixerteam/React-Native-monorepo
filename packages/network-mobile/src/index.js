import { NetInfo } from 'react-native'

class NetworkMobile {
  getConnectionInfo() {
    return NetInfo.getConnectionInfo()
  }

  isConnected() {
    return NetInfo.isConnected.fetch()
  }

  onConnectionChange(handler) {
    NetInfo.isConnected.addEventListener('connectionChange', handler)
  }

  removeOnConnectionChange(handler) {
    NetInfo.isConnected.removeEventListener('connectionChange', handler)
  }
}

export default NetworkMobile
