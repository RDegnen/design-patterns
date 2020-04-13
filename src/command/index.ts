import SimpleRemoteControl from "./simple-remote-control"
import Light from "./vendor-classes/light"
import LightOnCommand from "./commands/light-on"
import GarageDoor from "./vendor-classes/garage-door"
import GarageDoorOpenCommand from "./commands/garage-door-open"
import RemoteControl from "./remote-control"
import StereoOnWithCDCommand from "./commands/stereo-on-with-cd"
import Stereo from "./vendor-classes/stereo"
import StereoOffCommand from "./commands/stereo-off"
import CeilingFan from "./vendor-classes/ceiling-fan"
import CeilingFanHighCommand from "./commands/ceiling-fan-high"
import CeilingFanMediumCommand from "./commands/ceiling-fan-medium"
import CeilingFanOffCommand from "./commands/ceiling-fan-off"
import Command from "./commands/command"
import MacroCommand from "./commands/macro-command"

/*
function main() {
  // Invoker
  const remote: SimpleRemoteControl = new SimpleRemoteControl()
  // Receivers
  const light: Light = new Light()
  const garageDoor: GarageDoor = new GarageDoor()
  // Commands
  const lightOn: LightOnCommand = new LightOnCommand(light)
  const garageOpen: GarageDoorOpenCommand = new GarageDoorOpenCommand(garageDoor)

  remote.setCommand(lightOn)
  remote.buttonWasPressed()
  remote.setCommand(garageOpen)
  remote.buttonWasPressed()
}
*/

function main() {
  // Invoker
  const remoteControl: RemoteControl = new RemoteControl()
  // Receivers
  const stereo: Stereo = new Stereo()
  const ceilingFan: CeilingFan = new CeilingFan('Living Room')
  // Commands
  const stereoOnCommand: StereoOnWithCDCommand = new StereoOnWithCDCommand(stereo)
  const stereoOffCommand: StereoOffCommand = new StereoOffCommand(stereo)
  const ceilingFanHighCommand: CeilingFanHighCommand = new CeilingFanHighCommand(ceilingFan)
  const ceilingFanMediumCommand: CeilingFanMediumCommand = new CeilingFanMediumCommand(ceilingFan)
  const ceilingFanOffCommand: CeilingFanOffCommand = new CeilingFanOffCommand(ceilingFan)
  const doAlotOfStuff: Array<Command> = [stereoOnCommand, ceilingFanHighCommand]
  const stopAlotOfStuff: Array<Command> = [stereoOffCommand, ceilingFanOffCommand]
  const onMacro: MacroCommand = new MacroCommand(doAlotOfStuff)
  const offMacro: MacroCommand = new MacroCommand(stopAlotOfStuff)

  remoteControl.setCommand(0, stereoOnCommand, stereoOffCommand)
  remoteControl.setCommand(1, ceilingFanHighCommand, ceilingFanOffCommand)
  remoteControl.setCommand(2, ceilingFanMediumCommand, ceilingFanOffCommand)
  remoteControl.setCommand(3, onMacro, offMacro)
  console.log(remoteControl)

  // remoteControl.onButtonWasPushed(0)
  // remoteControl.offButtonWasPushed(0)

  // remoteControl.onButtonWasPushed(1)
  // remoteControl.offButtonWasPushed(1)
  // remoteControl.undoButtonWasPushed()

  // remoteControl.onButtonWasPushed(2)
  // remoteControl.undoButtonWasPushed()

  remoteControl.onButtonWasPushed(3)
  remoteControl.offButtonWasPushed(3)
}

main()