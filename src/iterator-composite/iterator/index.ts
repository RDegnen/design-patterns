import PancakeHouseMenu from "./menus/pancake-house-menu"
import DinerMenu from "./menus/diner-menu"
import Waitress from "./waitress"

function main() {
  const pancakeHouseMenu: PancakeHouseMenu = new PancakeHouseMenu()
  const dinerMenu: DinerMenu = new DinerMenu()

  const waitress: Waitress = new Waitress(pancakeHouseMenu, dinerMenu)

  waitress.printMenu()
}

main()