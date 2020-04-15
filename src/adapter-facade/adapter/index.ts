import MallardDuck from "./ducks/mallard-duck"
import WildTurkey from "./turkeys/wild-turkey"
import Duck from "./ducks/duck"
import TurkeyAdapter from "./adapters/turkey-adapter"

function main() {
  const duck: MallardDuck = new MallardDuck()
  const turkey: WildTurkey = new WildTurkey()
  const turkeyAdapter: Duck = new TurkeyAdapter(turkey)

  console.log('The turkey says...')
  turkey.gobble()
  turkey.fly()

  console.log('\nThe duck says...')
  testDuck(duck)
  
  console.log('\nThe turkey adapter says...')
  testDuck(turkeyAdapter)
}

function testDuck(duck: Duck): void {
  duck.quack()
  duck.fly()
}

main()