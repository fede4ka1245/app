interface RashiPlanet {
  name: string,
  additionalInfo: string,
  isRetragraded: boolean
}

export interface RashiTableRow {
  planet: RashiPlanet,
  sign: string,
  sphuta: string,
  naksantra: {
    mainInfo: string,
    additionalInfo: string
  }
}
