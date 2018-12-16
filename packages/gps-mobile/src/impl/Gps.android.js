import { PermissionsAndroid } from 'react-native'

export default class Gps {
  constructor(options) {
    this.options = options || {
      enableHighAccuracy: true,
      timeout: 20000,
      maximumAge: 30000
    }
    this.defaultRequestDescription = {
      title: 'GPS Permission',
      message: 'This App needs access to your geolocation'
    }
  }

  getPosition(requestDescription) {
    return Gps.requestGpsPermission(requestDescription || this.defaultRequestDescription, this.onGranted)
  }

  onGranted() {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        position => {
          this.position = position
          resolve(this.position)
        },
        error => reject(new Error(error.message)),
        this.options
      )
    })
  }

  static requestGpsPermission(requestDescription, onPermissionGranted) {
    return PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION).then(isGranted => {
      if (isGranted) return onPermissionGranted()
      return PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION, requestDescription).then(
        requestResult => {
          if (requestResult === PermissionsAndroid.RESULTS.GRANTED) {
            return onPermissionGranted()
          }
          return Promise.reject(new Error('GPS permission denied'))
        }
      )
    })
  }
}
