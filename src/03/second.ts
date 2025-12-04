const BANK_LENGTH = 12

export function solve(input: string): number {
  const batteries = parseInput(input)
  const joltages = batteries.map(maxJoltage)

  return joltages.reduce((sum, joltage) => sum + joltage, 0)
}

type Battery = number[]

function parseInput(input: string): Battery[] {
  return input.split('\n').map((line) => line.split('').map(Number))
}

function maxJoltage(battery: Battery): number {
  const result: number[] = []
  let startIndex = 0

  for (let index = 0; index < BANK_LENGTH; index++) {
    const remainingNeeded = BANK_LENGTH - index - 1
    const maxEndIndex = battery.length - remainingNeeded
    const nextIndex = nextDigitIndex(battery, startIndex, maxEndIndex)

    result.push(battery[nextIndex])
    startIndex = nextIndex + 1
  }

  return Number(result.join(''))
}

function nextDigitIndex(battery: Battery, startIndex: number, maxEndIndex: number): number {
  let maxDigit = -1
  let maxDigitIndex = -1

  for (let index = startIndex; index < maxEndIndex; index++) {
    if (battery[index] > maxDigit) {
      maxDigit = battery[index]
      maxDigitIndex = index
    }
  }
  return maxDigitIndex
}
