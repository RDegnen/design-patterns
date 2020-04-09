interface Dough {
  create(): void
}

class ThinCrustDough implements Dough {
  public create(): void {
    console.log('Creating thin crust dough')
  }
}

class ThickCrustDough implements Dough {
  create(): void {
    console.log('Creating thick crust dough')
  }
}

class DefaultDough implements Dough {
  public create(): void {
    console.log('this dough sucks')
  }
}

export {
  Dough,
  ThinCrustDough,
  ThickCrustDough,
  DefaultDough
}