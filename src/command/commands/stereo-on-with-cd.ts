import Command from "./command";
import Stereo from "../vendor-classes/stereo";

export default class StereoOnWithCDCommand
implements Command {
  stereo: Stereo

  constructor(stereo: Stereo) {
    this.stereo = stereo
  }

  public execute(): void {
    this.stereo.on()
    this.stereo.setCd()
    this.stereo.setVolume(11)
  }

  public undo(): void {
    this.stereo.off()
  }
}