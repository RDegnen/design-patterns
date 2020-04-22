import { Quackable } from "../interfaces";

export default class MallardDuck implements Quackable {
  public quack(): void {
    console.log('Quack')
  }
}