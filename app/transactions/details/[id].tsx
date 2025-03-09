import { View, Text, Pressable } from 'react-native'
import { useLocalSearchParams, useRouter } from 'expo-router'
import TabApp from '@/components/TabsApp'

const accountTabs = [
  { id: 'account', label: 'Account', href: '/account' },
  { id: 'preferences', label: 'Preferences', href: '/account/preferences' },
]

export default function TransactionDetails() {
  const { id } = useLocalSearchParams()
  const router = useRouter()

  return (
    <View className='flex-1 items-center'>
      <Pressable
        onPress={() => router.back()}
        className='bg-red-500 px-4 py-2 rounded mt-4'
      >
        <Text className='text-white'>Volver</Text>
      </Pressable>
    </View>
  )
}
