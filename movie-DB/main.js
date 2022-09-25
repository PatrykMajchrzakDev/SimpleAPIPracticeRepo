document.querySelector("button").addEventListener("click", getFetch);

function getFetch() {
  let inputValue = document.querySelector("input").value;
  fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=bfb46182869ffa43d237139d1ab819d7&query=${inputValue}`
  )
    .then((res) => res.json())
    .then((data) => {
      //check if there are previously created divs
      let moviesContainer = document.querySelector(".moviesContainer");
      if (moviesContainer.firstChild) {
        let divs = document.querySelectorAll(".movieSection");
        divs.forEach((element) => {
          element.remove();
        });
      }

      for (let i = 0; i <= data.results.length - 1; i++) {
        //create div
        let div = document.createElement("div");
        moviesContainer.appendChild(
          div
        ).className = `movieSection${i} movieSectionGeneral`;

        //create h2
        let h2 = document.createElement("h2");
        document
          .querySelector(`.movieSection${i}`)
          .appendChild(h2).textContent = `${data.results[i].original_title}`;
        //create img
        let img = document.createElement("img");
        document
          .querySelector(`.movieSection${i}`)
          .appendChild(
            img
          ).src = `https://image.tmdb.org/t/p/original/${data.results[i].poster_path}`;

        //create p
        let p = document.createElement("p");
        document
          .querySelector(`.movieSection${i}`)
          .appendChild(p).textContent = `${data.results[i].overview}`;
      }
    })
    .catch((err) => {
      console.log(`The error is: -- ${err}`);
    });
}
