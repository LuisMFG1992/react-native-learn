import TabApp from '@/components/TabsApp'
import { Slot, useLocalSearchParams } from 'expo-router'
import { View, Text } from 'react-native'

export default function DetailsLayout() {
  const { id } = useLocalSearchParams<{ id: string }>()

  const accountTabs = [
    {
      id: 'overview',
      label: 'Overview',
      href: `/transactions/details/${id}/overview`,
    },
    {
      id: 'transaction',
      label: 'Transaction',
      href: `/transactions/details/${id}/transaction`,
    },
    {
      id: 'property',
      label: 'Property',
      href: `/transactions/details/${id}/property`,
    },
    {
      id: 'client',
      label: 'Client',
      href: `/transactions/details/${id}/client`,
    },
    {
      id: 'closing',
      label: 'Closing',
      href: `/transactions/details/${id}/closing`,
    },
  ]

  return (
    <View className='flex-1 bg-rf-gray-300'>
      <TabApp tabs={accountTabs} />
      <View className='p-4'>
        <Text>Layout text id: {id}</Text>
        <Slot />
      </View>
    </View>
  )
}
