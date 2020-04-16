import CaffeineBeverage from "./caffeine-beverage"

export default class Tea extends CaffeineBeverage {
  public brew(): void {
    console.log('Steeping the tea')
  }

  public addCondiments(): void {
    console.log('Adding lemon')
  }
}