import Command from "./commands/command";
import NoCommand from "./commands/no-command";

export default class RemoteControl {
  onCommands: Array<Command> = []
  offCommands: Array<Command> = []
  slotsLength: number = 7

  constructor() {
    for (let i = 0; i < this.slotsLength; i++) {
      this.onCommands[i] = new NoCommand()
      this.offCommands[i] = new NoCommand()
    }
  }

  public setCommand(
    slot: number, 
    onCommand: Command, 
    offCommand: Command
  ): void {
    this.onCommands[slot] = onCommand
    this.offCommands[slot] = offCommand
  }

  public onButtonWasPushed(slot: number): void {
    this.onCommands[slot].execute()
  }

  public offButtonWasPushed(slot: number): void {
    this.offCommands[slot].execute()
  }

  public toString(): string {
    const stringBuff: Array<string> = []
    stringBuff.push('\n ------ Remote Control ------ \n')
    for (let i = 0; i < this.onCommands.length; i++) {
      stringBuff.push(`[slot ${i}] ${this.onCommands[i].constructor()} ${this.offCommands[i].constructor()}\n`)
    }
    return stringBuff.toString()
  }
}