import { View } from 'react-native'
import { Slot } from 'expo-router'
import TabApp from '@/components/TabsApp'

const accountTabs = [
  { id: 'account', label: 'Account', href: '/account' },
  { id: 'preferences', label: 'Preferences', href: '/account/preferences' },
  { id: 'subscription', label: 'Subscription', href: '/account/subscription' },
]

export default function AccountLayout() {
  return (
    <View className='flex-1  px-4 pt-4 bg-rf-gray-300'>
      <TabApp tabs={accountTabs} />
      <Slot />
    </View>
  )
}
