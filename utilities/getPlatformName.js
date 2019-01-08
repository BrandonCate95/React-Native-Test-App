import { Platform } from 'react-native'

export default getPlatformName = (name) => {
    return Platform.OS === 'ios' ? `ios-${name}` : `md-${name}`
}