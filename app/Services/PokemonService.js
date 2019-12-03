import Store from "../store.js";
//@ts-ignore
let _pokeapi = axios.create({
  baseURL: "https://api.nasa.gov/planetary",
  timeout: 8000
});
class PokemonService {}

const service = new PokemonService();
export default service;
