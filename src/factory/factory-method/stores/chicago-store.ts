import PizzaStore from "../pizza-store";
import Pizza from "../pizza";
import ChicagoCheesePizza from "../pizzas/chicago-cheese";

export default class ChicagoPizzaStore extends PizzaStore {
  createPizza(type: string): Pizza {
    if (type === 'cheese') {
      return new ChicagoCheesePizza()
    } else {
      return new ChicagoCheesePizza()     
    }
  }
}