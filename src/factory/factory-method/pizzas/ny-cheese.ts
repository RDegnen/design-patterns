import Pizza from "../pizza";

export default class NyCheesePizza extends Pizza {
  constructor() {
    super()
    this.name = 'NY Style Sauce and Cheese Pizza'
    this.dough = 'This Crust Dough'
    this.sauce = 'Marinara Sauce'

    this.toppings.push('Grated Reggiano Cheese')
  }
}