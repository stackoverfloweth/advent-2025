type Range = [start: number, end: number]

export function solve(input: string): number {
  const freshRanges = parseInput(input)
  const reduced = reduce(freshRanges)

  return reduced.reduce((sum, [start, end]) => sum + (end - start + 1), 0)
}

function reduce(ranges: Range[]): Range[] {
  for (let aIndex = 0; aIndex < ranges.length; aIndex++) {
    for (let bIndex = aIndex + 1; bIndex < ranges.length; bIndex++) {
      const aRange = ranges[aIndex]
      const bRange = ranges[bIndex]

      if (overlapsOrAdjacent(aRange, bRange)) {
        const merged = merge(aRange, bRange)

        return reduce([
          merged,
          ...ranges.slice(0, aIndex),
          ...ranges.slice(aIndex + 1, bIndex),
          ...ranges.slice(bIndex + 1),
        ])
      }
    }
  }

  return ranges
}

function overlapsOrAdjacent([aStart, aEnd]: Range, [bStart, bEnd]: Range): boolean {
  return Math.max(aStart, bStart) <= Math.min(aEnd, bEnd) + 1
}

function merge([aStart, aEnd]: Range, [bStart, bEnd]: Range): Range {
  return [Math.min(aStart, bStart), Math.max(aEnd, bEnd)]
}

function parseInput(input: string): Range[] {
  const [freshRanges] = input.split('\n\n')

  return freshRanges.split('\n').map((line) => {
    const [start, end] = line.split('-').map(Number)
    return [start, end]
  })
}
