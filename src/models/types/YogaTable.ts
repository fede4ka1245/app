export interface YogaTableRow {
  planets: string [],
  connection: {
    connection: string,
    type: string,
  },
  badge: {
    number?: string,
    name: string,
    type?: string,
    resize?: string
  }
}
