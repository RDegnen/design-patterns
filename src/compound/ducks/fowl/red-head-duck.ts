import { Quackable, Observer } from "../interfaces";
import Observable from "./observable";

export default class RedHeadDuck implements Quackable {
  observable: Observable

  constructor() {
    this.observable = new Observable(this)
  }

  public quack(): void {
    console.log('Quack')
    this.notifyObservers()
  }

  public registerObserver(observer: Observer): void {
    this.observable.registerObserver(observer)
  }

  public notifyObservers(): void {
    this.observable.notifyObservers()
  }
}