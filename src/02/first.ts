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
  if (id.length % 2 !== 0) {
    return true
  }

  const left = id.slice(0, id.length / 2)
  const right = id.slice(id.length / 2)

  return left !== right
}

function parseInput(input: string): [number, number][] {
  return input.split(',').map((range) => {
    const [start, end] = range.split('-').map(Number)

    return [start, end]
  })
}
