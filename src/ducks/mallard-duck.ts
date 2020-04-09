import Duck from './duck'
import { FlyWithWings } from './fly-behavior'
import { Quack } from './quack-behavior'

export default class MallardDuck extends Duck {
  flyBehavior = new FlyWithWings
  quackBehavior = new Quack

  display() {
    console.log('I am a Mallard')
  }
}