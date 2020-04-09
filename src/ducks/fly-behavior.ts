interface FlyBehavior {
  fly(): void
}

class FlyWithWings implements FlyBehavior {
  fly() {
    console.log('Flying with wings')
  }
}

class FlyNoWay implements FlyBehavior {
  fly() {
    console.log('Cant fly!')
  }
}

class FlyRockedPowered implements FlyBehavior {
  fly() {
    console.log('Flying with a rocket!')
  }
}

export {
  FlyBehavior,
  FlyWithWings,
  FlyNoWay,
  FlyRockedPowered
}