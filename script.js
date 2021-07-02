let base_URL = "https://pokeapi.co/api/v2/pokemon/";

function getPokemonList(url) {
  fetch(url)
    .then((response) => response.json())

    .then((data) => {
      console.log(data);

      let pokemon = data.results;

      let container = document.querySelector(".pokemon-list-container");

      container.innerHTML = "";

      pokemon.forEach((btn) => {
        container.innerHTML += `<button class="btn" onclick="getPokemonInfo('${btn.url}')">${btn.name}</button>`;
      });

      container.innerHTML += `<br><br><button  class="button" onclick="getPokemonList('${data.next}')">Next</button>`;
    });
}

getPokemonList(base_URL);

function getPokemonInfo(url) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      document.querySelector(".pokemon-info").innerHTML = `
      <h1>${data.name}</h1>
    <img src="${data.sprites.front_default} ">
    `;

      getDesc(data.species.url);
    });
}

function getDesc(url) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      document.querySelector(".pokemon-desc").textContent =
        data.flavor_text_entries[1].flavor_text;
    });
}
