import AbstractFactoryPizza from "./abstract-factory-pizza";

export default abstract class AbstractFactoryStore {
  public orderPizza(type: string): AbstractFactoryPizza {
    const pizza: AbstractFactoryPizza = this.createPizza(type)

    pizza.prepare()
    pizza.bake()
    pizza.cut()
    pizza.box()

    return pizza
  }

  abstract createPizza(type: string): AbstractFactoryPizza
}