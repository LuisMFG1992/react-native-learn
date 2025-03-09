import StepNavigator from '@/components/StepNavigator'
import { useState } from 'react'
import { View, Text } from 'react-native'

const NewTransactionType = () => {
  const [isNextEnabled, setIsNextEnabled] = useState(true)

  return (
    <View className='flex-1 bg-rf-gray-300'>
      <Text>NewTransactionType</Text>
      <StepNavigator isNextEnabled={isNextEnabled} />
    </View>
  )
}

export default NewTransactionType
