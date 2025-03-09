import { Stack } from 'expo-router'

export default function NewTransactionLayout() {
  return (
    <Stack>
      <Stack.Screen
        name='type'
        options={{
          title: 'Transaction Type',
          headerBackTitle: 'Back',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name='upload'
        options={{
          title: 'Upload Documents',
          headerBackTitle: 'Back',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name='form'
        options={{
          title: 'Transaction Form',
          headerBackTitle: 'Back',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name='dates-completion'
        options={{
          title: 'Completion Date',
          headerBackTitle: 'Back',
          headerShown: false,
        }}
      />
    </Stack>
  )
}
