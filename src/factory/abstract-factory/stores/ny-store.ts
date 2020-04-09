import AbstractFactoryPizza from "../abstract-factory-pizza";
import AbstractFactoryStore from "../abstract-factory-store";
import PizzaIngredientFactory from "../pizza-ingredient-factory";
import NewYorkIngredientFactory from "../new-york-ingredient-factory";
import CheesePizza from "../pizzas/cheese=pizza";

export default class NewYorkStore extends AbstractFactoryStore {
  createPizza(type: string): AbstractFactoryPizza {
    let pizza: AbstractFactoryPizza
    const ingredientFactory: PizzaIngredientFactory 
      = new NewYorkIngredientFactory()

    // pretend there is some if or something checking type
    pizza = new CheesePizza(ingredientFactory)
    pizza.setName('New York Style Cheese Pizza')

    return pizza
  }
}