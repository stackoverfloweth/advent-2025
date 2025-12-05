import { expect, test } from 'vitest'
import { solve } from './first'
import { actualInput, exampleInput } from './input'

test('given test input, always return 3', () => {
  const input = exampleInput

  const result = solve(input)

  expect(result).toBe(3)
})

test('given actual input, always return 821', () => {
  const input = actualInput

  const result = solve(input)

  expect(result).toBe(821)
})
