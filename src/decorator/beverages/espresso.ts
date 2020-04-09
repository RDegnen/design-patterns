import Beverage from "../beverage";

export default class Espresso extends Beverage {
  constructor() {
    super()
    this.description = 'Espresso'
  }

  public cost(): number {
    return 1.99
  }
}