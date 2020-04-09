import { Observer, DisplayElement, Subject } from './interfaces'
import WeatherData from './weather-data'

export default class CurrentConditionsDisplay 
implements Observer, DisplayElement {
  private temperature: number = 0
  private humidity: number = 0
  private subject: Subject

  constructor(subject: Subject) {
    this.subject = subject
    this.subject.registerObserver(this)
  }

  public update(
    obs: Subject,
    arg: object
  ): void {
    if (obs instanceof WeatherData) {
      this.temperature = obs.getTemperature()
      this.humidity = obs.getHumidity()
      this.display()
    }
  }

  public display(): void {
    console.log(`Current conditions: ${this.temperature} F degrees and ${this.humidity}% humidity`)
  }
}