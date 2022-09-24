let h2 = document.querySelector("h2");
let h3 = document.querySelector("h3");
let h4 = document.querySelector("h4");

let randomSearchButton = document.querySelector("#randomSearch");

document
  .querySelector("#randomSearch")
  .addEventListener("click", getRandomMeal);

document
  .querySelector("#keySearchButton")
  .addEventListener("click", searchMeal);

function getRandomMeal() {
  fetch(`https://themealdb.com/api/json/v1/1/random.php`)
    .then((res) => res.json()) // parse response as JSON
    .then((data) => {
      console.log(data.meals[0]);
      h2.innerText = data.meals[0].strMeal;
      h3.innerText = data.meals[0].strInstructions;
      h4.innerText = data.meals[0].strYoutube;
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}

function searchMeal() {
  let keySearch = document.querySelector("#keywordSearch").value;
  fetch(`https://themealdb.com/api/json/v1/1/search.php?s=${keySearch}`)
    .then((res) => res.json()) // parse response as JSON
    .then((data) => {
      console.log(data.meals.length);
      if (data.meals.length > 1) {
        const pick = Math.floor(Math.random() * data.meals.length);
        console.log(pick);
        h2.innerText = data.meals[pick].strMeal;
        h3.innerText = data.meals[pick].strInstructions;
        h4.innerText = data.meals[pick].strYoutube;
      } else {
        h2.innerText = data.meals[0].strMeal;
        h3.innerText = data.meals[0].strInstructions;
        h4.innerText = data.meals[0].strYoutube;
      }
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}
