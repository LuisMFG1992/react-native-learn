export const formatDate = (dateString: string | Date): string => {
  const date = new Date(dateString)
  return date.toLocaleDateString()
}

export const capitalizeFirstLetter = (str: string) => {
  if (!str) return ''
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
}

export const getDateAfterDays = (pendDate: Date, days: number): Date => {
  if (!days || days === 0) return new Date()
  const date = new Date(pendDate) || new Date()
  date.setDate(date.getDate() + days)
  const month = (date.getMonth() + 1).toString().padStart(2, '0')
  const day = date.getDate().toString().padStart(2, '0')
  const year = date.getFullYear()

  return new Date(`${month}/${day}/${year}`)
}

export const formatWashingtonPhoneNumber = (phoneNumber: string): string => {
  const cleaned = ('' + phoneNumber).replace(/\D/g, '')
  const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/)
  if (match) {
    return `(${match[1]}) ${match[2]}-${match[3]}`
  }
  return phoneNumber
}
