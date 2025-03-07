import { ThemedText } from '@/components/ThemedText'
import Animated from 'react-native-reanimated'

import {
  Button,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native'

export function HelloWave() {
  return (
    <Animated.View>
      <TouchableHighlight>
        <Text>This is a fully </Text>
      </TouchableHighlight>
      <TouchableOpacity>
        <Text>This is another fully customizable button</Text>
      </TouchableOpacity>
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 28,
    lineHeight: 32,
    marginTop: -6,
  },
})
