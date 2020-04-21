import { menuComponentIterator } from "../types";
import MenuComponent from "../menus/menu-component";

export default class NullIterator
  implements menuComponentIterator {
    public next(): IteratorResult<MenuComponent> {
      return { value: null, done: true }
    }
  }