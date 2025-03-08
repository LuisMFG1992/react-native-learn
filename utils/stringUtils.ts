export function toSnakeUpperCase(input: string): string {
  return input.trim().toUpperCase().replace(/\s+/g, '_')
}

export function capitalizeFirstLetter(str: string): string {
  if (!str) return ''
  return str.charAt(0).toUpperCase() + str.slice(1)
}

export function toSentenceCase(str: string): string {
  if (!str) return ''
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
}

export function capitalizeEacFirstLetter(str: string): string {
  if (!str) return ''
  return str
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ')
}

export function toCaplitalizedNoUnderscore(str: string): string {
  if (!str) return ''
  return str
    .split('_')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ')
}
