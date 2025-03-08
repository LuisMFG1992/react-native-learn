import { Tabs } from 'expo-router'
import Feather from '@expo/vector-icons/Feather'
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons'
import { Image, View } from 'react-native'

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#ED9B66',
        tabBarInactiveTintColor: 'gray',
      }}
    >
      <Tabs.Screen
        name='index'
        options={{
          title: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Feather name='home' size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name='calendar'
        options={{
          title: 'Calendar',
          tabBarIcon: ({ color, size }) => (
            <Feather name='calendar' size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name='services'
        options={{
          title: 'Services',
          tabBarIcon: ({ color, size }) => (
            <SimpleLineIcons name='energy' size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name='profile'
        options={{
          title: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <View>
              <Image
                source={{
                  uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                }}
                style={{ width: 30, height: 30, borderRadius: 999 }}
              />
            </View>
          ),
        }}
      />
    </Tabs>
  )
}
