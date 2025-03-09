import { useState } from 'react'
import { View, Text, Pressable, ScrollView } from 'react-native'
import { Check, ChevronsUpDown } from 'lucide-react-native'
import Ionicons from '@expo/vector-icons/Ionicons'

type MethodType = 'Email' | 'SMS'

interface DeliveryMethod {
  title: string
  description: string
  methods: MethodType[]
}

interface FrequencyOption {
  id: string
  title: string
  description: string
  checked: boolean
}

const METHOD_OPTIONS: MethodType[] = ['Email', 'SMS']

export default function Settings() {
  const [deliveryMethod, setDeliveryMethod] = useState<DeliveryMethod[]>([
    {
      title: 'Transaction Status Updates',
      description: 'Transaction progress, key milestones, and status changes.',
      methods: ['Email', 'SMS'],
    },
    {
      title: 'Task and Deadline Reminders',
      description: 'Task updates, upcoming deadlines, and overdue alerts.',
      methods: ['Email', 'SMS'],
    },
    {
      title: 'Performance & Insights',
      description: 'Summaries of progress, tasks, and productivity.',
      methods: ['Email'],
    },
    {
      title: 'Account Notifications',
      description: 'Account changes, security alerts, and platform updates.',
      methods: ['Email'],
    },
  ])

  const [frequency, setFrequency] = useState<FrequencyOption[]>([
    {
      id: 'realTime',
      title: 'Real-time',
      description: 'Get notifications as they happen.',
      checked: true,
    },
    {
      id: 'dailyDigest',
      title: 'Daily Digest',
      description: 'Receive a daily summary every morning.',
      checked: true,
    },
    {
      id: 'weeklyDigest',
      title: 'Weekly Digest',
      description: 'Receive a weekly overview every Monday morning.',
      checked: true,
    },
  ])

  const toggleMethod = (index: number, method: MethodType) => {
    setDeliveryMethod((prev) =>
      prev.map((item, idx) =>
        idx === index ?
          {
            ...item,
            methods:
              item.methods.includes(method) ?
                item.methods.filter((m) => m !== method)
              : [...item.methods, method],
          }
        : item,
      ),
    )
  }

  const toggleFrequency = (id: string) => {
    setFrequency((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item,
      ),
    )
  }

  return (
    <ScrollView className='flex-1 '>
      <View className='w-full gap-6 px-2 py-4'>
        <Text className='text-xl font-semibold'>Notifications</Text>
        <Text className='text-lg text-rf-gray-600'>
          Manage your notification preferences for transaction updates,
          reminders, and account alerts.
        </Text>

        {/* DELIVERY METHOD */}
        <View className='space-y-2 w-full'>
          <Text className='text-md text-rf-gray-800 pb-2'>Delivery method</Text>
          <View className='rounded-lg border border-gray-300 w-full'>
            {deliveryMethod.map(({ title, description, methods }, idx) => (
              <View
                key={title}
                className={`bg-rf-gray-100 px-5 py-4 justify-between border-b border-border_gray ${
                  idx === 0 ? 'rounded-t-lg' : ''
                } ${idx === deliveryMethod.length - 1 ? 'border-none rounded-b-lg' : ''}`}
              >
                <View className='flex-1'>
                  <Text className='text-rf-gray-800 font-medium'>{title}</Text>
                  <Text className='text-rf-gray-600'>{description}</Text>
                </View>
                <View className='self-end'>
                  <DeliveryMethodDropdown
                    selectedMethods={methods}
                    onToggle={(method) => toggleMethod(idx, method)}
                  />
                </View>
              </View>
            ))}
          </View>
        </View>

        {/* FREQUENCY */}
        <View className='space-y-2 w-full'>
          <Text className='text-md text-rf-gray-800 pb-2'>Frequency</Text>
          <View className='rounded-lg border border-gray-300 w-full'>
            {frequency.map(({ id, title, description, checked }, idx) => (
              <View
                key={id}
                className={`bg-rf-gray-100 px-5 py-4 justify-between border-b border-border_gray flex-row ${
                  idx === 0 ? 'rounded-t-lg' : ''
                } ${idx === frequency.length - 1 ? 'border-none rounded-b-lg' : ''}`}
              >
                <View className='flex-1'>
                  <Text className='text-rf-gray-800 font-medium'>{title}</Text>
                  <Text className='text-rf-gray-600'>{description}</Text>
                </View>
                <View className='flex justify-center items-center'>
                  <CustomCheckbox
                    checked={checked}
                    onToggle={() => toggleFrequency(id)}
                  />
                </View>
              </View>
            ))}
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const CustomCheckbox = ({
  checked,
  onToggle,
}: {
  checked: boolean
  onToggle: () => void
}) => (
  <Pressable
    onPress={onToggle}
    className={`w-6 h-6 border rounded-md flex items-center justify-center ${
      checked ? 'bg-black border-black' : 'bg-white border-gray-400'
    }`}
  >
    {checked && <Check color='white' size={16} />}
  </Pressable>
)

const DeliveryMethodDropdown = ({
  selectedMethods,
  onToggle,
}: {
  selectedMethods: MethodType[]
  onToggle: (method: MethodType) => void
}) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <View className='relative'>
      <Pressable
        onPress={() => setIsOpen(!isOpen)}
        className='flex-row items-center gap-1'
      >
        <Text className='text-rf-gray-600'>
          {selectedMethods.length === 0 ? 'Off' : selectedMethods.join(', ')}
        </Text>
        <Text className='text-rf-gray-600'>
          <Ionicons name='chevron-expand-outline' size={15} />
        </Text>
      </Pressable>

      {isOpen && (
        <View className='absolute bg-white border border-gray-300 rounded-md p-2 top-full right-0 min-w-32 shadow-md z-50'>
          {METHOD_OPTIONS.map((method) => (
            <Pressable
              key={method}
              onPress={() => onToggle(method)}
              className='flex-row items-center gap-2 px-3 py-1 rounded-md'
            >
              <CustomCheckbox
                checked={selectedMethods.includes(method)}
                onToggle={() => onToggle(method)}
              />
              <Text className='text-rf-gray-600'>{method}</Text>
            </Pressable>
          ))}
        </View>
      )}
    </View>
  )
}
