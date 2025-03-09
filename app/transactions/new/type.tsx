import StepNavigator from '@/components/StepNavigator'
import { Link } from 'expo-router'
import { useState } from 'react'
import { View, Text, Image, Pressable } from 'react-native'

const psaIcon = require('../../../assets/images/psaIcon.png')
const listingIcon = require('../../../assets/images/listingIcon.png')

const NewTransactionType = () => {
  return (
    <View className='flex-1 bg-rf-gray-300 p-8'>
      <View className='flex-1 justify-center items-center gap-10'>
        <Text className='text-xl text-rf-gray-800 font-medium'>
          What type of transaction is this?
        </Text>
        <View className='w-full gap-4'>
          <Link href={'/transactions/new/upload'} asChild>
            <Pressable className='bg-rf-gray-100 w-full border border-border_gray rounded-xl justify-center items-center h-60 active:bg-green-100'>
              <Image source={psaIcon} className='size-20' />
              <Text className='text-xl text-rf-gray-800 font-medium'>
                Listing
              </Text>
              <Text className='text-lg text-rf-gray-600'>
                Selling a property? Start here.
              </Text>
            </Pressable>
          </Link>
          <Pressable className='bg-rf-gray-100 w-full border border-border_gray rounded-xl justify-center items-center h-60 active:bg-green-100'>
            <Image source={listingIcon} className='size-20' />
            <Text className='text-xl text-rf-gray-800 font-medium'>
              Purchase and Sale Agreement
            </Text>
            <Text className='text-lg text-rf-gray-600'>
              Already have a signed deal? Let’s go!
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  )
}

export default NewTransactionType
