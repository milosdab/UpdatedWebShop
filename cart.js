let sum = 0;

loadCart();
function loadCart(){
    if(localStorage.getItem("korpa2") !== null){
        let storageCart = localStorage.getItem("korpa2");
        let cartObject = JSON.parse(storageCart);
        console.log(cartObject);

        showCart(cartObject);
        
        
    }
    let mc =document.getElementById("mainCart");
    h3 = document.createElement("h3");
    h3.innerHTML = "Ukupna cena je " + sum + "$";
    mc.appendChild(h3);
}

function showCart(cartObject){
   let cartTable = document.getElementById("cartTable");
    
    

    for (const key in cartObject) {
        
            const element = cartObject[key];

            let pic = document.createElement("img");
            pic.src = element.ImageUrl;

            let row = document.createElement("tr");
            let td1 = document.createElement("td");
            td1.appendChild(pic);
            td1.setAttribute("id","td1");
            td1.style.width = "70px";
            let td2 = document.createElement("td");
            td2.innerHTML = element.ProductName;
            td2.setAttribute("id","td2");
            
            let td3  = document.createElement("td");
            td3.innerHTML = element['uKorpi'] + "x " + element.UnitPrice + "$";
            td3.setAttribute("id","td3");
            
            let cena = element.uKorpi * element.UnitPrice;
            


            row.appendChild(td1);
            row.appendChild(td2);
            row.appendChild(td3);


            cartTable.appendChild(row);
            

            
            sum += cena;
            
        
    }

}
let mainCart = document.getElementById("mainCart");
let dugme = document.createElement("button");
dugme.setAttribute("class","btn btn-success");
dugme.setAttribute("id","kupidugme");
dugme.style.fontSize = "22px";
dugme.innerHTML = "Kupi";
dugme.style.width = "150px";
mainCart.appendChild(dugme);

document.getElementById("kupidugme").addEventListener("click",function(){
    let modalDiv = document.getElementById("modalDiv");

    modalDiv.classList.remove("noshow");
    modalDiv.classList.add("modal");
});

document.getElementById("nazad").addEventListener("click",function(){
       let modal = document.getElementById("modalDiv");
       modal.classList.remove("modal");
       modal.classList.add("noshow");
});