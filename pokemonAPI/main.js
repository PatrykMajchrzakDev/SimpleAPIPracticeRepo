document.querySelector("button").addEventListener("click", getRandom);

function getRandom() {
  pickRandomAbility();
}

function pickRandomAbility() {
  fetch(`https://pokeapi.co/api/v2/ability/`)
    .then((res) => res.json())
    .then((data) => {
      // console.log(data);
      const getLengthOfAbilitiesList = data.count;
      let random = Math.floor(Math.random() * getLengthOfAbilitiesList);
      getFullListOfAbilities(getLengthOfAbilitiesList, random);
    })
    .catch((err) => {
      console.log(err);
    });
}
function getFullListOfAbilities(getLengthOfAbilitiesList, random) {
  let a = fetch(
    `https://pokeapi.co/api/v2/ability/?limit=${getLengthOfAbilitiesList}`
  )
    .then((res) => res.json())
    .then((data) => {
      let randomAbility = data.results[random];
      return randomAbility;
    })
    .catch((err) => {
      console.log(err);
    });
}
