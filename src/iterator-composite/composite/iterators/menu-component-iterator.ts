import MenuComponent from "../menus/menu-component";

export default class MenuComponentIterator
  implements Iterator<MenuComponent> {
    items: MenuComponent[]
    position: number = 0

    constructor(items: MenuComponent[]) {
      this.items = items
    }

    public next(): IteratorResult<MenuComponent> {
      const menuComponent: MenuComponent = this.items[this.position]
      const result = { value: menuComponent, done: !this.hasNext() }
      this.position += 1
      return result
    }
  
    private hasNext(): boolean {
      if (this.position >= this.items.length - 1) {
        return false
      }
      return true
    }
  }