export default class Value {
  constructor(data) {
    this._id = data.id || data._id;
    this.name = data.name;
    this.img = data.img || data.sprites.front_default;
    this.weight = data.weight;
    this.height = data.height;
    this.types = data.types;
  }

  get Template() {
    return /*html*/ `
    <div class="card mb-2" style="width: 18rem;">
    <img src="${this.img}" class="card-img-top" alt="${this.name} sprite">
    <div class="card-body">
      <p class="card-text"><b>${this.name}</b></p>
      <p class="card-text">Height: ${this.height}</p>
      <p class="card-text">Weight: ${this.weight}</p>
  <button class="btn btn-primary"onclick="app.PokemonController.catchPokemonAsync(${this._id})">Catch</button>
    </div>
  </div>
    `;
  }
  get CaughtTemplate() {
    return /*html*/ `
    <div class="card mb-2" style="width: 18rem;">
    <img src="${this.img}" class="card-img-top" alt="${this.name} sprite">
    <div class="card-body">
      <p class="card-text"><b>${this.name}</b></p>
      <p class="card-text">Height: ${this.height}</p>
      <p class="card-text">Weight: ${this.weight}</p>
  <button class="btn btn-danger"onclick="app.PokemonController.releasePokemonAsync('${this._id}')">Release</button>
    </div>
  </div>
    `;
  }
}
