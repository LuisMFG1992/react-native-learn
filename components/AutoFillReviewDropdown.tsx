import { useState } from 'react'
import { View, Text, Pressable, Animated } from 'react-native'
import { ChevronDown } from 'lucide-react-native'

export type AutoFillReviewDropdownProps = {
  title: string
  children: React.ReactNode
  isCompletedEnabled: boolean
  onComplete: () => void // ✅ Nueva prop para actualizar el estado desde el padre
}

const AutoFillReviewDropdown = ({
  title,
  children,
  isCompletedEnabled,
  onComplete,
}: AutoFillReviewDropdownProps) => {
  const [isOpen, setIsOpen] = useState(true)
  const [isCompleted, setIsCompleted] = useState(false)
  const animation = useState(new Animated.Value(isOpen ? 1 : 0))[0]

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
    Animated.timing(animation, {
      toValue: isOpen ? 0 : 1,
      duration: 200,
      useNativeDriver: false,
    }).start()
  }

  const handleComplete = () => {
    setIsCompleted(true)
    onComplete() // ✅ Llamamos a la función del padre para actualizar el estado
  }

  return (
    <View className='w-full border border-gray-300 rounded-xl'>
      {/* Título */}
      <Pressable
        onPress={toggleDropdown}
        className={`flex-row justify-between items-center w-full p-4 bg-rf-gray-200 border-b border-gray-300 ${
          isOpen ? 'rounded-t-xl' : 'rounded-xl'
        }`}
      >
        <Text className='text-xl font-medium text-gray-700'>{title}</Text>
        <View className='flex-row gap-2 items-center'>
          {isCompleted ?
            <Text className='text-xs font-medium bg-green-100 px-3 py-1 rounded-full text-green-700'>
              COMPLETE
            </Text>
          : <Text className='text-xs font-medium bg-red-100 px-3 py-1 rounded-full text-red-700'>
              NEEDS REVIEW
            </Text>
          }
          <Animated.View
            style={{
              transform: [
                {
                  rotate: animation.interpolate({
                    inputRange: [0, 1],
                    outputRange: ['0deg', '180deg'],
                  }),
                },
              ],
            }}
          >
            <ChevronDown size={24} color='black' />
          </Animated.View>
        </View>
      </Pressable>

      {/* Contenido colapsable */}
      <Animated.View
        style={{
          maxHeight: animation.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 200],
          }),
          overflow: 'hidden',
        }}
        className='bg-rf-gray-100  rounded-b-xl gap-4'
      >
        <View className='px-4 pt-4 flex items-center justify-center gap-8'>
          {children}
        </View>

        <View>
          {/* Separador */}
          <View className='bg-gray-300 h-[1px] w-full' />

          {/* Botón */}
          <View className='flex justify-end p-2'>
            <Pressable
              onPress={() => {
                toggleDropdown()
                handleComplete()
              }}
              className='px-4 py-2 bg-rf-gray-800 rounded-xl self-end'
              disabled={!isCompletedEnabled}
            >
              <Text className='text-rf-gray-100'>Looks good 👍</Text>
            </Pressable>
          </View>
        </View>
      </Animated.View>
    </View>
  )
}

export default AutoFillReviewDropdown
