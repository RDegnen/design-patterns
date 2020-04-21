import GumballMachine from "./gumball-machine"

/**
 * The State Pattern allows an object to alter its behavior when
 * its internal state changes. The object will appear to change its class
 */
function main() {
  const gumballMachine: GumballMachine = new GumballMachine(5)

  console.log(gumballMachine)

  gumballMachine.insertQuarter()
  gumballMachine.turnCrank()

  console.log(gumballMachine)

  gumballMachine.insertQuarter()
  gumballMachine.turnCrank()
  gumballMachine.insertQuarter()
  gumballMachine.turnCrank()

  console.log(gumballMachine)
}

main()