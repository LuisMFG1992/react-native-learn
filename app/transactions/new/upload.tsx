import * as DocumentPicker from 'expo-document-picker'
import { useState } from 'react'
import { View, Text, Pressable, Image, ActivityIndicator } from 'react-native'
import { useRouter } from 'expo-router'

const listingIcon = require('../../../assets/images/fileUpload.png')

const NewTransactionUpload = () => {
  const [selectedFile, setSelectedFile] = useState<string | null>(null)
  const [isAnalyzing, setIsAnalyzing] = useState<boolean>(false)
  const router = useRouter()

  const pickDocument = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: '*/*',
        copyToCacheDirectory: false,
      })

      if (!result.canceled) {
        setSelectedFile(result.assets[0].name)
        setIsAnalyzing(true)

        await fakeUploadFile(result.assets[0])

        router.push('/transactions/new/form')
      }
    } catch (error) {
      console.error('Error selecting the file:', error)
      setIsAnalyzing(false)
    }
  }

  const fakeUploadFile = async (file: any): Promise<void> => {
    console.log('Uploading file...', file.name)

    await new Promise((resolve) => setTimeout(resolve, 1000))

    console.log('Analysis completed.')
  }

  return isAnalyzing ?
      <View className='flex-1 justify-center items-center bg-rf-gray-300 p-8 gap-4'>
        <Text className='text-xl text-rf-gray-800 font-medium text-center'>
          We’re going over all the details of your PSA
        </Text>
        <Text className='text-lg text-rf-gray-600 text-center'>
          Hang tight, this can take up to 60 seconds
        </Text>
        <ActivityIndicator size='large' color='#ED9B66' />
      </View>
    : <View className='flex-1 bg-rf-gray-300 p-8'>
        <View className='flex-1 justify-center items-center gap-10'>
          <View className='gap-1'>
            <Text className='text-xl text-rf-gray-800 font-medium text-center'>
              Upload your PSA here
            </Text>
            <Text className='text-xl text-rf-gray-800 font-medium text-center'>
              We’ll take care of the rest
            </Text>
          </View>

          <View className='w-full gap-4'>
            <Pressable
              className='bg-rf-gray-100 w-full border-2 border-dashed border-border_gray rounded-xl justify-center items-center h-60'
              onPress={pickDocument}
            >
              <Image
                source={listingIcon}
                className='size-28'
                resizeMode='contain'
              />
              <Text className='text-xl text-rf-gray-800 font-medium'>
                {selectedFile ? selectedFile : 'Upload your PSA here'}
              </Text>
              <Text className='text-lg text-rf-gray-600'>
                Maximum size: 500MB
              </Text>
            </Pressable>

            <View className='flex-row items-center w-full gap-2'>
              <View className='flex-1 h-[1px] bg-rf-gray-600' />
              <Text className='text-rf-gray-600'>or</Text>
              <View className='flex-1 h-[1px] bg-rf-gray-600' />
            </View>
          </View>

          <Pressable className='flex-row items-center'>
            <Text className='text-rf-gray-600'>
              Manually enter the transaction information
            </Text>
          </Pressable>
        </View>
      </View>
}

export default NewTransactionUpload
