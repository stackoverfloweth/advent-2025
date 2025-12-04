import { expect, test } from 'vitest'
import { solve } from './second'
import { actualInput, exampleInput } from './input'

test('given test input, always return 3121910778619', () => {
  const input = exampleInput

  const result = solve(input)

  expect(result).toBe(3121910778619)
})

test('given actual input, always return 170371185255900', () => {
  const input = actualInput

  const result = solve(input)

  expect(result).toBe(170371185255900)
})
