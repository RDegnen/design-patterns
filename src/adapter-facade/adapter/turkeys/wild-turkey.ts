import Turkey from "./turkey";

export default class WildTurkey implements Turkey {
  public gobble(): void {
    console.log('Gobble gobble')
  }

  public fly(): void {
    console.log("I'm flying a short distance!")
  }
}