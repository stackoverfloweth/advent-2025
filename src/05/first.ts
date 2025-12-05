export function solve(input: string): number {
  const { freshRanges, availableIngredients } = parseInput(input)

  return availableIngredients.filter((ingredient) => isFresh(ingredient, freshRanges)).length
}

function parseInput(input: string): {
  freshRanges: [number, number][],
  availableIngredients: number[],
} {
  const [freshRanges, availableIngredients] = input.split('\n\n')

  return {
    freshRanges: freshRanges.split('\n').map((line) => {
      const [start, end] = line.split('-').map(Number)
      return [start, end]
    }),
    availableIngredients: availableIngredients.split('\n').map(Number),
  }
}

function isFresh(ingredient: number, freshRanges: [number, number][]): boolean {
  return freshRanges.some(([start, end]) => ingredient >= start && ingredient <= end)
}
