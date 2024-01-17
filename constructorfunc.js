console.log("inside js");

let arr = [];

function Product(n,p,b){
    this.name = n,
    this.price = p,
    this.brand = b
}




function storeProducts(e){
    e.preventDefault(); // to prevent from refresh

    let form = document.getElementById("products");
    let name = form.name.value;
    console.log(name);

    let price = form.price.value;
    // console.log(price);

    let brand = form.brand.value;
    // console.log(brand);

    let p1 = new Product(name, price, brand);
    arr.push(p1);
    console.log(arr);
}

// let kitchen = {
//     name: "kitchen",
//     purpose: "cook",

//     cookFood: function(order){
//         console.log(`serving ${order} in ${this.name}`)
//     },
// };

// let living_room = {
//     name: "living room",
//     purpose: "watching tv"
// };

// let bedroom = {
//     name: "bedroom",
//     purpose: "sleep",
// };

// kitchen.cookFood("maggie"); this --> kitchen

// we are trying to change the owner object

// kitchen.cookFood.call(living_room, "samosa");

// let x = kitchen.cookFood.bind(bedroom, "samosa");
// x();
