import { Observer, DisplayElement, Subject } from "./interfaces";
import WeatherData from "./weather-data";

function calculateHeatIndex(temp: number, humidity: number): number {
  return 16.923 + 0.185212 * temp + 5.37941 * humidity - 0.100254 * temp * humidity +
    9.41695 * Math.pow(10, -3) * Math.pow(temp, 2) + 7.28898 * Math.pow(10, -3) *
    Math.pow(humidity, 2) + 3.45372 * Math.pow(10, -4) * Math.pow(temp, 2) * humidity -
    8.14971 * Math.pow(10, -4) * temp * Math.pow(humidity, 2) + 1.02102 * Math.pow(10, -5) *
    Math.pow(temp, 2) * Math.pow(humidity, 2) - 3.8646 * Math.pow(10, -5) * Math.pow(temp, 3) +
    2.91583 * Math.pow(10, -5) * Math.pow(humidity, 3) + 1.42721 * Math.pow(10, -6) *
    Math.pow(temp, 3) * humidity + 1.97483 * Math.pow(10, -7) * temp * Math.pow(humidity, 3) -
    2.18429 * Math.pow(10, -8) * Math.pow(temp, 3) * Math.pow(humidity, 2) + 8.43296 *
    Math.pow(10, -10) * Math.pow(temp, 2) * Math.pow(humidity, 3) - 4.81975 * Math.pow(10, -11) *
    Math.pow(temp, 3) * Math.pow(humidity, 3)
}

export default class HeatIndexDisplay
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
    const heatIndex = calculateHeatIndex(
      this.temperature,
      this.humidity
    )
    console.log(`Heat index is ${heatIndex}`)
  }

}
