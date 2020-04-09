// Perhaps try abstracting this so other classes can implement it
export default class Singleton {
  private static uniqueInstance: Singleton

  private constructor() {}

  public static getInstance(): Singleton {
    if (this.uniqueInstance === null) {
      this.uniqueInstance = new Singleton()
    }
    return this.uniqueInstance
  }

  // more class code...
}