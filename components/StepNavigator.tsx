import { useState } from 'react'
import {
  View,
  Text,
  Pressable,
  ScrollView,
  ActivityIndicator,
} from 'react-native'
import { useRouter } from 'expo-router'
import FontAwesome from '@expo/vector-icons/FontAwesome'
import Feather from '@expo/vector-icons/Feather'
import AutoFillReviewDropdown from '@/components/AutoFillReviewDropdown'

const NewTransactionForm = () => {
  const router = useRouter()

  const [transactionSummary, setTransactionSummary] = useState(false)
  const [clientInfo, setClientInfo] = useState(false)
  const [propertyInfo, setPropertyInfo] = useState(false)
  const [closingInfo, setClosingInfo] = useState(false)
  const [formsAndTasks, setFormsAndTasks] = useState(false)

  const [isProcessing, setIsProcessing] = useState(false)

  const isNextEnabled =
    transactionSummary &&
    clientInfo &&
    propertyInfo &&
    closingInfo &&
    formsAndTasks

  const simulateProcessing = async () => {
    return new Promise((resolve) => setTimeout(resolve, 2000))
  }

  const handleNext = async () => {
    setIsProcessing(true)

    await simulateProcessing()

    setIsProcessing(false)
    router.push('/transactions/new/dates-completion')
  }

  return isProcessing ?
      <View className='flex-1 justify-center items-center bg-rf-gray-300'>
        <ActivityIndicator size='large' color='#000' />
        <Text className='text-rf-gray-800 mt-4'>Processing...</Text>
      </View>
    : <ScrollView className='flex-1 bg-rf-gray-300'>
        <View className='flex-1 p-6 gap-4'>
          <Text className='text-xl text-rf-gray-800 font-medium'>
            All done! 👍
          </Text>

          <View className='bg-purple-100 gap-4 px-5 py-4 justify-between border border-purple-900 flex-row rounded-xl'>
            <View className='flex justify-center items-center'>
              <FontAwesome name='magic' size={24} />
            </View>
            <View className='flex-1'>
              <Text className='text-rf-gray-800 font-medium'>
                Our AI did the heavy lifting, but it may not be perfect. Please
                double-check each section below to make sure everything looks
                right.
              </Text>
            </View>
          </View>

          <View className='gap-4'>
            <AutoFillReviewDropdown
              title='Transaction Details'
              isCompletedEnabled
              onComplete={() => setTransactionSummary(true)}
            >
              <Text className='text-gray-700'>
                Here goes the transaction details.
              </Text>
            </AutoFillReviewDropdown>

            <AutoFillReviewDropdown
              title='Client Information'
              isCompletedEnabled
              onComplete={() => setClientInfo(true)}
            >
              <Text className='text-gray-700'>
                Client information goes here.
              </Text>
            </AutoFillReviewDropdown>

            <AutoFillReviewDropdown
              title='Property Information'
              isCompletedEnabled
              onComplete={() => setPropertyInfo(true)}
            >
              <Text className='text-gray-700'>
                Property details will be shown here.
              </Text>
            </AutoFillReviewDropdown>

            <AutoFillReviewDropdown
              title='Closing Information'
              isCompletedEnabled
              onComplete={() => setClosingInfo(true)}
            >
              <Text className='text-gray-700'>
                Closing details will be shown here.
              </Text>
            </AutoFillReviewDropdown>

            <AutoFillReviewDropdown
              title='Forms & Tasks'
              isCompletedEnabled
              onComplete={() => setFormsAndTasks(true)}
            >
              <Text className='text-gray-700'>
                Forms and tasks assigned to the transaction.
              </Text>
            </AutoFillReviewDropdown>
          </View>

          <View className='flex-row justify-between'>
            <Pressable className='px-4 py-2 bg-rf-gray-800 rounded-xl flex-row items-center gap-2'>
              <Feather name='arrow-left' size={24} color='white' />
              <Text className='text-rf-gray-100'>Back</Text>
            </Pressable>

            <Pressable
              className={`px-4 py-2 rounded-xl flex-row items-center gap-2 ${
                isNextEnabled ? 'bg-rf-gray-800' : 'bg-gray-400'
              }`}
              onPress={handleNext}
              disabled={!isNextEnabled}
            >
              <Text className='text-rf-gray-100'>Next</Text>
              <Feather name='arrow-right' size={24} color='white' />
            </Pressable>
          </View>
        </View>
      </ScrollView>
}

export default NewTransactionForm
