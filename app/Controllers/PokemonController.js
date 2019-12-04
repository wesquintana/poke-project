import PokemonService from "../Services/PokemonService.js";
import store from "../store.js";

//Private
function _drawWildPokemon() {
  let template = "";
  let wildPokemen = store.State.wildPokemon;
  wildPokemen.forEach(pokemon => (template += pokemon.Template));
  document.querySelector("#wild-pokemon").innerHTML = template;
}
function _drawCaughtPokemon() {
  let template = "";
  let caughtPokemen = store.State.caughtPokemon;
  caughtPokemen.forEach(pokemon => (template += pokemon.CaughtTemplate));
  document.querySelector("#caught-pokemon").innerHTML = template;
}

//Public
export default class PokemonController {
  constructor() {
    store.subscribe("wildPokemon", _drawWildPokemon);
    store.subscribe("caughtPokemon", _drawCaughtPokemon);
  }
  async getWildPokemonAsync() {
    debugger;
    try {
      await PokemonService.getWildPokemonAsync();
    } catch (error) {}
  }
  async catchPokemonAsync(id) {
    debugger;
    try {
      await PokemonService.catchPokemonAsync(id);
    } catch (error) {}
  }
  async releasePokemonAsync(id) {
    try {
      await PokemonService.releasePokemonAsync(id);
    } catch (error) {}
  }
}
