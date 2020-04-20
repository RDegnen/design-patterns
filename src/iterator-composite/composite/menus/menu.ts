import MenuComponent from "./menu-component";
import MenuComponentIterator from "../iterators/menu-component-iterator";

export default class Menu extends MenuComponent {
  menuComponents: MenuComponent[] = []
  name: string
  description: string

  constructor(name: string, description: string) {
    super()
    this.name = name
    this.description = description
  }

  public add(menuComponent: MenuComponent): void {
    this.menuComponents.push(menuComponent)
  }

  public remove(menuComponent: MenuComponent): void {
    const i = this.menuComponents.indexOf(menuComponent)
    this.menuComponents.splice(i, 1)
  }

  public getChild(i: number): MenuComponent {
    return this.menuComponents[i]
  }

  public getName(): string {
    return this.name
  }

  public getDescription(): string {
    return this.description
  }

  public print(): void {
    console.log(`\n${this.getName()}, ${this.getDescription()}--------------------`)
    let done: boolean | undefined = false
    const iterator: MenuComponentIterator = new MenuComponentIterator(this.menuComponents)

    while (!done) {
      const { value, done: isDone } = iterator.next()
      done = isDone
      value.print()
    }
  }
}