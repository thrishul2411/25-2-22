let getproduct = document.getElementById("ge");
const form = document.querySelector("form");
const getdata = (e) => {
    let data = fetch("http://localhost:3000/products").then(res => res.json()).then((data) => {
        Array.from(data).forEach(element => {
            let lis = document.createElement("li")
            lis.textContent = element.productName
            let ul = document.getElementById("list")
            ul.appendChild(lis)
        });
    })
}
getproduct.addEventListener("click", getdata);


const additem = async (e) => {
    dt = {
        "department": form.department.value,
        "productName": form.productname.value,
        "product": form.product.value
    }
    await fetch('http://localhost:3000/products', {
        method: 'POST',
        body: JSON.stringify(dt),
        headers: { 'content-type': 'application/json' },
    });
}

let adddetails = document.getElementById("addproduct")
adddetails.addEventListener("click", additem);
