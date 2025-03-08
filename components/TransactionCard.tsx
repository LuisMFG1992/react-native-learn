import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { formatDate } from '@/utils/dateUtils'
import { formatCurrency } from '@/utils/formatCurrency'

const TransactionCard = ({ transaction }: any) => {
  const {
    id,
    address,
    clientName,
    category,
    psaType,
    amount,
    closeDate,
    TransactionTasks,
  } = transaction

  const stringId = String(id)

  return (
    <Link href={`/transactions/details/${id}`} asChild>
      {/* // <Link
    //   href={{
    //     pathname: '/transactions/details/[id]',
    //     params: { id: String(id) },
    //   }}
    //   asChild
    // >
    //    <Link
    //   href={{
    //     pathname: '/transactions/details/[id]',
    //     params: { id: id },
    //   }}
    //   asChild
    // >  */}
      <Pressable className='border border-border_gray rounded-xl overflow-hidden w-full'>
        {/* Header */}
        <View className='bg-rf-gray-100 p-4'>
          <View className='flex-row gap-4'>
            {/* Left */}
            <View className='flex-1'>
              <View>
                <Text
                  className='text-rf-gray-900 text-md font-semibold truncate'
                  numberOfLines={1}
                >
                  {address}
                </Text>
              </View>
              <View>
                <Text
                  className='text-xs font-semibold text-gray-600'
                  numberOfLines={1}
                >
                  {clientName}
                </Text>
              </View>
              <View>
                <Text
                  className='text-xs font-semibold text-gray-600'
                  numberOfLines={1}
                >
                  {`${formatCurrency(amount)}`}
                </Text>
              </View>
            </View>
            {/* Right */}
            <View className=''>
              {/* tasks */}
              <View>
                <View className='flex-row justify-end'>
                  <Text className='text-gray-600 text-xs font-semibold'>
                    Tasks: {TransactionTasks.totalCompletedTask} /{' '}
                    {TransactionTasks.totalTask}
                  </Text>
                </View>
              </View>
              {/* closing */}
              <View>
                <Text className='text-gray-600 text-xs font-semibold'>{`Closing: ${formatDate(
                  closeDate?.toString() || '',
                )}`}</Text>
                {/* <Text className='text-gray-600'>28 days left</Text> */}
              </View>
            </View>
          </View>
          {/* Tags */}
          <View className='flex-row gap-1 pt-1'>
            <View className='self-start bg-rf-gray-800 px-2 py-1 rounded-full'>
              <Text className='text-xs font-semibold text-rf-gray-100'>
                {category}
              </Text>
            </View>
            <View className='self-start bg-rf-gray-800 px-2 py-1 rounded-full'>
              <Text className='text-xs font-semibold text-rf-gray-100'>
                {psaType}
              </Text>
            </View>
          </View>
        </View>
      </Pressable>
    </Link>
  )
}

export default TransactionCard
