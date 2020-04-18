import MenuItem from "./menu-item";
import MyIterator from "../iterators/iterator";
import PancakeHouseIterator from "../iterators/pancake-house-iterator";

export default class PancakeHouseMenu {
  menuItems: MenuItem[]

  constructor() {
    this.menuItems = []

    this.addItem(
      "K&B's Pancake Breakfast", 
      "Pancakes with scrambled eggs, and toast", 
      true,
      2.99
    )

    this.addItem(
      "Regular Pancake Breakfast", 
			"Pancakes with fried eggs, sausage", 
			false,
      2.99
    )
 
		this.addItem(
      "Blueberry Pancakes",
			"Pancakes made with fresh blueberries, and blueberry syrup",
			true,
      3.49
    )
 
		this.addItem(
      "Waffles",
			"Waffles, with your choice of blueberries or strawberries",
			true,
      3.59
    )
  }

  public addItem(
    name: string,
    description: string,
    vegetarian: boolean,
    price: number
  ): void {
    this.menuItems.push(new MenuItem(name, description, vegetarian, price))
  }

  public createIterator(): MyIterator<MenuItem> {
    return new PancakeHouseIterator(this.menuItems)
  }
}