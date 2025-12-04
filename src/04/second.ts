export function solve(input: string): number {
  const grid = parseInput(input)

  function checkCanAccess(slot: Slot): boolean {
    return getAdjacentSlots(slot).filter((slot) => !!slot && !slot.isEmpty).length < 4
  }

  function getAdjacentSlots(slot: Slot): (Slot | undefined)[] {
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

  function pullRolls(): number {
    return Array.from(grid.values())
      .filter((slot) => !slot.isEmpty && checkCanAccess(slot))
      .map((slot) => {
        grid.set(`${slot.x},${slot.y}`, { ...slot, isEmpty: true })

        return slot
      })
      .length
  }

  const pulls = [pullRolls()]

  while (pulls[pulls.length - 1] !== 0) {
    pulls.push(pullRolls())
  }

  return pulls.reduce((sum, pull) => sum + pull, 0)
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
