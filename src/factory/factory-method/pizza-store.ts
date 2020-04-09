import Pizza from "./pizza";

export default abstract class PizzaStore {
  public orderPizza(type: string): Pizza {
    const pizza: Pizza = this.createPizza(type)

    pizza.prepare()
    pizza.bake()
    pizza.cut()
    pizza.box()

    return pizza
  }

  abstract createPizza(type: string): Pizza
}