import { Quackable } from "./interfaces";
import MallardDuck from "./fowl/mallard-duck";
import RubberDuck from "./fowl/rubber-duck";
import GooseAdapter from "./adapters/goose-adapter";
import Goose from "./fowl/goose";
import QuackCounter from "./decorators/quack-counter";
import AbstractDuckFactory from "./factories/abstract-duck-factory";
import CountingDuckFactory from "./factories/counting-duck-factory";
import Flock from "./fowl/flock";
import Quackologist from "./observers/quackologist";

function main() {
  const duckFactory: AbstractDuckFactory = new CountingDuckFactory()
  const mallardDuck: Quackable = duckFactory.createMallardDuck()
  const rubberDuck: Quackable = duckFactory.createRubberDuck()
  const gooseDuck: Quackable = new GooseAdapter(new Goose())
  const flockOfDucks: Flock = new Flock()

  flockOfDucks.add(mallardDuck)
  flockOfDucks.add(rubberDuck)

  console.log('Duck Simulator----------')

  simulate(mallardDuck)
  simulate(rubberDuck)
  simulate(gooseDuck)

  console.log('Flock Simulator----------')

  const quackologist: Quackologist = new Quackologist()
  flockOfDucks.registerObserver(quackologist)
  
  simulate(flockOfDucks)

  console.log(`The ducks quacked ${QuackCounter.getQuacks()} times`)
}

function simulate(duck: Quackable) {
  duck.quack()
}

main()