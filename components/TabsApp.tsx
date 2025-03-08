import { View, Text, Pressable } from 'react-native'
import { Link, usePathname } from 'expo-router'

type Tab = {
  id: string
  label: string
  href: string
}

type TabAppProps = {
  tabs?: Tab[]
}

export default function TabApp({ tabs }: TabAppProps) {
  const pathname = usePathname()

  return (
    <View className='border-b border-gray-200 '>
      <View className='flex-row relative'>
        {tabs.map((tab) => {
          const isActive = pathname === tab.href

          return (
            <Link key={tab.id} href={tab.href} asChild>
              <Pressable className='flex-1 items-center pb-2 relative'>
                <Text
                  className={`text-sm font-semibold ${
                    isActive ? 'text-black' : 'text-gray-500'
                  }`}
                >
                  {tab.label}
                </Text>

                {isActive && (
                  <View className='absolute bottom-[-2px] h-[2px] w-full bg-black rounded-full' />
                )}
              </Pressable>
            </Link>
          )
        })}
      </View>
    </View>
  )
}
