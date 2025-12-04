export function solve(input: string): number {
  const ranges = parseInput(input)

  const invalidIds = ranges.reduce((invalidIds, [start, end]) => {
    for (let id = start; id <= end; id++) {
      if (!isValid(id.toString())) {
        invalidIds.add(id)
      }
    }

    return invalidIds
  }, new Set<number>())

  return Array.from(invalidIds).reduce((sum, id) => sum + id, 0)
}

function isValid(id: string): boolean {
  for (let i = 1; i <= id.length / 2; i++) {
    const pattern = id.slice(0, i).repeat(id.length / i)

    if (pattern === id) {
      return false
    }
  }

  return true
}

function parseInput(input: string): [number, number][] {
  return input.split(',').map((range) => {
    const [start, end] = range.split('-').map(Number)

    return [start, end]
  })
}
