import {
  View,
  Text,
  Pressable,
  StatusBar,
  StyleSheet,
  TextInput,
  ScrollView,
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
    id: 1,
    amount: 725000,
    description:
      'Residential Purchase and Sale Agreement for 76141 NE 122nd Street, Skykomish, WA 98288',
    date: '2025-02-28T19:49:24.771Z',
    clientId: 21,
    address: '76141 NE 122nd Street',
    agentEmail: null,
    agentName: 'Gavin Johnson',
    agentPaid: null,
    agentPhone: null,
    brokerMintEmail: null,
    buyerComm: '2.5',
    cityState: 'Skykomish, WA',
    closeDate: '2024-12-17T23:00:00.000Z',
    closingCosts: null,
    earnestMoney: 10000,
    escrowAddress: null,
    escrowOfficer: null,
    extension: 'not found / not applicable',
    fb: null,
    ig: null,
    itemsThatStay:
      'stove(s)/range(s); refrigerator(s); washer(s); dryer(s); dishwasher(s); microwave(s); fireplace insert(s); wood stove(s); hot tub; Furnishings, equipment, and home goods to remain and have no value',
    lender: null,
    listSalePercent: null,
    listingComm: null,
    listingPrice: null,
    nwmlsNumber: '2298700',
    parcelNumber: '8649400150',
    pendDate: '2024-11-08T23:00:00.000Z',
    referral: null,
    statusChangedNWMLS: null,
    titleCo: 'Chicago Title',
    titleNumber: null,
    titleOfficer: 'Kari Hoischer, Sydney Rhodes',
    clientName: 'Luis Miguel Flores Granadillo',
    category: 'PSA',
    listingType: null,
    psaType: 'Condominium',
    clientPhone: '(062) 523-8282',
    clientEmail: 'luismiguelfloresgr@gmail.com',
    age: '2025-02-28T19:49:24.771Z',
    userId: 1,
    TransactionTasks: {
      totalTask: 22,
      totalCompletedTask: 4,
    },
  },
  {
    id: 2,
    amount: 615000,
    description:
      'Residential Purchase Agreement for 456 Elm St, Seattle, WA 98101',
    date: '2025-03-10T15:30:00.000Z',
    clientId: 30,
    address: '456 Elm St',
    agentEmail: 'carlos@example.com',
    agentName: 'Carlos Gonzalez',
    agentPaid: 12000,
    agentPhone: '(555) 678-9012',
    brokerMintEmail: null,
    buyerComm: '3.0',
    cityState: 'Seattle, WA',
    closeDate: '2025-01-05T20:00:00.000Z',
    closingCosts: 12000,
    earnestMoney: 15000,
    escrowAddress: 'Seattle Escrow Services',
    escrowOfficer: 'Jessica Taylor',
    extension: 'Approved for 15 days',
    fb: null,
    ig: null,
    itemsThatStay: 'Refrigerator, washer, dryer, microwave, dishwasher',
    lender: 'Bank of America',
    listSalePercent: '98%',
    listingComm: '2.8%',
    listingPrice: 625000,
    nwmlsNumber: '1234567',
    parcelNumber: '789654321',
    pendDate: '2024-12-15T12:00:00.000Z',
    referral: null,
    statusChangedNWMLS: 'Pending',
    titleCo: 'Fidelity National Title',
    titleNumber: 'ABC-12345',
    titleOfficer: 'Rachel Adams',
    clientName: 'John Smith',
    category: 'Listing',
    listingType: null,
    psaType: 'Residential',
    clientPhone: '(555) 123-4567',
    clientEmail: 'john.smith@email.com',
    age: '2025-03-10T15:30:00.000Z',
    userId: 2,
    TransactionTasks: {
      totalTask: 18,
      totalCompletedTask: 7,
    },
  },
  {
    id: 3,
    amount: 835000,
    description:
      'Residential Sale Agreement for 789 Maple Ave, Bellevue, WA 98004',
    date: '2025-03-15T12:45:00.000Z',
    clientId: 45,
    address: '789 Maple Ave',
    agentEmail: 'susan.realtor@example.com',
    agentName: 'Susan Rodriguez',
    agentPaid: 15000,
    agentPhone: '(555) 987-6543',
    brokerMintEmail: null,
    buyerComm: '2.7',
    cityState: 'Bellevue, WA',
    closeDate: '2025-02-01T18:30:00.000Z',
    closingCosts: 13500,
    earnestMoney: 20000,
    escrowAddress: 'Northwest Escrow Services',
    escrowOfficer: 'Mark Johnson',
    extension: 'No extensions requested',
    fb: null,
    ig: null,
    itemsThatStay:
      'Washer, dryer, stove, refrigerator, smart home system included',
    lender: 'Chase Bank',
    listSalePercent: '99%',
    listingComm: '2.5%',
    listingPrice: 850000,
    nwmlsNumber: '7654321',
    parcelNumber: '321987654',
    pendDate: '2025-01-10T16:00:00.000Z',
    referral: null,
    statusChangedNWMLS: 'Closed',
    titleCo: 'First American Title',
    titleNumber: 'XYZ-98765',
    titleOfficer: 'David Green',
    clientName: 'Emily Davis',
    category: 'PSA',
    listingType: null,
    psaType: 'Vacant Land',
    clientPhone: '(555) 246-8100',
    clientEmail: 'emily.davis@email.com',
    age: '2025-03-15T12:45:00.000Z',
    userId: 3,
    TransactionTasks: {
      totalTask: 20,
      totalCompletedTask: 10,
    },
  },
  {
    id: 4,
    amount: 835000,
    description:
      'Residential Sale Agreement for 789 Maple Ave, Bellevue, WA 98004',
    date: '2025-03-15T12:45:00.000Z',
    clientId: 45,
    address: '789 Maple Ave',
    agentEmail: 'susan.realtor@example.com',
    agentName: 'Susan Rodriguez',
    agentPaid: 15000,
    agentPhone: '(555) 987-6543',
    brokerMintEmail: null,
    buyerComm: '2.7',
    cityState: 'Bellevue, WA',
    closeDate: '2025-02-01T18:30:00.000Z',
    closingCosts: 13500,
    earnestMoney: 20000,
    escrowAddress: 'Northwest Escrow Services',
    escrowOfficer: 'Mark Johnson',
    extension: 'No extensions requested',
    fb: null,
    ig: null,
    itemsThatStay:
      'Washer, dryer, stove, refrigerator, smart home system included',
    lender: 'Chase Bank',
    listSalePercent: '99%',
    listingComm: '2.5%',
    listingPrice: 850000,
    nwmlsNumber: '7654321',
    parcelNumber: '321987654',
    pendDate: '2025-01-10T16:00:00.000Z',
    referral: null,
    statusChangedNWMLS: 'Closed',
    titleCo: 'First American Title',
    titleNumber: 'XYZ-98765',
    titleOfficer: 'David Green',
    clientName: 'Emily Davis',
    category: 'PSA',
    listingType: null,
    psaType: 'Condominium',
    clientPhone: '(555) 246-8100',
    clientEmail: 'emily.davis@email.com',
    age: '2025-03-15T12:45:00.000Z',
    userId: 3,
    TransactionTasks: {
      totalTask: 20,
      totalCompletedTask: 10,
    },
  },
  {
    id: 5,
    amount: 835000,
    description:
      'Residential Sale Agreement for 789 Maple Ave, Bellevue, WA 98004',
    date: '2025-03-15T12:45:00.000Z',
    clientId: 45,
    address: '789 Maple Ave',
    agentEmail: 'susan.realtor@example.com',
    agentName: 'Susan Rodriguez',
    agentPaid: 15000,
    agentPhone: '(555) 987-6543',
    brokerMintEmail: null,
    buyerComm: '2.7',
    cityState: 'Bellevue, WA',
    closeDate: '2025-02-01T18:30:00.000Z',
    closingCosts: 13500,
    earnestMoney: 20000,
    escrowAddress: 'Northwest Escrow Services',
    escrowOfficer: 'Mark Johnson',
    extension: 'No extensions requested',
    fb: null,
    ig: null,
    itemsThatStay:
      'Washer, dryer, stove, refrigerator, smart home system included',
    lender: 'Chase Bank',
    listSalePercent: '99%',
    listingComm: '2.5%',
    listingPrice: 850000,
    nwmlsNumber: '7654321',
    parcelNumber: '321987654',
    pendDate: '2025-01-10T16:00:00.000Z',
    referral: null,
    statusChangedNWMLS: 'Closed',
    titleCo: 'First American Title',
    titleNumber: 'XYZ-98765',
    titleOfficer: 'David Green',
    clientName: 'Emily Davis',
    category: 'PSA',
    listingType: null,
    psaType: 'Condominium',
    clientPhone: '(555) 246-8100',
    clientEmail: 'emily.davis@email.com',
    age: '2025-03-15T12:45:00.000Z',
    userId: 3,
    TransactionTasks: {
      totalTask: 20,
      totalCompletedTask: 10,
    },
  },
]

