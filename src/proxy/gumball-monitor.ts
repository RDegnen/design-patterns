import GumballMachine from "../state/gumball-machine";

export default class GumballMonitor {
  machine: GumballMachine

  constructor(machine: GumballMachine) {
    this.machine = machine
  }

  public report(): void {
    console.log(`Gumball Machine: ${this.machine.getLocation()}`)
    console.log(`Current inventory: ${this.machine.getCount()} gumballs`)
    console.log(`Current state: ${this.machine.getState()}`)
  }
}