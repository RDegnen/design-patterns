import AbstractDuckFactory from "./abstract-duck-factory";
import { Quackable } from "../interfaces";
import MallardDuck from "../fowl/mallard-duck";
import RedHeadDuck from "../fowl/red-head-duck";
import DuckCall from "../fowl/duck-call";
import RubberDuck from "../fowl/rubber-duck";

export default class DuckFactory extends AbstractDuckFactory {
  public createMallardDuck(): Quackable {
    return new MallardDuck()
  }

  public createRedHeadDuck(): Quackable {
    return new RedHeadDuck()
  }

  public createDuckCall(): Quackable {
    return new DuckCall()
  }

  public createRubberDuck(): Quackable {
    return new RubberDuck()
  }
}