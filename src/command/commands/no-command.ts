import Command from "./command";

export default class NoCommand implements Command {
  public execute(): void {}
  public undo(): void {}
}