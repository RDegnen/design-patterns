import PizzaIngredientFactory from "./pizza-ingredient-factory";
import { Dough, ThinCrustDough } from "./ingredients/dough";
import { Sauce, MarinaraSauce } from "./ingredients/sauce";
import { Cheese, Reggiano } from "./ingredients/cheese";

export default class NewYorkIngredientFactory 
implements PizzaIngredientFactory {
  public createDough(): Dough {
    return new ThinCrustDough()
  }

  public createSauce(): Sauce {
    return new MarinaraSauce()
  }

  public createCheese(): Cheese {
    return new Reggiano()
  }
}