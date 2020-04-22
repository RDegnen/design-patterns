import GumballMachine from "../state/gumball-machine"
import GumballMonitor from "./gumball-monitor"

function main() {
  const machine: GumballMachine = new GumballMachine('Sullivans Tap', 5)
  const monitor: GumballMonitor = new GumballMonitor(machine)

  monitor.report()
}

main()