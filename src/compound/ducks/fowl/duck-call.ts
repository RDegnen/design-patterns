import { Quackable } from "../interfaces";

export default class DuckCall implements Quackable {
  public quack(): void {
    console.log('Kwak')
  }
}