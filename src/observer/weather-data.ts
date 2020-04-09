import { Subject, Observer } from './interfaces'

export default class WeatherData implements Subject {
  private observers: Array<Observer>
  private temperature: number = 0
  private humidity: number = 0
  private pressure: number = 0
  private changed: boolean = false

  constructor() {
    this.observers = new Array<Observer>()
  }

  public registerObserver(o: Observer): void {
    this.observers.push(o)
  }

  public removeObserver(o: Observer): void {
    const i: number = this.observers.indexOf(o)
    if (i >= 0) {
      this.observers.splice(i,1)
    }
  }

  private setChanged(): void {
    this.changed = true
  }

  public notifyObservers(): void {
    if (this.changed) {
      this.observers.forEach(observer => {
        observer.update(this, {
          temperature: this.temperature,
          humidity: this.humidity,
          pressure: this.pressure
        })
      })
      this.changed = false
    }
  }

  public measurementsChanged(): void {
    this.setChanged()
    this.notifyObservers()
  }

  public setMeasurements(
    temperature: number, 
    humidity: number, 
    pressure: number
  ): void {
    this.temperature = temperature
    this.humidity = humidity
    this.pressure = pressure
    this.measurementsChanged()
  }

  public getTemperature(): number {
    return this.temperature
  }

  public getHumidity(): number {
    return this.humidity
  }

  public getPressure(): number {
    return this.pressure
  }
}