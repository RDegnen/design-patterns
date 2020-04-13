export default class CeilingFan {
  public static HIGH: number = 3
  public static MEDIUM: number = 2
  public static LOW: number = 1
  public static OFF: number = 0
  location: string
  speed: number

  constructor(location: string) {
    this.location = location
    this.speed = CeilingFan.OFF
  }

  public high(): void {
    this.speed = CeilingFan.HIGH
    console.log(`${this.location} ceiling fan is on ${this.speed}`)
  }

  public medium(): void {
    this.speed = CeilingFan.MEDIUM
    console.log(`${this.location} ceiling fan is on ${this.speed}`)
  }

  public low(): void {
    this.speed = CeilingFan.LOW
    console.log(`${this.location} ceiling fan is on ${this.speed}`)
  }

  public off(): void {
    this.speed = CeilingFan.OFF
    console.log(`${this.location} ceiling fan is on ${this.speed}`)
  }

  public getSpeed(): number {
    return this.speed
  }
}