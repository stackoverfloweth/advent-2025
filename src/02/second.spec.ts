import { expect, test } from 'vitest'
import { solve } from './second'
import { actualInput, exampleInput } from './input'

test('given test input, always return 4174379265', () => {
  const input = exampleInput

  const result = solve(input)

  expect(result).toBe(4174379265)
})

test('given actual input, always return 31680313976', () => {
  const input = actualInput

  const result = solve(input)

  expect(result).toBe(31680313976)
})
