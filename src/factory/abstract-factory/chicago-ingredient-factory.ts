import PizzaIngredientFactory from "./pizza-ingredient-factory";
import { Dough, ThickCrustDough } from "./ingredients/dough";
import { Sauce, PlumTomatoSauce } from "./ingredients/sauce";
import { Cheese, Mozarella } from "./ingredients/cheese";

export default class ChicagoIngredientFactory
implements PizzaIngredientFactory {
  createDough(): Dough {
    return new ThickCrustDough()
  }

  createSauce(): Sauce {
    return new PlumTomatoSauce()
  }

  createCheese(): Cheese {
    return new Mozarella()
  }
}