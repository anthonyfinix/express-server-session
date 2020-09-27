(async function () {
  if (window.location.pathname === "/") {
    let recipeWrapper = document.getElementById("recipe-wrapper");
    const { data } = await axios.get("http://localhost:5000/api");
    if (data) {
      let cardColumn = document.createElement("div");
      cardColumn.classList.add('container');
      let cards = data.items.map((item) => {
        return `<div class="card my-2">
        <div class="card-body">
            ${item.snippet.title}
        </div>
    </div>`;
      });
      cardColumn.innerHTML = cards;
      recipeWrapper.querySelector("#loading-wrapper").remove();
      recipeWrapper.appendChild(cardColumn);
    }
  }
})();
