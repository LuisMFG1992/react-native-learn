import {
  View,
  Text,
  Pressable,
  StatusBar,
  StyleSheet,
  TextInput,
} from 'react-native'
import { Link } from 'expo-router'
import Greeting from '@/components/Greeting'
import {
  ArrowUpDown,
  Bell,
  Camera,
  Filter,
  Plus,
  Search,
} from 'lucide-react-native'
import DashboardNoTransactions from '@/components/DashboardNoTransactions'
import { twColors } from '@/constants/TwColors'
import TransactionCard from '@/components/TransactionCard'

const TRANSACTIONS = [
  {
    address: '12345 Main Street',
    clientName: 'John Doe',
    category: 'PSA',
    psaType: 'RESIDENTIAL',
    amount: 550000,
    closeDate: '2024-10-05T15:30:00.000Z',
  },
  {
    address: '67890 Sunset Blvd',
    clientName: 'Jane Smith',
    category: 'PSA',
    psaType: 'RESIDENTIAL',
    amount: 875000,
    closeDate: '2025-01-20T18:45:00.000Z',
  },
  {
    address: '456 Elm Avenue',
    clientName: 'Michael Johnson',
    category: 'PSA',
    psaType: 'RESIDENTIAL',
    amount: 720000,
    closeDate: '2024-12-15T12:00:00.000Z',
  },
]

export default function HomeScreen() {
  return (
    <View className='relative flex-1 justify-start items-center gap-4 bg-rf-gray-300 px-4'>
      <View className='absolute top-5 right-5'>
        <Link href={'/actionItems'} asChild>
          <Bell color='#2B2927' size={30} />
        </Link>
      </View>
      <Greeting />
      {TRANSACTIONS.length === 0 ?
        <DashboardNoTransactions />
      : <View className=' w-full flex-1 items-center gap-4'>
          {/* Add transaction button */}
          <Link href='/transactions/type' asChild>
            <Pressable className='bg-rf-gray-800 flex-row gap-4 w-full py-2 rounded-lg justify-center items-center'>
              <Plus color={twColors.rf_gray_100} />
              <Text className='text-rf-gray-100 text-lg'>Add transaction</Text>
            </Pressable>
          </Link>
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
          <View className='flex-row flex-wrap justify-center items-center gap-4'>
            {/* Card */}
            <TransactionCard />
            <TransactionCard />
          </View>
        </View>
      }
      <StatusBar
        backgroundColor={twColors.rf_gray_300}
        barStyle={'dark-content'}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: twColors.rf_gray_800,
    width: '100%',
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    marginTop: 20,
  },
  buttonText: {
    color: twColors.rf_gray_100,
    marginLeft: 8,
    fontSize: 16,
    fontWeight: '500',
  },
})
