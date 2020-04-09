import PizzaStore from "../pizza-store";
import Pizza from "../pizza";
import NyCheesePizza from "../pizzas/ny-cheese";

export default class NYPizzaStore extends PizzaStore {
  createPizza(type: string): Pizza {
    if (type === 'cheese') {
      return new NyCheesePizza()
    } else {
      return new NyCheesePizza()
    }
  }
}