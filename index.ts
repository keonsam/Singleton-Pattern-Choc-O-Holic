import { ChocolateBoiler } from "./src/ChocolateBoiler";

class ChocOHolic {
  main() {
    const chocolateBoiler = ChocolateBoiler.getInstance();
    chocolateBoiler.fill();
    chocolateBoiler.boil();
    chocolateBoiler.drain();
    console.log("done.");
  }
}

new ChocOHolic().main();