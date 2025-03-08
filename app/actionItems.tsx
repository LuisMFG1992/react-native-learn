import { twColors } from '@/constants/TwColors'
import { ArrowUpDown, Filter, Search } from 'lucide-react-native'
import { View, Text, Pressable, TextInput } from 'react-native'

const TASKS = [
  {
    id: 1,
    task: 'Financing Add',
    address: '123 Main St',
    status: 'Past due',
  },
  {
    id: 2,
    task: 'Evidence of Funds',
    address: '456 Elm St',
    status: 'Past due',
  },
  {
    id: 3,
    task: 'Title Contingency Add',
    address: '789 Maple Ave',
    status: 'Coming up',
  },
]

const actionItems = () => {
  return (
    <View className='flex-1 items-center bg-rf-gray-300 px-4 pt-4 gap-4'>
      {/* control buttons */}
      <View className='flex flex-col gap-4'>
        {/* Sort and filter buttons */}
        <View className='flex-row gap-4'>
          <Pressable className='w-[47.5%] py-2 flex-row justify-center gap-2 items-center bg-rf-gray-100 border border-gray-300 rounded-xl'>
            <ArrowUpDown color={twColors.rf_gray_600} />
            <Text className='text-rf-gray-600 text-lg'>Sort</Text>
          </Pressable>
          <Pressable className='w-[47.5%] py-2 flex-row justify-center gap-2 items-center bg-rf-gray-100 border border-gray-300 rounded-xl'>
            <Filter color={twColors.rf_gray_600} />
            <Text className='text-rf-gray-600 text-lg'>Filter</Text>
          </Pressable>
        </View>
        {/* Search bar */}
        <View className='flex-row items-center bg-rf-gray-100 border border-gray-300 rounded-xl px-4 shadow-sm'>
          <Search size={20} color={twColors.rf_gray_600} className='mr-2' />
          <TextInput
            placeholder='Search'
            placeholderTextColor={twColors.rf_gray_600}
            className='flex-1 text-gray-700 text-base'
          />
        </View>
      </View>
      {/* list */}
      <View className='bg-rf-gray-100 w-full border border-border_gray rounded-xl'>
        {/* Item */}
        {TASKS.map(({ id, task, address, status }) => (
          <View className='flex-row justify-between p-4' key={id}>
            <View>
              <Text>{task}.</Text>
              <Text className='text-rf-gray-600'>{address}</Text>
            </View>
            <View className='flex justify-center'>
              <View
                className={`py-2 px-4 rounded-full ${status === 'Past due' ? 'bg-red-100 ' : 'bg-yellow-100 '}`}
              >
                <Text
                  className={`${status === 'Past due' ? 'text-red-900 ' : 'text-yellow-900 '}`}
                >
                  {status}
                </Text>
              </View>
            </View>
          </View>
        ))}
      </View>
    </View>
  )
}

export default actionItems
