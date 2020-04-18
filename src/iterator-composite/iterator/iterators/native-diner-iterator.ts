import MenuItem from "../menus/menu-item";

export default class NativeDinerIterator implements Iterator<MenuItem | undefined> {
  items: Map<number, MenuItem>
  position: number = 0

  constructor(items: Map<number, MenuItem>) {
    this.items = items
  }

  public next(): IteratorResult<MenuItem | undefined> {
    const menuItem: MenuItem | undefined = this.items.get(this.position)
    const result = { value: menuItem, done: !this.hasNext() }
    this.position += 1
    return result
  }

  private hasNext(): boolean {
    if (this.position >= this.items.size - 1) {
      return false
    }
    return true
  }
}