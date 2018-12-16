import { Platform } from 'react-native'
import GpsAndroid from './impl/Gps.android'
import GpsIos from './impl/Gps.ios'

class Gps {
  constructor(options) {
    if (Platform.OS === 'ios') {
      this.gps = new GpsIos(options)
    } else {
      this.gps = new GpsAndroid(options)
    }
  }

  getPosition(requestDescription) {
    return this.gps.getPosition(requestDescription)
  }
}

export default Gps
