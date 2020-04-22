export interface Quackable extends QuackObservable {
  quack(): void
}

export interface QuackObservable {
  registerObserver(observer: Observer): void
  notifyObservers(): void
}

export interface Observer {
  update(duck: QuackObservable): void
}