import { expect, test } from 'vitest'
import { solve } from './first'
import { actualInput, exampleInput } from './input'

test('given test input, always return 1227775554', () => {
  const input = exampleInput

  const result = solve(input)

  expect(result).toBe(1227775554)
})

test('given actual input, always return 26255179562', () => {
  const input = actualInput

  const result = solve(input)

  expect(result).toBe(26255179562)
})
