import Beverage from "../beverage";

export default class Decaf extends Beverage {
  constructor() {
    super()
    this.description = 'Decaf'
  }

  public cost(): number {
    return 1.05
  }
}