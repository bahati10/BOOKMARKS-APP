const form = document.querySelector(".form");
const card = document.querySelector(".card");

const all_items = JSON.parse(localStorage.getItem("items"));

all_items?.map((item) => {
   card.innerHTML += `
        <div class="card">
      <div class="card-text">
            <span       class="name">${item.name}</span>
            <h2>${item.category}</h2>
            <p>${item.description}</p>
        </div>
        <div class="card-stats">
           <div>
                <a href="${item.url}">
                     <input id="visit" type="button" value="VISIT">
                </a>
            </div>
        </div>
    </div>`
})

form.addEventListener("submit", async (e) => {
    e.preventDefault();
   const name = e.target.name.value;
   const url = e.target.url.value;
   const category = e.target.category.value;
const description = e.target.description.value;

const data = {
    name, url, category, description
}
const items = localStorage.getItem("items");

if(items){
    const _items = JSON.parse(items);
    localStorage.setItem("items",JSON.stringify([..._items, data]));
    window.location.reload()
}

if(!items){
    localStorage.setItem("items", JSON.stringify([data]));
    window.location.reload();
  
}
})