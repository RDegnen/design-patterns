import WeatherData from "./weather-data"
import CurrentConditionsDisplay from "./current-conditions-display"
import HeatIndexDisplay from "./heat-index-display"

function main(): void {
  const weatherData: WeatherData = new WeatherData()
  const currentConditionsDisplay: CurrentConditionsDisplay =
    new CurrentConditionsDisplay(weatherData)
  const heatIndexDisplay: HeatIndexDisplay = 
    new HeatIndexDisplay(weatherData)

  weatherData.setMeasurements(80, 65, 30.4)
  weatherData.setMeasurements(82, 70, 29.2)
  weatherData.setMeasurements(78, 90, 29.2)
}

main()