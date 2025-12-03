const MAX_POSITION = 100

export function solve(input: string): number {
  const initial = {
    position: 50,
    zeros: 0,
  }
  const instructions = input.split('\n')

  const { zeros } = instructions.reduce(({ position, zeros }, instruction) => {
    const direction = instruction.slice(0, 1)
    const steps = parseInt(instruction.slice(1))

    if (!isDirection(direction)) {
      throw new Error(`Invalid direction: ${direction}`)
    }

    const change = turn(direction, steps)

    zeros += timesWrapped(position, change)

    return {
      position: wrap(position, change),
      zeros,
    }
  }, initial)

  return zeros
}

function isDirection(value: string): value is 'L' | 'R' {
  return ['L', 'R'].includes(value)
}

function timesWrapped(position: number, change: number): number {
  const absolute = Math.abs(change)

  if (absolute >= MAX_POSITION) {
    return Math.floor(absolute / MAX_POSITION) + timesWrapped(position, change % MAX_POSITION)
  }

  if (position === 0) {
    return 0
  }

  return position + change <= 0 || position + change >= MAX_POSITION ? 1 : 0
}

function wrap(position: number, change: number): number {
  const value = (position + change + MAX_POSITION) % MAX_POSITION

  return value < 0 ? MAX_POSITION + value : value
}

function turn(direction: 'L' | 'R', steps: number): number {
  return direction === 'L' ? -steps : steps
}
