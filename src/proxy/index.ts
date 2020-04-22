import GumballMachine from "../state/gumball-machine"
import GumballMonitor from "./gumball-monitor"

/**
 * The Proxy Pattern provides a surrogate or placeholder
 * for another object to control access to it.
 * 
 * The code for this pattern in the book is really Java specific so
 * not much is done here.
 */
function main() {
  const machine: GumballMachine = new GumballMachine('Sullivans Tap', 5)
  const monitor: GumballMonitor = new GumballMonitor(machine)

  monitor.report()
}

main()