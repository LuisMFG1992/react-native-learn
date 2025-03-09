import { useRouter, usePathname } from 'expo-router'
import { View, Pressable, Text } from 'react-native'

const steps = [
  '/transactions/new/type',
  '/transactions/new/upload',
  '/transactions/new/form',
  '/transactions/new/dates-completion',
] as const

export default function StepNavigator({
  isNextEnabled,
}: {
  isNextEnabled: boolean
}) {
  const router = useRouter()
  const pathname = usePathname()

  const currentIndex = steps.indexOf(pathname as (typeof steps)[number])
  const nextStep =
    currentIndex < steps.length - 1 ? steps[currentIndex + 1] : null
  const prevStep = currentIndex > 0 ? steps[currentIndex - 1] : null

  return (
    <View className='flex-row justify-between mt-4'>
      {/* Botón Back */}
      {prevStep && (
        <Pressable
          className='px-4 py-2 bg-gray-300 rounded'
          onPress={() => router.push(prevStep)}
        >
          <Text className='text-black'>Back</Text>
        </Pressable>
      )}

      {/* Botón Next o Finish */}
      {nextStep ?
        <Pressable
          className={`px-4 py-2 rounded ${isNextEnabled ? 'bg-blue-500' : 'bg-gray-400'}`}
          onPress={() => isNextEnabled && router.push(nextStep)}
          disabled={!isNextEnabled}
        >
          <Text className='text-white'>Next</Text>
        </Pressable>
      : <Pressable
          className={`px-4 py-2 rounded ${isNextEnabled ? 'bg-green-500' : 'bg-gray-400'}`}
          onPress={() => isNextEnabled && router.replace('/')}
          disabled={!isNextEnabled}
        >
          <Text className='text-white'>Finish</Text>
        </Pressable>
      }
    </View>
  )
}
