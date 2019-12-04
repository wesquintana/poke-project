import Store from "../store.js";
import Pokemon from "../Models/Pokemon.js";
import store from "../store.js";
//@ts-ignore
let _pokeapi = axios.create({
  baseURL: "https://pokeapi.co/api/v2/pokemon",
  timeout: 8000
});
//@ts-ignore
let _sandbox = axios.create({
  baseURL: "https://bcw-sandbox.herokuapp.com/api/wesquintana/pokemon",
  timeout: 8000
});
class PokemonService {
  constructor() {
    this.getWildPokemonAsync();
    this.getCaughtPokemonAsync();
  }
  async getWildPokemonAsync() {
    let wildPokemen = [...store.State.wildPokemon];
    for (let i = 0; i < 20; i++) {
      let pokemonIndex = Math.floor(Math.random() * 807) + 1;
      let res = await _pokeapi.get("" + pokemonIndex);
      let newPokemon = new Pokemon(res.data);
      wildPokemen.push(newPokemon);
    }
    Store.commit("wildPokemon", wildPokemen);
  }
  async getCaughtPokemonAsync() {
    let res = await _sandbox.get();
    let results = res.data.data.map(rawData => new Pokemon(rawData));
    store.commit("caughtPokemon", results);
  }
  async catchPokemonAsync(id) {
    let addedPokemon = store.State.wildPokemon.find(
      pokemon => pokemon._id == id
    );
    let res = await _sandbox.post("", addedPokemon);
    let newPokemon = new Pokemon(res.data.data);
    let caughtPokemen = [...Store.State.caughtPokemon, newPokemon];
    store.commit("caughtPokemon", caughtPokemen);
  }
  async releasePokemonAsync(id) {
    let res = await _sandbox.delete(id);
    let index = store.State.caughtPokemon.findIndex(p => p._id == id);
    store.State.caughtPokemon.splice(index, 1);
    store.commit("caughtPokemon", store.State.caughtPokemon);
  }
}

const service = new PokemonService();
export default service;
