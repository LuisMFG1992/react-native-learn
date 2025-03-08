import { View, Text, StyleSheet } from 'react-native'
import { BlurView } from 'expo-blur'

const Greeting = ({ name = 'You' }) => {
  return (
    <View style={styles.container}>
      {/* Círculo sólido */}
      <View style={styles.profileCircle} />

      {/* Texto */}
      <Text style={styles.text}>{`Good morning, ${name}`}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 36,
    // borderWidth: 1,
    // borderColor: 'black',
    paddingTop: 30,
  },
  profileCircle: {
    width: 94,
    height: 94,
    borderRadius: 47,
    backgroundColor: '#ED9B65',
  },
  text: {
    fontSize: 24,
    fontWeight: '600',
  },
})

export default Greeting
