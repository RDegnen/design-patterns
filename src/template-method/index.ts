import Tea from "./drinks/tea"
import Coffee from "./drinks/coffee"

/**
 * The Template Method Pattern defines the skeleton of an algorithim
 * in a method, deferring some steps to subclasses. Template Method
 * lets subclasses redefine certain steps of an algorithim without
 * chang the algorithims structure
 */
async function main() {
  const myTea: Tea = new Tea()
  const myCoffee: Coffee = new Coffee()

  // myTea.prepareRecipe()
  await myCoffee.prepareRecipe()
  process.exit()
}

main()