interface Sauce {
  create(): void
}

class PlumTomatoSauce implements Sauce {
  public create(): void {
    console.log('Creating plum tomato sauce')
  }
}

class MarinaraSauce implements Sauce {
  public create(): void {
    console.log('Creating Marinara sauce')
  }
}

class DefaultSauce implements Sauce {
  public create(): void {
    console.log('this sauce sucks')
  }
}

export {
  Sauce,
  PlumTomatoSauce,
  MarinaraSauce,
  DefaultSauce
}