interface QuackBehavior {
  quack(): void
}

class Quack implements QuackBehavior {
  quack() {
    console.log('quack quack')
  }
}

class Squak implements QuackBehavior {
  quack() {
    console.log('squeak squeak')
  }
}

class MuteQuack implements QuackBehavior {
  quack() {
    console.log('silence...')
  }
}

export {
  QuackBehavior,
  Quack,
  Squak,
  MuteQuack
}