import StepNavigator from '@/components/StepNavigator'
import { useState } from 'react'
import { View, Text, Pressable, Image } from 'react-native'
import Entypo from '@expo/vector-icons/Entypo'

const listingIcon = require('../../../assets/images/fileUpload.png')

const NewTransactionUpload = () => {
  const [isNextEnabled, setIsNextEnabled] = useState(true)
  return (
    <View className='flex-1 bg-rf-gray-300 p-8'>
      <View className='flex-1 justify-center items-center gap-10'>
        <View className='gap-1'>
          <Text className='text-xl text-rf-gray-800 font-medium text-center'>
            Upload your PSA here
          </Text>
          <Text className='text-xl text-rf-gray-800 font-medium text-center'>
            we’ll take care of the rest
          </Text>
        </View>
        <View className='w-full gap-4'>
          <Pressable className='bg-rf-gray-100 w-full border-2 border-dashed border-border_gray rounded-xl justify-center items-center h-60 active:opacity-65'>
            <Image
              source={listingIcon}
              className='size-28'
              resizeMode='contain'
            />
            <Text className='text-xl text-rf-gray-800 font-medium'>
              Upload your PSA here
            </Text>
            <Text className='text-lg text-rf-gray-600'>
              Maximum size: 500MB
            </Text>
          </Pressable>
          <View className='flex-row items-center w-full gap-2'>
            <View className='flex-1 h-[1px] bg-rf-gray-600' />
            <Text className='text-rf-gray-600'>or</Text>
            <View className='flex-1 h-[1px] bg-rf-gray-600' />
          </View>
        </View>
        <Pressable className='flex-row items-center'>
          <Text className='text-rf-gray-600'>
            Manually enter the transaction information
          </Text>
          <Text className='text-rf-gray-600'>
            <Entypo name='chevron-right' size={16} />
          </Text>
        </Pressable>
      </View>
    </View>
  )
}

export default NewTransactionUpload
