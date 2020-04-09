import AbstractFactoryStore from "../abstract-factory-store";
import AbstractFactoryPizza from "../abstract-factory-pizza";
import PizzaIngredientFactory from "../pizza-ingredient-factory";
import ChicagoIngredientFactory from "../chicago-ingredient-factory";
import CheesePizza from "../pizzas/cheese=pizza";

export default class ChicagoStore extends AbstractFactoryStore {
  createPizza(type: string): AbstractFactoryPizza {
    let pizza: AbstractFactoryPizza
    const ingredientFactory: PizzaIngredientFactory 
      = new ChicagoIngredientFactory()

    // pretend there is some if or something checking type
    pizza = new CheesePizza(ingredientFactory)
    pizza.setName('New York Style Cheese Pizza')

    return pizza
  }
}