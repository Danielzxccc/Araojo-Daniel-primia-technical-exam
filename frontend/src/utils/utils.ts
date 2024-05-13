export function formatToPesoCurrency(number: number) {
  return number.toLocaleString('en-PH', {
    style: 'currency',
    currency: 'PHP',
  })
}
