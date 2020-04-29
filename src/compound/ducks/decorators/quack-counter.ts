import { Quackable, Observer } from "../interfaces";
import Observable from "../fowl/observable";

export default class QuackCounter implements Quackable {
  duck: Quackable
  static numberOfQuacks: number = 0
  observable: Observable

  constructor(duck: Quackable) {
    this.duck = duck
    this.observable = new Observable(this)
  }

  public quack(): void {
    this.duck.quack()
    QuackCounter.numberOfQuacks += 1
  }

  public static getQuacks(): number {
    return QuackCounter.numberOfQuacks
  }

  public registerObserver(observer: Observer): void {
    this.observable.registerObserver(observer)
  }

  public notifyObservers(): void {
    this.observable.notifyObservers()
  }
}