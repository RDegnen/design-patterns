import PancakeHouseMenu from "./menus/pancake-house-menu"
import DinerMenu from "./menus/diner-menu"
import Waitress from "./waitress"

/**
 * The Iterator Pattern provides a way to access the elements of an
 * aggregate object sequentially without exposing its underlying
 * representation
 */
function main() {
  const pancakeHouseMenu: PancakeHouseMenu = new PancakeHouseMenu()
  const dinerMenu: DinerMenu = new DinerMenu()

  const waitress: Waitress = new Waitress([pancakeHouseMenu, dinerMenu])

  waitress.printMenu()
}

main()