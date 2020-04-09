import Beverage from "./beverage";

export default abstract class CondimentDecorator extends Beverage {
  public abstract getDescription(): string
}