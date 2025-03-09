import '../global.css'

import { Stack } from 'expo-router'

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerTintColor: 'black',
      }}
    >
      <Stack.Screen name='(tabs)' options={{ headerShown: false }} />
      <Stack.Screen name='actionItems' options={{ headerShown: false }} />

      <Stack.Screen
        name='transactions/details/[id]'
        options={{ headerShown: true, title: 'Transaction details' }}
      />

      <Stack.Screen
        name='transactions/new'
        options={{
          title: 'New Transaction',
          headerBackTitle: 'Back',
        }}
      />
    </Stack>
  )
}
