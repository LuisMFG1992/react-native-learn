import { View, Text } from 'react-native'
import React from 'react'

const TransactionCard = () => {
  return (
    <View className='border border-border_gray rounded-xl overflow-hidden'>
      {/* Header */}
      <View className='bg-red-100 p-5'>
        <View>
          <Text className='text-rf-gray-900 text-lg'>123 Main St</Text>
        </View>
        <View>
          <Text className='text-xs font-semibold text-gray-600'>
            AISHA PATEL
          </Text>
        </View>
        <View>
          <Text className='text-xs font-semibold text-gray-600'>
            $625,500.00
          </Text>
        </View>
        {/* Tags */}
        <View className='flex gap-1 pt-1'>
          <View className='self-start bg-rf-gray-100 px-2 py-1 rounded-full'>
            <Text className='text-xs font-semibold text-gray-600'>PSA</Text>
          </View>
          <View className='self-start bg-rf-gray-100 px-2 py-1 rounded-full'>
            <Text className='text-xs font-semibold text-gray-600'>
              Condominium
            </Text>
          </View>
        </View>
      </View>
      {/* tasks */}
      <View className='bg-rf-gray-100 px-5 py-1 border-t border-border_gray'>
        <Text className='text-gray-600'>Tasks completed</Text>
        <Text className='text-gray-600'>14 of 24</Text>
      </View>
      {/* closing */}
      <View className='bg-rf-gray-100 px-5 py-1 border-t border-border_gray'>
        <Text className='text-gray-600'>Closing: 11 Mar</Text>
        <Text className='text-gray-600'>28 days left</Text>
      </View>
    </View>
  )
}

export default TransactionCard
