import { Quackable } from "../interfaces";

export default class QuackCounter implements Quackable {
  duck: Quackable
  static numberOfQuacks: number = 0

  constructor(duck: Quackable) {
    this.duck = duck
  }

  public quack(): void {
    this.duck.quack()
    QuackCounter.numberOfQuacks += 1
  }

  public static getQuacks(): number {
    return QuackCounter.numberOfQuacks
  }
}