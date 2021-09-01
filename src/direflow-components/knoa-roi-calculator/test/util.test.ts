import {pipe} from 'fp-ts/function'
import {
  annualBenefits,
  device,
  formatNumber,
  pxToRem,
  toCommaSeparated,
} from '../util'

it('Gets the correct value', () => {
  const years = 1
  const employees = 5000
  const expected = '$2.2M'
  const result = pipe(annualBenefits(years, employees), formatNumber)
  expect(result).toBe(expected)
})

it('Handles numbers under 100000', () => {
  const input = 10000
  const expected = '$10K'
  const result = formatNumber(input)
  expect(result).toBe(expected)
})

it('Separates Numbers With Commas', () => {
  const input = 100000
  const expected = '100,000'
  const result = toCommaSeparated(input)
  expect(result).toBe(expected)
})

it('Handles px to rem', () => {
  const input = 15
  const expected = '1rem'
  const result = pxToRem(input)
  expect(result).toBe(expected)
})

it('Handles media queries', () => {
  const expected = '(min-width: 1440px)'
  const result = device.laptopL
  expect(result).toBe(expected)
})
