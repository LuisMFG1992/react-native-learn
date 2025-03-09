import {
  ScrollView,
  View,
  Text,
  TextInput,
  Image,
  Pressable,
  Button,
} from 'react-native'
import Feather from '@expo/vector-icons/Feather'

import { useState } from 'react'
import { Eclipse, Ellipsis } from 'lucide-react-native'
import FontAwesome6 from '@expo/vector-icons/FontAwesome6'

export default function AccountPage() {
  const [phoneNumber, setPhoneNumber] = useState('')

  const [personalInfo, setPersonalInfo] = useState([
    {
      id: 'firstName',
      label: 'First name',
      type: 'text',
      value: 'Stephenie',
    },
    {
      id: 'lastName',
      label: 'Last name',
      type: 'text',
      value: 'Jones',
    },
    {
      id: 'nickname',
      label: 'Nickname',
      type: 'text',
      value: 'Steph',
    },
  ])
  const [emails, setEmails] = useState([
    {
      email: 'steph@withmarian.com',
      isPrimary: true,
    },
    {
      email: 'xxxxxx@xxxxxxxx.xxx',
      isPrimary: false,
    },
  ])
  const [calendars, setCalendars] = useState([
    {
      icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/800px-Google_%22G%22_logo.svg.png',
      company: 'Google',
      email: 'steph@gmail.com',
      isPrimary: true,
    },
    {
      icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/800px-Google_%22G%22_logo.svg.png',
      company: 'Google',
      email: 'steph@alpinegroup.homes',
      isPrimary: false,
    },
    {
      icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/625px-Apple_logo_black.svg.png',
      company: 'Appel',
      email: 'stephjones@icloud.com',
      isPrimary: false,
    },
  ])

  return (
    <ScrollView
      className='flex-1'
      // showsVerticalScrollIndicator={false}
      // showsHorizontalScrollIndicator={false}
    >
      <View className='p-4'>
        {/* PERSONAL INFO */}
        <View className='w-full gap-6'>
          <Text className='text-xl font-semibold'>Your Profile</Text>
          <Text className='text-lg text-rf-gray-600'>
            Choose how you would like your name to be displayed.
          </Text>

          {/* Profile Picture */}
          <View className='gap-2'>
            <Text className='text-md text-rf-gray-800'>Profile Picture</Text>
            <View className='relative'>
              <Image
                source={{
                  uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                }}
                className='w-24 h-24 bg-rf-gray-100 rounded-full border border-gray-600'
              />
              <Pressable className='absolute bottom-1 left-16 bg-gray-800 p-1 rounded-full border-2 border-gray-100'>
                <Feather name='arrow-up' size={24} color='white' />
              </Pressable>
            </View>
          </View>

          {personalInfo.map(({ id, label, type, value }) => (
            <View className='gap-2' key={id}>
              <Text className='text-md text-rf-gray-800'>{label}</Text>
              <TextInput
                className='bg-rf-gray-100 border border-gray-300 rounded-lg p-3 text-rf-gray-800'
                value={value}
              ></TextInput>
            </View>
          ))}

          <Pressable className='bg-rf-gray-800 flex-row gap-4 w-full py-2 rounded-lg justify-center items-center'>
            <Text className='text-rf-gray-100 text-lg'>Save changes</Text>
          </Pressable>
        </View>

        <View className='h-px bg-border_gray my-6' />

        {/* EMAILS */}
        <View className='w-full gap-6'>
          <Text className='text-xl font-semibold'>Email</Text>
          <Text className='text-lg text-rf-gray-600'>
            Add more email addresses to receive transaction notifications at all
            addresses listed.
          </Text>

          <View className='bg-rf-gray-100 border border-gray-300 rounded-lg text-rf-gray-800'>
            <View>
              {emails.map(({ email, isPrimary }, idx) => (
                <View
                  className={`flex-row px-5 py-3 flex items-center ${idx === 0 ? '' : 'border-t border-gray-300'}`}
                  key={email}
                >
                  <View className='flex-1 h-full relative'>
                    <View className='flex-row justify-between'>
                      <Text>steph@withmarian.com</Text>
                      <Text className='text-rf-gray-600'>
                        <FontAwesome6 name='ellipsis' size={24} />
                      </Text>
                    </View>
                    <Text className='text-md text-rf-gray-600'>
                      Add more email addresses to receive transaction
                      notifications at all addresses listed.
                    </Text>
                    {isPrimary && (
                      <Text className='self-start bg-rf-gray-300 text-rf-gray-600 px-2 py-1 rounded-full'>
                        Primary
                      </Text>
                    )}
                  </View>
                </View>
              ))}
            </View>
          </View>

          <Pressable className='bg-rf-gray-800 flex-row gap-4 w-full py-2 rounded-lg justify-center items-center'>
            <Text className='text-rf-gray-100 text-lg'>Save changes</Text>
          </Pressable>
        </View>

        <View className='h-px bg-gray-300 my-6' />

        {/* PHONE NUMBER */}
        <View className='w-full gap-6'>
          <Text className='text-xl font-semibold'>Phone Number</Text>
          <Text className='text-lg text-rf-gray-600'>
            Manage the phone number you use to sign in and receive SMS updates.
          </Text>
          <TextInput
            value={phoneNumber}
            onChangeText={setPhoneNumber}
            keyboardType='phone-pad'
            placeholder='Enter your phone number'
            className='bg-rf-gray-100 border border-gray-300 rounded-lg p-3 text-gray-800'
          />
          <Pressable className='bg-rf-gray-800 flex-row gap-4 w-full py-2 rounded-lg justify-center items-center'>
            <Text className='text-rf-gray-100 text-lg'>Save changes</Text>
          </Pressable>
        </View>

        <View className='h-px bg-gray-300 my-6' />

        {/* PASSWORD */}
        <View className='w-full gap-6'>
          <Text className='text-xl font-semibold'>Password</Text>
          <Text className='text-lg text-rf-gray-600'>
            Manage the password you use to sign into your REflow account.
          </Text>

          <View className='gap-2'>
            <Text className='text-md text-rf-gray-800'>Current password</Text>
            <TextInput
              secureTextEntry
              value=''
              placeholder='Enter current password'
              className='bg-rf-gray-100 border border-gray-300 rounded-lg p-3 text-gray-800'
            />
          </View>
          <View className='gap-2'>
            <Text className='text-md text-rf-gray-800'>New password</Text>
            <TextInput
              secureTextEntry
              value=''
              placeholder='Enter current password'
              className='bg-rf-gray-100 border border-gray-300 rounded-lg p-3 text-gray-800'
            />
          </View>
          <View className='gap-2'>
            <Text className='text-md text-rf-gray-800'>
              Retype your new password
            </Text>
            <TextInput
              secureTextEntry
              value=''
              placeholder='Enter current password'
              className='bg-rf-gray-100 border border-gray-300 rounded-lg p-3 text-gray-800'
            />
          </View>
          <Pressable className='bg-rf-gray-800 flex-row gap-4 w-full py-2 rounded-lg justify-center items-center'>
            <Text className='text-rf-gray-100 text-lg'>Save changes</Text>
          </Pressable>
        </View>

        <View className='h-px bg-gray-300 my-6' />

        {/* CALENDAR */}
        <View className='w-full gap-6'>
          <Text className='text-xl font-semibold'>Calendar Syncing</Text>
          <Text className='text-lg text-rf-gray-600'>
            Sync all of your events with your Google or Apple calendars.
          </Text>
          <Pressable className='self-start bg-rf-gray-500 gap-4 px-4 py-2 rounded-lg '>
            <View className='text-rf-gray-800 text-lg flex-row justify-center items-center gap-1'>
              <Feather name='plus' size={20} />
              <Text>Add calendar</Text>
            </View>
          </Pressable>

          {calendars.map(({ email, company, icon, isPrimary }) => (
            <View
              className='flex-row bg-rf-gray-100 border border-gray-300 rounded-lg p-3 text-gray-80 gap-3'
              key={email}
            >
              <View className='flex justify-center items-center'>
                <Image
                  source={{
                    uri: icon,
                  }}
                  className='size-8'
                  resizeMode='contain'
                />
              </View>
              <View className='flex-1 '>
                <Text className='text-lg text-rf-gray-800'>{company}</Text>
                <Text className='text-rf-gray-600'>{email}</Text>
              </View>
              <View className='flex justify-center items-center'>
                <Text className='text-rf-gray-600'>
                  <FontAwesome6 name='ellipsis' size={24} />
                </Text>
              </View>
            </View>
          ))}

          <Pressable className='bg-rf-gray-800 flex-row gap-4 w-full py-2 rounded-lg justify-center items-center'>
            <Text className='text-rf-gray-100 text-lg'>Save changes</Text>
          </Pressable>
        </View>

        <View className='h-px bg-gray-300 my-6' />

        {/* DELETE ACCOUNT */}
        <View className='w-full gap-6'>
          <Text className='text-xl font-semibold'>Delete Account</Text>
          <Text className='text-lg text-rf-gray-600'>
            If you no longer wish to use REflow, you can permanently delete your
            account.
          </Text>
          <Pressable className='bg-red-600 flex-row gap-4 w-full py-2 rounded-lg justify-center items-center'>
            <Text className='text-red-100 text-lg'>Save changes</Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  )
}
