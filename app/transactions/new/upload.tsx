import StepNavigator from '@/components/StepNavigator'
import { useState } from 'react'
import { View, Text } from 'react-native'

const NewTransactionUpload = () => {
  const [isNextEnabled, setIsNextEnabled] = useState(true)
  return (
    <View>
      <Text>NewTransactionUpload</Text>
      <StepNavigator isNextEnabled={isNextEnabled} />
    </View>
  )
}

export default NewTransactionUpload
