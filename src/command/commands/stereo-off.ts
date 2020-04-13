import Command from "./command";
import Stereo from "../vendor-classes/stereo";

export default class StereoOffCommand
implements Command {
  stereo: Stereo

  constructor(stereo: Stereo) {
    this.stereo = stereo
  }

  public execute(): void {
    this.stereo.off()
  }
}