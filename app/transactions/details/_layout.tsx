import TabApp from '@/components/TabsApp'
import { Slot, useLocalSearchParams } from 'expo-router'
import { View, Text } from 'react-native'

const accountTabs = [
  { id: 'overview', label: 'Overview', href: '/' },
  { id: 'transaction', label: 'Transaction', href: '/' },
  { id: 'property', label: 'Property', href: '/' },
  { id: 'client', label: 'Client', href: '/' },
  { id: 'closing', label: 'Closing', href: '/' },
]

export default function DetailsLayout() {
  const { id } = useLocalSearchParams<{ id: string }>()

  return (
    <View className='flex-1 bg-rf-gray-300'>
      <TabApp tabs={accountTabs} />
      <Slot />
    </View>
  )
}
