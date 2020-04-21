import MenuComponent from "./menus/menu-component";
import { menuComponentIterator } from "./types";

export default class Waitress {
  allMenus: MenuComponent

  constructor(allMenus: MenuComponent) {
    this.allMenus = allMenus
  }

  public printMenus(): void {
    this.allMenus.print()
  }

  public printVegetarianMenu(): void {
    let done: boolean | undefined = false
    const iterator: menuComponentIterator = this.allMenus.createIterator()

    console.log('\nVEGETARIAN MENU--------')
    while (!done) {
      const { value, done: isDone } = iterator.next()
      done = isDone
      
      try {
        if (value.isVegetarian()) {
          value.print()
        }
      } catch (err) {}
    }
  }
}