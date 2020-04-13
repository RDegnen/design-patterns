import SimpleRemoteControl from "./simple-remote-control"
import Light from "./vendor-classes/light"
import LightOnCommand from "./commands/light-on"
import GarageDoor from "./vendor-classes/garage-door"
import GarageDoorOpenCommand from "./commands/garage-door-open"
import RemoteControl from "./remote-control"
import StereoOnWithCDCommand from "./commands/stereo-on-with-cd"
import Stereo from "./vendor-classes/stereo"
import StereoOffCommand from "./commands/stereo-off"

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
  // Commands
  const stereoOnCommand: StereoOnWithCDCommand = new StereoOnWithCDCommand(stereo)
  const stereoOffCommand: StereoOffCommand = new StereoOffCommand(stereo)

  remoteControl.setCommand(0, stereoOnCommand, stereoOffCommand)

  remoteControl.onButtonWasPushed(0)
  remoteControl.offButtonWasPushed(0)

  remoteControl.onButtonWasPushed(1)
  remoteControl.offButtonWasPushed(1)
}

main()