import { Quackable, Observer } from "../interfaces";
import Goose from "../fowl/goose";
import Observable from "../fowl/observable";

export default class GooseAdapter implements Quackable {
  goose: Goose
  observable: Observable

  constructor(goose: Goose) {
    this.goose = goose
    this.observable = new Observable(this)
  }

  public quack(): void {
    this.goose.honk()
  }

  public registerObserver(observer: Observer): void {
    this.observable.registerObserver(observer)
  }

  public notifyObservers(): void {
    this.observable.notifyObservers()
  }
}