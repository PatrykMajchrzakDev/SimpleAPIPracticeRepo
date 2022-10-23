document
  .querySelector("button")
  .addEventListener("click", getRandomPokemonAsBackgroundPhoto);

//Function to run main fetch
function getRandomPokemonAsBackgroundPhoto() {
  pickRandomAbility();
}

//Function where random ability is picked and returns forwarded from other secondary fetch functions

//This function picks random ability
async function pickRandomAbility() {
  const response = await fetch(`https://pokeapi.co/api/v2/ability/`);
  if (!response.ok) {
    throw new Error(`HTTP error: ${response.status}`);
  }
  data = await response.json();
  const getLengthOfAbilitiesList = data.count;
  let random = Math.floor(Math.random() * getLengthOfAbilitiesList);
  //randomAbility gets random ability from full list of abilities
  let randomAbility = await getFullListOfAbilities(
    getLengthOfAbilitiesList,
    random
  );

  //pokemon - is url response where pokemon from previous random ability is picked
  let pokemon = await getPokemonOfGivenRandomAbility(randomAbility.url);

  //This adds picked pokemon as bg img
  document.querySelector("body").style.backgroundImage = `url(${pokemon})`;
}

//Function to get full list of abilities
async function getFullListOfAbilities(getLengthOfAbilitiesList, random) {
  const response = await fetch(
    `https://pokeapi.co/api/v2/ability/?limit=${getLengthOfAbilitiesList}`
  );
  if (!response.ok) {
    throw new Error(`HTTP error: ${response.status}`);
  }
  const data = await response.json();
  const randomAbility = await data.results[random];
  return randomAbility;

  //Function that picks first pokemon of matching pokemons
}
async function getPokemonOfGivenRandomAbility(randomAbility) {
  const response = await fetch(`${randomAbility}`);
  if (!response.ok) {
    throw new Error(`HTTP error: ${response.status}`);
  }
  const data = await response.json();
  const pokemon = await data.pokemon[0].pokemon.url;

  //pokemonsPhoto returns url to picked pokemon
  let pokemonsPhoto = await getPokemonsPhoto(pokemon);
  return pokemonsPhoto;

  //This function returns url of picked pokemon
  async function getPokemonsPhoto(pokemon) {
    const response = await fetch(`${pokemon}`);
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    const data = await response.json();
    return await data.sprites.back_default;
  }
}
