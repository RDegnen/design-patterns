import Menu from "./menus/menu";

export default class Waitress {
  menus: Menu<any>[]

  constructor(menus: Menu<any>[]) {
    this.menus = menus
  }

  public printMenu(): void {
    this.menus.forEach(menu => {
      console.log('----')
      this.printMenuHelper(menu.createIterator())
    })
  }

  private printMenuHelper(iterator: Iterator<any>): void {
    let done: boolean | undefined = false
    while (!done) {
      const { value, done: isDone } = iterator.next()
      done = isDone
      console.log(`${value.getName()}, ${value.getPrice()} -- ${value.getDescription()}`)
    }
  }
}