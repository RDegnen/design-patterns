import { Quackable } from "../interfaces";

export default class RedHeadDuck implements Quackable {
  public quack(): void {
    console.log('Quack')
  }
}