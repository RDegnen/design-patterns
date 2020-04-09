import Duck from './duck'
import { FlyNoWay } from './fly-behavior'
import { Quack } from './quack-behavior'

export default class ModelDuck extends Duck {
  flyBehavior = new FlyNoWay
  quackBehavior = new Quack

  display() {
    console.log('Nice looking duck model')
  }
}