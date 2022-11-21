const form = document.getElementsByClassName('container');
const cards = document.getElementsByClassName('card'); 

const toBase64 = file => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);

});

const all_items = JSON.parse(localStorage.getItem("items"));

all_items?.map((item) => {
    CanvasGradient.innerHTML += 
`</div>
<div class="card">
<div class="card-image"></div>
<div class="card-text">
    <span class="name">${item.Title}</span>
    <h2>${item.Bookmark}</h2>
    <p>${item.Description}
    </p>
</div>
</div>`
})

form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const title = e.target.siteName.value;
    const url = e.target.siteUrl.value;
    const cat = e.target.cat.value;
    const des = e.target.des.value
}
)

const data = {title, Description, category}


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




