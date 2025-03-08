import TabsApp from '@/components/TabsApp'
import { View, Text } from 'react-native'

const Account = () => {
  return (
    <View className='bg-rf-gray-300 flex-1 p-4'>
      <TabsApp />
      <Text>Account</Text>
    </View>
  )
}

export default Account
