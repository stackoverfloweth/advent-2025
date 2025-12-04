import { expect, test } from 'vitest'
import { solve } from './first'
import { actualInput, exampleInput } from './input'

test('given test input, always return 13', () => {
  const input = exampleInput

  const result = solve(input)

  expect(result).toBe(13)
})

test('given actual input, always return 1491', () => {
  const input = actualInput

  const result = solve(input)

  expect(result).toBe(1491)
})
