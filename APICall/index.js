const api_URL = "https://api.coindesk.com/v1/bpi/currentprice.json";

// async function handlePromise() {
// const data = await fetch(api_URL);
// const jsonValue = await data.json();
// console.log(jsonValue);
// }

// handlePromise();

function handlePromise() {
fetch(api_URL).then((res) => res.json()).then((res) => console.log(res));
}

handlePromise();