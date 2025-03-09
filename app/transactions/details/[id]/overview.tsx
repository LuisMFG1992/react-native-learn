import { View, Text } from 'react-native'
import { useLocalSearchParams } from 'expo-router'

export default function Overview() {
  const { id } = useLocalSearchParams<{ id: string }>()

  return (
    <View>
      <Text>Overview</Text>
      <Text>Transaction ID from overview: {id}</Text>
    </View>
  )
}
