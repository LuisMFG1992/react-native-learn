import { View, Text, ScrollView, Pressable } from 'react-native'

export default function SubscriptionPage() {
  return (
    <ScrollView className='flex-1 '>
      <View className='w-full gap-6 px-2 py-4'>
        <Text className='text-xl font-semibold'>Plan</Text>
        <Text className='text-lg text-rf-gray-600'>
          Manage your subscription and choose the plan that works for you.
        </Text>

        <View className='h-px bg-border_gray my-6' />

        <Pressable className='bg-rf-gray-800 flex-row gap-4 w-full py-2 rounded-lg justify-center items-center'>
          <Text className='text-rf-gray-100 text-lg'>Save changes</Text>
        </Pressable>
      </View>
    </ScrollView>
  )
}
