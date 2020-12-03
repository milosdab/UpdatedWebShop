let products = [
    {
        ProductID: 1,
        ProductName: "Hori-Zone Kornet",
        SupplierID: 1,
        CategoryID: 1,
        UnitPrice: 423.0000,
        UnitsInStock: 2,
        ImageUrl: "images/hori.jpg"
     },
     {
        ProductID: 2,
        ProductName: "Ragim Taiga",
        SupplierID: 1,
        CategoryID: 1,
        UnitPrice: 185.0000,
        UnitsInStock: 4,
        ImageUrl:"images/ragim.jpg"
     },
     {
        ProductID: 3,
        ProductName: "Samick Sage",
        SupplierID: 1,
        CategoryID: 1,
        UnitPrice: 122.0000,
        UnitsInStock: 6,
        ImageUrl: "images/sage.jpg"
     },
     {
        ProductID: 4,
        ProductName: "Samick Fox",
        SupplierID: 1,
        CategoryID: 1,
        UnitPrice: 192.0000,
        UnitsInStock: 10,
        ImageUrl:"images/sfox.jpg"
     },
];
i=0;
let proizvodiUKorpi= [];

function render(){
    let productsDiv = document.getElementById("products");
  
      for (const key in products) {
          
              const element = products[key];
            
              i++
              
           let div = document.createElement("div");
           let ime = document.createElement("h1");
           ime.innerHTML = element.ProductName;
           let slika = document.createElement("img");
           slika.src = element.ImageUrl; 
           let div2 = document.createElement("div");
           div2.setAttribute("class","div2");
           let h5 = document.createElement("h5");
           h5.innerHTML = "$ " + element.UnitPrice;
           let btn = document.createElement("button");
           btn.innerHTML = "Add to cart";
           btn.setAttribute("class","btn btn-primary");
           btn.setAttribute("id", "addBtn"+i);
           btn.setAttribute("value",JSON.stringify(element));
           let input = document.createElement("input");
           input.setAttribute("id", "input" + element.ProductID);
           input.setAttribute("type","number");
           input.setAttribute("value","1");
           input.style.marginLeft = "3px";
           


           div2.appendChild(h5);
           div2.appendChild(btn);


           div.appendChild(ime);
           div.appendChild(slika);
           div.appendChild(div2);
           div2.appendChild(input);

           productsDiv.appendChild(div);

           document.getElementById("addBtn"+i).addEventListener("click",function(event){
                  
                  let proizvodKliknut = JSON.parse(event.target.value);
                  let brojProizvoda = parseInt(document.getElementById("input"
                                + proizvodKliknut.ProductID).value);
                            proizvodKliknut['uKorpi'] = brojProizvoda;

                            if(brojProizvoda == 0 || brojProizvoda == " " || brojProizvoda < 0){
                                alert("Nije moguce naruciti 0 ili negativan broj proizvoda")
                                return;
                            }
                     

                  renderCart(proizvodKliknut,brojProizvoda);

                  localStorage.setItem("korpa2", JSON.stringify(proizvodiUKorpi));

                  let notif = document.getElementById("notif");
                  notif.classList.remove("noshow");
                  document.getElementById("input"+element.ProductID).value = 1;
           })
      }

}
render();

function renderCart(product,brojProizvoda){
    for (const key in proizvodiUKorpi) {
        
            const element = proizvodiUKorpi[key];

            if (element.ProductID == product.ProductID){
                element['uKorpi'] += brojProizvoda;
                return;
            }
            
        
    }
    proizvodiUKorpi.push(product);
}

