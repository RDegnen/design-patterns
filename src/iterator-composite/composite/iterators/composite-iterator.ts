import MenuComponent from "../menus/menu-component";
import { menuComponentIterator } from "../types";

export default class CompositeIterator
  implements menuComponentIterator {
    stack: menuComponentIterator[] = []

    constructor(iterator: menuComponentIterator) {
      this.stack.push(iterator)
    }
    // Not working
    public next(): IteratorResult<MenuComponent> {
      if (this.hasNext()) {
        const iterator: menuComponentIterator = this.stack[this.stack.length - 1]
        const component: MenuComponent = iterator.next().value

        component ? this.stack.push(component.createIterator()) : console.log('null')

        return { value: component, done: this.hasNext() }
      } else {
        return { value: null, done: true }
      }
    }

    public hasNext(): boolean {
      if (this.stack.length === 0) {
        return false
      } else {
        const iterator: menuComponentIterator = this.stack[this.stack.length - 1]
        if (iterator.next().done) {
          this.stack.pop()
          return this.hasNext()
        } else {
          return true
        }
      }
    }
  }