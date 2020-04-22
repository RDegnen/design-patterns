import AbstractDuckFactory from "./abstract-duck-factory";
import { Quackable } from "../interfaces";
import MallardDuck from "../fowl/mallard-duck";
import RedHeadDuck from "../fowl/red-head-duck";
import DuckCall from "../fowl/duck-call";
import RubberDuck from "../fowl/rubber-duck";
import QuackCounter from "../decorators/quack-counter";

export default class CountingDuckFactory extends AbstractDuckFactory {
  public createMallardDuck(): Quackable {
    return new QuackCounter(new MallardDuck())
  }

  public createRedHeadDuck(): Quackable {
    return new QuackCounter(new RedHeadDuck())
  }

  public createDuckCall(): Quackable {
    return new QuackCounter(new DuckCall())
  }

  public createRubberDuck(): Quackable {
    return new QuackCounter(new RubberDuck())
  }
}