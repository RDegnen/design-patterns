import MyIterator from "./iterator";
import MenuItem from "../menus/menu-item";

export default class DinerMenuIterator implements MyIterator<MenuItem | undefined> {
  items: Map<number, MenuItem>
  position: number = 0

  constructor(items: Map<number, MenuItem>) {
    this.items = items
  }

  public next(): MenuItem | undefined {
    const menuItem: MenuItem | undefined = this.items.get(this.position)
    this.position += 1
    return menuItem
  }

  public hasNext(): boolean {
    if (this.position >= this.items.size - 1) {
      return false
    }
    return true
  }
}