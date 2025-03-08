import '../global.css'

import { Stack } from 'expo-router'

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        // headerStyle: { backgroundColor: 'black' },
        headerTintColor: 'black',
      }}
    >
      <Stack.Screen name='(tabs)' options={{ headerShown: false }} />
      <Stack.Screen name='actionItems' options={{ headerShown: false }} />

      <Stack.Screen
        name='transactions/details/[id]'
        options={({ route }) => ({
          title: `Transaction details ${route.params.id}`,
        })}
      />
    </Stack>
  )
}
