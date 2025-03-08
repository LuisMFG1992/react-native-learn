import { useState } from 'react'
import { View, Text, Pressable } from 'react-native'

type Tab = {
  id: string
  label: string
}

type TabAppProps = {
  tabs?: Tab[]
}

const defaultTabs: Tab[] = [
  { id: '1', label: 'Link 1' },
  { id: '2', label: 'Link 2' },
  { id: '3', label: 'Link 3' },
]

export default function TabApp({ tabs = defaultTabs }: TabAppProps) {
  const [activeTab, setActiveTab] = useState(defaultTabs[0].id)

  return (
    <View className='border-b border-gray-200'>
      <View className='flex-row relative'>
        {tabs.map((tab) => (
          <Pressable
            key={tab.id}
            className='flex-1 items-center pb-2 relative'
            onPress={() => setActiveTab(tab.id)}
          >
            <Text
              className={`text-sm font-semibold ${
                activeTab === tab.id ? 'text-black' : 'text-gray-500'
              }`}
            >
              {tab.label}
            </Text>

            {activeTab === tab.id && (
              <View className='absolute bottom-[-2px] h-[2px] w-full bg-black rounded-full' />
            )}
          </Pressable>
        ))}
      </View>
    </View>
  )
}
