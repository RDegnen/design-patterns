import { QuackObservable, Observer } from "../interfaces";

export default class Observable implements QuackObservable {
  observers: Observer[] = []
  duck: QuackObservable

  constructor(duck: QuackObservable) {
    this.duck = duck
  }

  public registerObserver(observer: Observer): void {
    this.observers.push(observer)
  }

  public notifyObservers(): void {
    this.observers.forEach(o => o.update(this.duck))
  }
}