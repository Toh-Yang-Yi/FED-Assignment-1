
/* side menu pop up */
function SideMenu() {
    const hamburger = document.querySelector(".hamburger") /* to select objects with hamburger as their classes */
    hamburger.onclick = function() {
        navBar = document.querySelector(".nav-bar"); /* select objects with nav-bar as their class */
        navBar.classList.toggle("active") /* Make the dropdown effect when the user clicks on the hamburger bar */
    };
}
SideMenu()




/* merch page */
/* select classes */
let openShopping = document.querySelector('.shopping'); 
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCart');
let body = document.querySelector('.showCart');
let total = document.querySelector('.total')
let quantity = document.querySelector('.quantity')
/* addEvenListener to open the shopping cart */
openShopping.addEventListener('click', ()=>{ /* when system detects user click on shopping cart icon side menu will pop up*/
    body.classList.add('active')
})
closeShopping.addEventListener('click', ()=>{ /* when system detect user click on close, the side menu will close */
    body.classList.remove('active');
})
/* store product's data using a Array */
let products = [
    {
        id: 1,
        name: 'T-shirt',
        image: "images/Jung kook t-shirt merch pic.png",
        price: 29.90
    },
    {
        id: 2,
        name: 'Jacket',
        image: "images/jung kook jacket.png",
        price: 29.90
    },
    {
        id: 3,
        name: 'Hoodie',
        image: "images/golden album jacket.png",
        price: 29.90
    },
    {
        id: 4,
        name: 'Golden album T-shirt',
        image: "images/golden album t-shirt.png",
        price: 29.90
    },
    {
        id: 5,
        name: 'Jung Kook bag',
        image: "images/jung kook bag.png",
        price: 29.90
    },
    {
        id: 6,
        name: 'Seven T-shirt',
        image: "images/jung-kook-merch-page-seven-t-shirt.png",
        price: 29.90
    },

]
let listCards = []; /* create array */
function initApp() {
    /* use loops to loop through each product and create a HTML element for each product */
    products.forEach((value, key)=>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        /* creates the HTML structure */
        newDiv.innerHTML = `
            <img src="${value.image}"/>  
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Cart</button>
        `;
        list.appendChild(newDiv);
    })
}
initApp(); /* call the function */
/* To add a product into the cart */
function addToCard(key){
    if (listCards[key] == null){
        /* To  clone the product and set default quantity as 1 */
        listCards[key] = JSON.parse(JSON.stringify(products[key])) /*  get a completely new and independent copy of the object so that waht ever modification does not afftect the original ome in the array. */
        listCards[key].quantity = 1;
    }
    reloadCard();
}
/* To reload and dispaly the cart */
function reloadCard(){
    /* to clear the cart list */
    listCard.innerHTML = '';
    /* create the variables to store total quantity and price of items */
    let count = 0;
    let totalPrice = 0;
    /* To loop through each item in the cart */
    listCards.forEach((value, key) => {
        /* updates the total pirce and quantity using variables delcared earlier */
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;

        if ( value != null) {
            /* create element for each cart item */
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>
            `;
            listCard.appendChild(newDiv);
        }
    })
    /* Update total and quantity display */
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
/* function to change the quantity of the  items in the cart */
function changeQuantity(key, quantity) {
    if (quantity === 0) {
        delete listCards[key];
    } else {
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard(); /* call the function */
}



