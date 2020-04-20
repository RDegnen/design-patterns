import Menu from "./menus/menu"
import MenuComponent from "./menus/menu-component"
import {
  addPancakeHouseMenu,
  addDinerMenuFood,
  addDessertMenu
} from './helpers'
import Waitress from "./waitress"

/**
 * The Composite Pattern allows you to compose objects into tree
 * structures to represent part-whole hierarchies. Composite lets
 * clients treat individual objects and compositions of objects
 * uniformly
 */
function main () {
  const pancakeHouseMenu: MenuComponent = new Menu('PANCAKE HOUSE MENU', 'Breakfast')
  const dinerMenu: MenuComponent = new Menu('DINER MENU', 'Lunch')
  const dessertMenu: MenuComponent = new Menu('DESSERT MENU', 'Dessert of course!')
  const allMenus: MenuComponent = new Menu('ALL MENUS', 'All menus combined')

  allMenus.add(pancakeHouseMenu)
  allMenus.add(dinerMenu)

  addPancakeHouseMenu(pancakeHouseMenu)
  addDinerMenuFood(dinerMenu)
  dinerMenu.add(dessertMenu)
  addDessertMenu(dessertMenu)

  const waitress: Waitress = new Waitress(allMenus)
  waitress.printMenus()
}

main()