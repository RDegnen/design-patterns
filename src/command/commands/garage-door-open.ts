import Command from "./command";
import GarageDoor from "../vendor-classes/garage-door";

export default class GarageDoorOpenCommand implements Command {
  garageDoor: GarageDoor

  constructor(garageDoor: GarageDoor) {
    this.garageDoor = garageDoor
  }

  public execute(): void {
    this.garageDoor.up()
  }

  public undo(): void {
    this.garageDoor.down()
  }
}