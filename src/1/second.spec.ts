import { expect, test } from 'vitest'
import { solve } from './second'
import { actualInput, exampleInput } from './input'

test('given test input, always return 6', () => {
  const input = exampleInput

  const result = solve(input)

  expect(result).toBe(6)
})

test('given actual input, always return 5899', () => {
  const input = actualInput

  const result = solve(input)

  expect(result).toBe(5899)
})
