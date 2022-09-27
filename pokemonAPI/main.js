document.querySelector("button").addEventListener("click", getRandom());

function getRandom() {
  pickRandomAbility();
}

function pickRandomAbility() {
  fetch(`https://pokeapi.co/api/v2/ability/`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      const getLengthOfAbilitiesList = data.count;
      console.log(getLengthOfAbilitiesList);
      let random = Math.floor(Math.random() * 2);
      console.log(random);
    })
    .catch((err) => {
      console.log(err);
    });
}

// fetch(`https://pokeapi.co/api/v2/`)
//   .then((res) => res.json())
//   .then((data) => {
//     console.log(data);
//     console.log(data.ability);
//     // let listOfAbilities = data.ability;
//     // console.log(listOfAbilities);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
