import MallardDuck from './mallard-duck'
import ModelDuck from './model-duck'
import { FlyRockedPowered } from './fly-behavior'

/**
 * This implements the Strategy Pattern.
 * The Strategy Pattern defines a family of algorithms and makes them
 * interchangeable.
 */
const ducky = new MallardDuck()
ducky.performFly()
ducky.performQuack()

const modelDucky = new ModelDuck()
modelDucky.performFly()
modelDucky.setFlyBehavior(new FlyRockedPowered())
modelDucky.performFly()
