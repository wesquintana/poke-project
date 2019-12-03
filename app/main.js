import PokemonController from "./Controllers/PokemonController.js";

class App {
  valuesController = new PokemonController();
}

window["app"] = new App();
