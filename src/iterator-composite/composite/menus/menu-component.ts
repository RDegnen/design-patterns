export default abstract class MenuComponent {
  public add(menuComponent: MenuComponent): void {
    throw new Error('Unsupported operation')
  }

  public remove(menuComponent: MenuComponent): void {
    throw new Error('Unsupported operation')
  }

  public getChild(i: number): MenuComponent {
    throw new Error('Unsupported Operation')
  }

  public getName(): string {
    throw new Error('Unsupported Operation')
  }

  public getDescription(): string {
    throw new Error('Unsupported Operation')
  }

  public getPrice(): number {
    throw new Error('Unsupported Operation')
  }

  public isVegetarian(): boolean {
    throw new Error('Unsupported Operation')
  }

  public print(): void {
    throw new Error('Unsupported Operation')
  }

  abstract createIterator(): Iterator<MenuComponent>
}
