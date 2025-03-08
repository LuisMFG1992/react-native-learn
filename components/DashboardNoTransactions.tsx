import { View, Text, Pressable, StyleSheet } from 'react-native'
import { CalendarX2, Plus } from 'lucide-react-native'
import { Link } from 'expo-router'
import { twColors } from '@/constants/TwColors'

const DashboardNoTransactions = () => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <CalendarX2 size={50} color={twColors.rf_gray_500} />
        <Text style={styles.heading}>No transactions yet</Text>
        <Text style={styles.description}>
          It’s empty in here…for now. Add your first transaction and let’s make
          some moves!
        </Text>
      </View>

      <Link href='/' asChild>
        <Pressable style={styles.button}>
          <Plus color={twColors.rf_gray_100} />
          <Text style={styles.buttonText}>Add transaction</Text>
        </Pressable>
      </Link>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 16,
    borderWidth: 1,
    borderColor: twColors.rf_gray_500,
    borderRadius: 12,
    paddingVertical: 10,
    paddingHorizontal: 16,
    width: '100%',
  },
  heading: {
    fontSize: 18,
    fontWeight: '600',
    color: twColors.rf_gray_700,
  },
  description: {
    textAlign: 'center',
    paddingHorizontal: 16,
    color: twColors.rf_gray_600,
  },
  button: {
    backgroundColor: twColors.rf_gray_800,
    width: '100%',
    paddingVertical: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    marginTop: 20,
  },
  buttonText: {
    color: twColors.rf_gray_100,
    marginLeft: 8,
    fontSize: 16,
    fontWeight: '500',
  },
})

export default DashboardNoTransactions
