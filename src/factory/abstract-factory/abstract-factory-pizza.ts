import { Dough, DefaultDough } from "./ingredients/dough"
import { Sauce, DefaultSauce } from "./ingredients/sauce"
import { Cheese, DefaultCheese } from "./ingredients/cheese"

export default abstract class AbstractFactoryPizza {
  name: string = ''
  dough: Dough = new DefaultDough()
  sauce: Sauce = new DefaultSauce()
  cheese: Cheese = new DefaultCheese()

  abstract prepare(): void

  bake(): void {
    console.log('Bake for 25 minutes at 350')
  }

  cut(): void {
    console.log('Cutting the pizza into diagonal slices')
  }

  box(): void {
    console.log('Place pizza in official PizzaStore box')
  }

  public setName(name: string): void {
    this.name = name
  }

  public getName(): string {
    return this.name
  }
}