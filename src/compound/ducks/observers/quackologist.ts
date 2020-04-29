import { Observer, QuackObservable } from "../interfaces";

export default class Quackologist implements Observer {
  public update(duck: QuackObservable): void {
    console.log(`Quackologist: ${duck} just quacked`)
  }
}