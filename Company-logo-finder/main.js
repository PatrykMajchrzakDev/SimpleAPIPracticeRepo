let url = `https://wizard-world-api.herokuapp.com/swagger/v1/swagger.json`;
function getFetch(url) {
  fetch(url, {
    mode: "cors",
  })
    .then((res) => res.json()) // parse response as JSON
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}

getFetch(url);
