import NYPizzaStore from "./stores/ny-store"
import ChicagoPizzaStore from "./stores/chicago-store"
import Pizza from "./pizza"

function main() {
  let pizza: Pizza
  const nyStore = new NYPizzaStore()
  const chicagoStore = new ChicagoPizzaStore()

  pizza = nyStore.orderPizza('cheese')
  console.log(`Ethan ordered a ${pizza.getName()}`)

  pizza = chicagoStore.orderPizza('cheese')
  console.log(`Joel ordered a ${pizza.getName()}`)
}

main()