export function solve(input: string): number {
  const grid = parseInput(input)

  return Array.from(grid.values())
    .filter((slot) => !slot.isEmpty && checkCanAccess(grid, slot))
    .length
}

type Coord = `${number},${number}`
type Slot = {
  x: number,
  y: number,
  isEmpty?: boolean,
}

function parseInput(input: string): Map<Coord, Slot> {
  return input.split('\n').reduce((map, line, y) => {
    line.split('').forEach((char, x) => {
      map.set(`${x},${y}`, { x, y, isEmpty: char === '.' })
    })

    return map
  }, new Map<Coord, Slot>())
}

function checkCanAccess(grid: Map<Coord, Slot>, slot: Slot): boolean {
  return getAdjacentSlots(grid, slot).filter((slot) => !!slot && !slot.isEmpty).length < 4
}

function getAdjacentSlots(grid: Map<Coord, Slot>, slot: Slot): (Slot | undefined)[] {
  return [
    grid.get(`${slot.x - 1},${slot.y - 1}`),
    grid.get(`${slot.x},${slot.y - 1}`),
    grid.get(`${slot.x + 1},${slot.y - 1}`),
    grid.get(`${slot.x + 1},${slot.y}`),
    grid.get(`${slot.x + 1},${slot.y + 1}`),
    grid.get(`${slot.x},${slot.y + 1}`),
    grid.get(`${slot.x - 1},${slot.y + 1}`),
    grid.get(`${slot.x - 1},${slot.y}`),
  ]
}
