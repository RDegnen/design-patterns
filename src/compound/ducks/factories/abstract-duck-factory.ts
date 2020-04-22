import { Quackable } from "../interfaces";

export default abstract class AbstractDuckFactory {
  public abstract createMallardDuck(): Quackable
  public abstract createRedHeadDuck(): Quackable
  public abstract createDuckCall(): Quackable
  public abstract createRubberDuck(): Quackable
}