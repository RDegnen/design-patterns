import { FlyBehavior } from './fly-behavior'
import { QuackBehavior } from './quack-behavior'

export default abstract class Duck {
  abstract flyBehavior: FlyBehavior
  abstract quackBehavior: QuackBehavior

  public abstract display(): void

  public performFly(): void {
    this.flyBehavior.fly()
  }

  public performQuack(): void {
    this.quackBehavior.quack()
  }

  public swim(): void {
    console.log('All ducks float, even decoys!')
  }

  public setFlyBehavior(fb: FlyBehavior): void {
    this.flyBehavior = fb
  }

  public setQuackBehavior(qb: QuackBehavior): void {
    this.quackBehavior = qb
  }
}