export default function HomeScreen() {
  return (
    <ScrollView>
      <View className='relative flex-1 justify-start items-center gap-4 bg-rf-gray-300 px-4 pb-4'>
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
            <Link href='/transactions/new/type' asChild>
              <Pressable className='bg-rf-gray-800 flex-row gap-4 w-full py-1 rounded-lg justify-center items-center'>
                <Plus color={twColors.rf_gray_100} />
                <Text className='text-rf-gray-100 text-lg'>
                  Add transaction
                </Text>
              </Pressable>
            </Link>
            {/* control buttons */}
            <View className=' w-full flex-col gap-4'>
              {/* Sort and filter buttons */}

              <View className='flex-row gap-4'>
                <Pressable className='flex-1 py-1 flex-row justify-center gap-2 items-center bg-rf-gray-100 border border-gray-300 rounded-xl'>
                  <ArrowUpDown color={twColors.rf_gray_600} />
                  <Text className='text-rf-gray-600 text-lg'>Sort</Text>
                </Pressable>
                <Pressable className='flex-1 py-1 flex-row justify-center gap-2 items-center bg-rf-gray-100 border border-gray-300 rounded-xl'>
                  <Filter color={twColors.rf_gray_600} />
                  <Text className='text-rf-gray-600 text-lg'>Filter</Text>
                </Pressable>
              </View>
              {/* Search bar */}
              <View className='flex-row items-center bg-rf-gray-100 border border-gray-300 rounded-xl px-4 shadow-sm h-14'>
                <Search
                  size={20}
                  color={twColors.rf_gray_600}
                  className='mr-2'
                />
                <TextInput
                  placeholder='Search'
                  placeholderTextColor={twColors.rf_gray_600}
                  className='flex-1 text-gray-700 text-base'
                />
              </View>
            </View>
            <View className='flex-row flex-wrap justify-start items-center gap-4'>
              {/* Card */}
              {TRANSACTIONS.map((transaction) => (
                <TransactionCard
                  transaction={transaction}
                  key={transaction.id}
                />
              ))}
            </View>
          </View>
        }
        <StatusBar
          backgroundColor={twColors.rf_gray_300}
          barStyle={'dark-content'}
        />
      </View>
    </ScrollView>
  )
}
