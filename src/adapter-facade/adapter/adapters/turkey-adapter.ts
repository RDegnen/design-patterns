import Duck from "../ducks/duck";
import Turkey from "../turkeys/turkey";

export default class TurkeyAdapter implements Duck {
  turkey: Turkey

  constructor(turkey: Turkey) {
    this.turkey = turkey
  } 

  public quack(): void {
    this.turkey.gobble()
  }

  public fly(): void {
    // Turkeys can only fly short distances compared to ducks,
    // so they must fly more
    for (let i = 0; i < 5; i++) {
      this.turkey.fly()
    }
  }
}