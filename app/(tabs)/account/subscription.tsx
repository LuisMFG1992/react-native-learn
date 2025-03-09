import FontAwesome6 from '@expo/vector-icons/FontAwesome6'
import { useState } from 'react'
import { View, Text, ScrollView, Pressable, Image } from 'react-native'

export default function SubscriptionPage() {
  const [calendars, setCalendars] = useState([
    {
      id: 1,
      icon: 'https://www.designenlassen.de/blog/wp-content/uploads/2024/03/VISA-Logo-2006-1024x576.png',
      company: 'Visa',
      lastCardDigits: 6573,
      expires: '11/30',
      isPrimary: true,
    },
    {
      id: 2,
      icon: 'https://brandlogos.net/wp-content/uploads/2021/11/mastercard-logo-512x512.png',
      company: 'Mastercard',
      lastCardDigits: 3246,
      expires: '06/28',
      isPrimary: false,
    },
  ])
  return (
    <ScrollView className='flex-1 '>
      <View className='w-full gap-6 p-4'>
        <Text className='text-xl font-semibold'>Plan</Text>
        <Text className='text-lg text-rf-gray-600'>
          Manage your subscription and choose the plan that works for you.
        </Text>

        {calendars.map(
          ({ id, company, icon, isPrimary, expires, lastCardDigits }) => (
            <View
              className='flex-row bg-rf-gray-100 border border-gray-300 rounded-lg p-3 text-gray-80 gap-3'
              key={id}
            >
              <View className='flex justify-center items-center'>
                <Image
                  source={{
                    uri: icon,
                  }}
                  className='size-8'
                  resizeMode='contain'
                />
              </View>
              <View className='flex-1'>
                <Text className='text-md font-semibold text-rf-gray-800'>
                  {company}
                  {'  '}****{lastCardDigits}
                </Text>
                <Text className='text-rf-gray-600'>Expires: {expires}</Text>
              </View>
              <View className='justify-center items-center'>
                {isPrimary && (
                  <Text className='self-start bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm'>
                    Default
                  </Text>
                )}
              </View>
              <View className='flex justify-center items-center'>
                <Text className='text-rf-gray-600'>
                  <FontAwesome6 name='ellipsis' size={24} />
                </Text>
              </View>
            </View>
          ),
        )}

        <View className='h-px bg-border_gray my-6' />

        <Pressable className='bg-rf-gray-800 flex-row gap-4 w-full py-2 rounded-lg justify-center items-center'>
          <Text className='text-rf-gray-100 text-lg'>Save changes</Text>
        </Pressable>
      </View>
    </ScrollView>
  )
}
