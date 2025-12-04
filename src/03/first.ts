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
  const possibleJoltages = battery.slice(0, -1).reduce((possibilities, bank, index) => {
    for (let i = index + 1; i < battery.length; i++) {
      possibilities.add(Number(`${bank}${battery[i]}`))
    }

    return possibilities
  }, new Set<number>())

  return Math.max(...Array.from(possibleJoltages))
}
