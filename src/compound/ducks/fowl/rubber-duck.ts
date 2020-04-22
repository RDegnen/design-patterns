import { Quackable } from "../interfaces";

export default class RubberDuck implements Quackable {
  public quack(): void {
    console.log('Squeak')
  }
}