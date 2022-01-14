export class ChocolateBoiler {
  private static uniqueInstance = new ChocolateBoiler();
  private empty: boolean;
  private boiled: boolean;

  private constructor() {
    this.empty = true;
    this.boiled = false;
  }

  static getInstance() {
    return this.uniqueInstance;
  }

  fill(): void {
    if (this.isEmpty()) {
      console.log("filling boiler...");
      this.empty = false;
      this.boiled = false;
    }
  }

  drain(): void {
    if (!this.isEmpty() && this.isBoiled()) {
      console.log("draining boiler...");
      this.empty = true;
    }
  }

  boil(): void {
    if (!this.isEmpty() && !this.isBoiled()) {
      console.log("boiling...");
      this.boiled = true;
    }
  }

  isEmpty(): boolean {
    return this.empty;
  }

  isBoiled(): boolean {
    return this.boiled;
  }
}
