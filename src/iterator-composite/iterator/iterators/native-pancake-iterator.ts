import MenuItem from "../menus/menu-item";

export default class NativePancakeIterator implements Iterator<MenuItem> {
  items: MenuItem[]
  position: number = 0

  constructor(items: MenuItem[]) {
    this.items = items
  }

  public next(): IteratorResult<MenuItem> {
    const menuItem: MenuItem = this.items[this.position]
    const result = { value: menuItem, done: !this.hasNext() }
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