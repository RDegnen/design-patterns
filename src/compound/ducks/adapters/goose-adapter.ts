import { Quackable } from "../interfaces";
import Goose from "../fowl/goose";

export default class GooseAdapter implements Quackable {
  goose: Goose

  constructor(goose: Goose) {
    this.goose = goose
  }

  public quack(): void {
    this.goose.honk()
  }
}