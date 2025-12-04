import { expect, test } from 'vitest'
import { solve } from './first'
import { actualInput, exampleInput } from './input'

test('given test input, always return 357', () => {
  const input = exampleInput

  const result = solve(input)

  expect(result).toBe(357)
})

test('given actual input, always return 17144', () => {
  const input = actualInput

  const result = solve(input)

  expect(result).toBe(17144)
})
