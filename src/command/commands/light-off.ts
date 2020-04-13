import Command from "./command"
import Light from '../vendor-classes/light'

export default class LightOnCommand implements Command {
  light: Light

  constructor(light: Light) {
    this.light = light
  }

  public execute(): void {
    this.light.off()
  }

  public undo(): void {
    this.light.on()
  }
}