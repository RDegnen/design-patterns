import Command from "./commands/command";
import NoCommand from "./commands/no-command";

export default class RemoteControl {
  onCommands: Array<Command> = []
  offCommands: Array<Command> = []
  undoCommand: Command
  slotsLength: number = 7

  constructor() {
    const noCommand = new NoCommand()
    for (let i = 0; i < this.slotsLength; i++) {
      this.onCommands[i] = noCommand
      this.offCommands[i] = noCommand
    }

    this.undoCommand = noCommand
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
    this.undoCommand = this.onCommands[slot]
  }

  public offButtonWasPushed(slot: number): void {
    this.offCommands[slot].execute()
    this.undoCommand = this.offCommands[slot]
  }

  public undoButtonWasPushed(): void {
    this.undoCommand.undo()
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