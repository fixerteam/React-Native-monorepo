class NetworkWeb {
  getConnectionInfo() {
    throw new Error('getConnectionInfo() is not implemented in WEB')
  }

  isConnected() {
    throw new Error('isConnected() is not implemented in WEB')
  }

  onConnectionChange(handler) {
    console.log('Handler: ', handler)
    throw new Error('onConnectionChange() is not implemented in WEB')
  }

  removeOnConnectionChange(handler) {
    console.log('Handler: ', handler)
    throw new Error('removeOnConnectionChange() is not implemented in WEB')
  }
}

export default NetworkWeb
