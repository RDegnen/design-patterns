import Command from "./commands/command";

export default class SimpleRemoteControl {
  slot!: Command

  constructor() {}

  public setCommand(command: Command): void {
    this.slot = command
  }

  public buttonWasPressed(): void {
    this.slot.execute()
  }
}