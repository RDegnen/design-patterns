import CondimentDecorator from "../condiment-decorator";
import Beverage from "../beverage";

export default class Soy extends CondimentDecorator {
  beverage: Beverage

  constructor(beverage: Beverage) {
    super()
    this.beverage = beverage
  }

  public getDescription(): string {
    return `${this.beverage.getDescription()}, Soy`
  }

  public cost(): number {
    return this.beverage.cost() + 0.15
  }
}