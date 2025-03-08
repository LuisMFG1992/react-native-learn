import { View, Text, Pressable } from 'react-native'
import { useLocalSearchParams, useRouter } from 'expo-router'

export default function DetailsScreen() {
  const { id } = useLocalSearchParams()
  const router = useRouter()

  return (
    <View className='flex-1 justify-center items-center'>
      <Text className='text-lg'>Detalles del elemento {id}</Text>

      <Pressable
        onPress={() => router.back()}
        className='bg-gray-500 px-4 py-2 rounded mt-4'
      >
        <Text className='text-white'>Volver</Text>
      </Pressable>
    </View>
  )
}
