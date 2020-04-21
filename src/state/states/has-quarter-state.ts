import State from "./state";
import GumballMachine from "../gumball-machine";

export default class HasQuarterState implements State {
  gumballMachine: GumballMachine

  constructor(gumballMachine: GumballMachine) {
    this.gumballMachine = gumballMachine
  }

  public insertQuarter(): void {
    console.log('you cant insert another quarter')
  }

  public ejectQuarter(): void {
    console.log('quarter returned')
    this.gumballMachine.setState(this.gumballMachine.getNoQuarterState())
  }

  public turnCrank(): void {
    console.log('you turned...')
    const winner: number = Math.floor(Math.random() * 10)
    if ((winner === 1) && (this.gumballMachine.getCount() > 1)) {
      this.gumballMachine.setState(this.gumballMachine.getWinnerState())
    } else {
      this.gumballMachine.setState(this.gumballMachine.getSoldState())
    }
  }

  public dispense(): void {
    console.log('no gumball dispensed')
  }
}