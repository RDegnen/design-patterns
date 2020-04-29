import { Quackable, Observer } from "../interfaces";

export default class Flock implements Quackable {
  quackers: Quackable[] = []

  public add(quacker: Quackable): void {
    this.quackers.push(quacker)
  }

  public quack(): void {
    this.quackers.forEach(q => q.quack())
  }

  public registerObserver(observer: Observer): void {
    this.quackers.forEach(quacker => {
      quacker.registerObserver(observer)
    })
  }

  public notifyObservers(): void {}
}