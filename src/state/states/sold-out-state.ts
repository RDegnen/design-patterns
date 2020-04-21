import State from "./state";
import GumballMachine from "../gumball-machine";

export default class SoldOutState implements State {
  gumballMachine: GumballMachine

  constructor(gumballMachine: GumballMachine) {
    this.gumballMachine = gumballMachine
  }

  public insertQuarter(): void {
    console.log('sorry, gumballs are sold out')
  }

  public ejectQuarter(): void {
    console.log('sorry, gumballs are sold out')
  }

  public turnCrank(): void {
    console.log('sorry, gumballs are sold out')
  }

  public dispense(): void {
    console.log('sorry, gumballs are sold out')
  }
}