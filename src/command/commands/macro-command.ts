import Command from "./command";

export default class MacroCommand implements Command {
  commands: Array<Command>

  constructor(commands: Array<Command>) {
    this.commands = commands
  }

  public execute(): void {
    this.commands.forEach(cmd => cmd.execute())
  }

  public undo(): void {
    this.commands.forEach(cmd => cmd.undo())
  }
}