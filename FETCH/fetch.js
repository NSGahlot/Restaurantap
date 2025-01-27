const url = "https://fakestoreapi.com/products";

const container = document.getElementById("container");

// let res;

fetch(url) // first promise is to get some response 
.then(function (res){
    return res.json() // second promise is we are collecting the data so it will
                      // take some time.
})
.then(function(res) {

    appendData(res);
})
.catch(function(err){
    console.log("err:", err);
});



function appendData(data){
    // console.log("data:", data)
    data.forEach(function(el) {

    let div = document.createElement("div");

    let title = document.createElement("p");
    title.innerText = el.title
    
    let price = document.createElement("p");
    price.innerText = el.price
    
    let image = document.createElement("img");
    image.src = el.image

    div.append(image, title, price);

    container.append(div);
    });
}

