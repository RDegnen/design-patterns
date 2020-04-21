import State from "./state";
import GumballMachine from "../gumball-machine";

export default class SoldState implements State {
  gumballMachine: GumballMachine

  constructor(gumballMachine: GumballMachine) {
    this.gumballMachine = gumballMachine
  }

  public insertQuarter(): void {
    console.log('please wait, youre already getting a ball')
  }

  public ejectQuarter(): void {
    console.log('sorry, you already turned the crank')
  }

  public turnCrank(): void {
    console.log('turning twice doesnt get you another ball')
  }

  public dispense(): void {
    this.gumballMachine.releaseBall()
    if (this.gumballMachine.getCount() > 0) {
      this.gumballMachine.setState(this.gumballMachine.getNoQuarterState())
    } else {
      console.log('oops, out of gumballs')
      this.gumballMachine.setState(this.gumballMachine.getSoldOutState())
    }
  }
}