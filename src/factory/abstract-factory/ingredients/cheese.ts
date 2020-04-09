interface Cheese {
  create(): void
}

class Mozarella implements Cheese {
  public create(): void {
    console.log('Creating Mozzarella cheese')
  }
}

class Reggiano implements Cheese {
  public create(): void {
    console.log('Creating Reggiano cheese')
  }
}

class DefaultCheese implements Cheese {
  public create(): void {
    console.log('this cheese sucks')
  }
}

export {
  Cheese,
  Mozarella,
  Reggiano,
  DefaultCheese
}