import MenuComponent from "./menu-component";
import { menuComponentIterator } from "../types";
import NullIterator from "../iterators/null-iterator";

export default class MenuItem extends MenuComponent {
  name: string
  description: string
  vegetarian: boolean
  price: number

  constructor(
    name: string,
    description: string,
    vegetarian: boolean,
    price: number
  ) {
    super()
    this.name = name
    this.description = description
    this.vegetarian = vegetarian
    this.price = price
  }

  public getName(): string {
    return this.name
  }

  public getDescription(): string {
    return this.description
  }

  public getPrice(): number {
    return this.price
  }

  public isVegetarian(): boolean {
    return this.vegetarian
  }

  public print(): void {
    const veggieValue = this.isVegetarian ? '(v)': ''
    console.log(`${this.getName()}${veggieValue}, ${this.getPrice()}  -- ${this.getDescription()}`)
  }

  public createIterator(): menuComponentIterator {
    return new NullIterator()
  }
}