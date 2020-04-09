import { Dough } from "./ingredients/dough";
import { Sauce } from "./ingredients/sauce";
import { Cheese } from "./ingredients/cheese";

export default interface PizzaIngredientFactory {
  createDough(): Dough
  createSauce(): Sauce
  createCheese(): Cheese
}