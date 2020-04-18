import MenuItem from "./menu-item"
import MyIterator from "../iterators/my-iterator"
import DinerMenuIterator from "../iterators/diner-menu-iterator"
import NativeDinerIterator from "../iterators/native-diner-iterator"
import Menu from "./menu"

export default class DinerMenu implements Menu<MenuItem | undefined> {
  menuItems: Map<number, MenuItem>

  constructor() {
    this.menuItems = new Map<number, MenuItem>()
    this.addItem(
      0, 
      "Vegetarian BLT",
      "(Fakin') Bacon with lettuce & tomato on whole wheat", 
      true, 
      2.99
    )
		this.addItem(
      1, 
      "BLT",
      "Bacon with lettuce & tomato on whole wheat", 
      false, 
      2.99
    )
		this.addItem(
      2, 
      "Soup of the day",
      "Soup of the day, with a side of potato salad", 
      false, 
      3.29
    )
		this.addItem(
      3, 
      "Hotdog",
			"A hot dog, with saurkraut, relish, onions, topped with cheese",
      false, 
      3.05
    )
		this.addItem(
      4, 
      "Steamed Veggies and Brown Rice",
      "Steamed vegetables over brown rice", 
      true, 
      3.99
    )
		this.addItem(
      5, 
      "Pasta",
			"Spaghetti with Marinara Sauce, and a slice of sourdough bread",
      true, 
      3.89
    )
  }

  public addItem(
    key: number,
    name: string,
    description: string,
    vegetarian: boolean,
    price: number
  ): void {
    this.menuItems.set(key, new MenuItem(name, description, vegetarian, price))
  }
  
  /**
   * Custom iterator
   */
  // public createIterator(): MyIterator<MenuItem | undefined> {
  //   return new DinerMenuIterator(this.menuItems)
  // }

  /**
   * Typescript's Iterator
   */
  public createIterator(): Iterator<MenuItem | undefined> {
    return new NativeDinerIterator(this.menuItems)
  }
}