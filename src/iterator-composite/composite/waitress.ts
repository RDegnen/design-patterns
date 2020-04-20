import MenuComponent from "./menus/menu-component";

export default class Waitress {
  allMenus: MenuComponent

  constructor(allMenus: MenuComponent) {
    this.allMenus = allMenus
  }

  public printMenus(): void {
    this.allMenus.print()
  }
}