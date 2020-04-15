import Turkey from "../turkeys/turkey";
import Duck from "../ducks/duck";

export default class DuckAdapter implements Turkey {
  duck: Duck

  constructor(duck: Duck) {
    this.duck = duck
  }

  public gobble(): void {
    this.duck.quack()
  }

  public fly(): void {
    this.duck.fly()
  }
}