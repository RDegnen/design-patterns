export default abstract class CaffeineBeverage {
  async prepareRecipe(): Promise<void> {
    this.boilWater()
    this.brew()
    this.pourInCup()
    if (await this.customerWantsCondiments()) {
      this.addCondiments()
    }
  }

  abstract brew(): void

  abstract addCondiments(): void

  boilWater(): void {
    console.log('Boiling water')
  }

  pourInCup(): void {
    console.log('Pouring into cup')
  }

  /**
   * "hook" method
   * provides a method that a subclass can optionally
   * override and hook into the algorithim.
   */
  async customerWantsCondiments(): Promise<boolean> {
    return true
  }
}