let number = Math.floor(Math.random() * 905) + 1;
getPokemon();

async function getPokemon() {
  let number = Math.floor(Math.random() * 905) + 1;
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${number}`);
  let data = await response.json();
  // Fetches pokemon name and ID, removes current name and number to implement itself
  let pokeName = document.createElement("p");
  document.getElementById("name").remove();
  pokeName.textContent = `#${data.id} ||--${data.name}--||`;
  pokeName.classList.add("name");
  pokeName.setAttribute("id", "name");
  document.getElementById("nameDiv").append(pokeName);

  // Fetches image of pokemon and inputs it in the card
  let image = document.createElement("img");
  document.getElementById("pokemon").remove();
  image.setAttribute("id", "pokemon");
  image.src = data.sprites.front_default;
  document.getElementById("pokemonDiv").append(image);

  // Fetches ability of pokemon and inputs it in the card
  let ability = document.createElement("p");
  document.getElementById("ability").remove();
  ability.textContent = `Ability: ${data.abilities[0].ability.name}`;
  ability.classList.add("ability");
  ability.setAttribute("id", "ability");
  document.getElementById("abilityDiv").append(ability);

  // Fetches move of pokemon and inputs it in the card
  let move = document.createElement("p");
  document.getElementById("move").remove();
  move.textContent = `Move: ${data.moves[0].move.name}`;
  move.classList.add("move");
  move.setAttribute("id", "move");
  document.getElementById("moveDiv").append(move);
}
