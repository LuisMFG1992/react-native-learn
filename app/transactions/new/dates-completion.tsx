import StepNavigator from '@/components/StepNavigator'
import { useState } from 'react'
import { View, Text } from 'react-native'

const NewTransactionDatesCompletion = () => {
  const [isNextEnabled, setIsNextEnabled] = useState(true)

  return (
    <View>
      <Text>NewTransactionDatesCompletion</Text>
      <StepNavigator isNextEnabled={isNextEnabled} />
    </View>
  )
}

export default NewTransactionDatesCompletion
