import State from "./states/state";
import NoQuarterState from "./states/no-quarter-state";
import SoldOutState from "./states/sold-out-state";
import HasQuarterState from "./states/has-quarter-state";
import SoldState from "./states/sold-state";
import WinnerState from "./states/winner-state";

export default class GumballMachine {
  soldOutState: State
  noQuarterState: State
  hasQuarterState: State
  soldState: State
  winnerState: State
  location: string

  state: State
  count: number = 0

  constructor(location: string, numberOfGumballs: number) {
    this.soldOutState = new SoldOutState(this)
    this.noQuarterState = new NoQuarterState(this)
    this.hasQuarterState = new HasQuarterState(this)
    this.soldState = new SoldState(this)
    this.winnerState = new WinnerState(this)

    this.location = location
    this.count = numberOfGumballs

    if (numberOfGumballs > 0) {
      this.state = this.noQuarterState
    } else {
      this.state = this.soldOutState
    }
  }

  public insertQuarter(): void {
    this.state.insertQuarter()
  }

  public ejectQuarter(): void {
    this.state.ejectQuarter()
  }

  public turnCrank(): void {
    this.state.turnCrank()
    this.state.dispense()
  }

  setState(state: State): void {
    this.state = state
  }

  releaseBall(): void {
    console.log('A gumball comes rolling out of the slot...')
    if (this.count !== 0) {
      this.count -= 1
    }
  }

  public getState(): State {
    return this.state;
  }

  public getLocation(): string {
    return this.location
  }

  public getCount(): number {
    return this.count
  }

  public getSoldOutState(): State {
    return this.soldOutState;
  }

  public getNoQuarterState(): State {
    return this.noQuarterState;
  }

  public getHasQuarterState(): State {
    return this.hasQuarterState;
  }

  public getSoldState(): State {
    return this.soldState;
  }

  public getWinnerState(): State {
    return this.winnerState
  }
}