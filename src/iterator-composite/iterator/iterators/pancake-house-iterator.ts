import MyIterator from "./iterator";
import MenuItem from "../menus/menu-item";

export default class PancakeHouseIterator implements MyIterator<MenuItem> {
  items: MenuItem[]
  position: number = 0

  constructor(items: MenuItem[]) {
    this.items = items
  }

  public next(): MenuItem {
    const menuItem: MenuItem = this.items[this.position]
    this.position += 1
    return menuItem
  }

  public hasNext(): boolean {
    if (this.position >= this.items.length - 1) {
      return false
    }
    return true
  }
}