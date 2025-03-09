import StepNavigator from '@/components/StepNavigator'
import { useState } from 'react'
import { View, Text, Pressable, Image } from 'react-native'
import AntDesign from '@expo/vector-icons/AntDesign'
import { Link } from 'expo-router'

const psaIcon = require('../../../assets/images/psaIcon.png')
const listingIcon = require('../../../assets/images/listingIcon.png')

const NewTransactionDatesCompletion = () => {
  const [isNextEnabled, setIsNextEnabled] = useState(true)

  return (
    <View className='flex-1 bg-rf-gray-300 p-8'>
      <View className='flex-1 justify-center items-center gap-10'>
        <View className='gap-4'>
          <Text className='text-xl text-rf-gray-800 font-medium text-center'>
            Congrats, Steph,{'\n'} your transaction has been added!
          </Text>
          <Text className='text-lg text-rf-gray-600 text-center'>
            Your tasks are on your dashboard and we’ve added the deadlines to
            your calendar.
          </Text>
        </View>
        <View className='w-full gap-4'>
          <View className='bg-green-100 w-full border border-green-700 rounded-xl justify-center items-center h-60 active:bg-green-100 gap-4'>
            <Text className='text-green-700'>
              <AntDesign name='checkcircleo' size={45} />
            </Text>
            <Text className='text-xl text-rf-gray-800 font-medium'>
              You’re all set
            </Text>
          </View>
          <Link href={'/'} asChild>
            <Pressable className='px-4 py-2 bg-rf-gray-800 rounded-xl flex-row items-center justify-center gap-2'>
              <Text className='text-rf-gray-100'>Back to dashboard</Text>
            </Pressable>
          </Link>
        </View>
      </View>
    </View>
  )
}

export default NewTransactionDatesCompletion
