export function solve(input: string): number {
  const startingPosition = 50
  const instructions = input.split('\n')

  const { zeros } = instructions.reduce(({ position, zeros }, instruction) => {
    const direction = instruction.slice(0, 1)
    const steps = parseInt(instruction.slice(1))

    if (!isDirection(direction)) {
      throw new Error(`Invalid direction: ${direction}`)
    }

    position = wrap(position + turn(direction, steps))

    if (position === 0) {
      zeros++
    }

    return {
      position,
      zeros,
    }
  }, { position: startingPosition, zeros: 0 })

  return zeros
}

function isDirection(value: string): value is 'L' | 'R' {
  return ['L', 'R'].includes(value)
}

function wrap(position: number, maxPosition: number = 100): number {
  return (position + maxPosition) % maxPosition
}

function turn(direction: 'L' | 'R', steps: number): number {
  return direction === 'L' ? -steps : steps
}
