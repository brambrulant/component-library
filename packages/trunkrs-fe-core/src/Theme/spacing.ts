export interface Spacing {
  unitSize: number
  units(units: number): string
  units(topBottomUnits: number, rightLeftUnits: number): string
  units(topUnits: number, rightLeftUnits: number, bottomUnits: number): string
  units(
    topUnits: number,
    rightUnits: number,
    bottomUnits: number,
    leftUnits: number,
  ): string
}

const unitSize = 8

export const spacing: Spacing = {
  unitSize,
  units(...args: number[]): string {
    return args.map((arg) => `${arg * 4}px`).join(' ')
  },
}
