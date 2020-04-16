import CaffeineBeverage from "./caffeine-beverage"

export default class Coffee extends CaffeineBeverage {
  public brew(): void {
    console.log('Dripping coffee through filter')
  }

  public addCondiments(): void {
    console.log('Adding sugar and milk')
  }

  public async customerWantsCondiments(): Promise<boolean> {
    const answer = await this.getUserInput()
    if (answer === 'y') {
      return true
    } else if (answer === 'n') {
      return false
    }
    return false
  }

  private getUserInput(): Promise<string> {
    return new Promise(resolve => {
      console.log('Would you like milk and sugar with your coffee? (y/n)')

      process.stdin.on('data', data => {
        resolve(data.toString().trim())
      })
    })
  }
}