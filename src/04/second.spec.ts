import { expect, test } from 'vitest'
import { solve } from './second'
import { actualInput, exampleInput } from './input'

test('given test input, always return 43', () => {
  const input = exampleInput

  const result = solve(input)

  expect(result).toBe(43)
})

test('given actual input, always return 8722', () => {
  const input = actualInput

  const result = solve(input)

  expect(result).toBe(8722)
})
