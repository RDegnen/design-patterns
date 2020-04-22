import { Quackable, Observer } from "../interfaces";
import Observable from "./observable";

export default class Flock implements Quackable {
  quackers: Quackable[] = []
  observerable: Observable

  constructor() {
    this.observerable = new Observable(this)
  }

  public add(quacker: Quackable): void {
    this.quackers.push(quacker)
  }

  public quack(): void {
    this.quackers.forEach(q => q.quack())
  }

  public registerObserver(observer: Observer): void {
    this.observerable.registerObserver(observer)
  }

  public notifyObservers(): void {
    this.observerable.notifyObservers()
  }
}