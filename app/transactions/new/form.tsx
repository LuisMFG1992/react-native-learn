import StepNavigator from '@/components/StepNavigator'
import { useState } from 'react'
import { View, Text } from 'react-native'

const NewTransactionForm = () => {
  const [isNextEnabled, setIsNextEnabled] = useState(true)

  return (
    <View>
      <Text>NewTransactionForm</Text>
      <StepNavigator isNextEnabled={isNextEnabled} />
    </View>
  )
}

export default NewTransactionForm
