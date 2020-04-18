import PancakeHouseMenu from "./menus/pancake-house-menu";
import DinerMenu from "./menus/diner-menu";
import MyIterator from "./iterators/iterator";
import MenuItem from "./menus/menu-item";

export default class Waitress {
  pancakeHouseMenu: PancakeHouseMenu
  dinerMenu: DinerMenu

  constructor(
    pancakeHouseMenu: PancakeHouseMenu,
    dinerMenu: DinerMenu
  ) {
    this.pancakeHouseMenu = pancakeHouseMenu
    this.dinerMenu = dinerMenu
  }

  public printMenu(): void {
    const pancakeIterator: MyIterator<MenuItem> = this.pancakeHouseMenu.createIterator()
    const dinerIterator: MyIterator<MenuItem | undefined> =
      this.dinerMenu.createIterator()

    console.log('MENU\n----\nBREAKFAST')
    this.printMenuHelper(pancakeIterator)
    console.log('\nLUNCH')
    this.printMenuHelper(dinerIterator)
  }

  private printMenuHelper(iterator: MyIterator<any>): void {
    while (iterator.hasNext()) {
      const menuItem: MenuItem = iterator.next()
      console.log(`${menuItem.getName()}, ${menuItem.getPrice()} -- ${menuItem.getDescription()}`)
    }
  }
}