import State from "./state";
import GumballMachine from "../gumball-machine";

export default class NoQuarterState implements State {
  gumballMachine: GumballMachine

  constructor(gumballMachine: GumballMachine) {
    this.gumballMachine = gumballMachine
  }

  public insertQuarter(): void {
    console.log('You inserted a quarter')
    this.gumballMachine.setState(this.gumballMachine.getHasQuarterState())
  }

  public ejectQuarter(): void {
    console.log('You havent inserted a quarter')
  }

  public turnCrank(): void {
    console.log('you turned, but there is no quarter')
  }

  public dispense(): void {
    console.log('you need to pay first')
  }
}