let search_box=document.querySelector(".search-box input")
let product=document.querySelector(".product")
let products=product.querySelectorAll(".products")


   


    
search_box.addEventListener("keyup",()=>{

    let search_content=search_box.value.toUpperCase()
    // console.log(search_content)

    
    for(i=0;i<products.length;i++){
        let products_name=products[i].querySelector("p").innerText
        // console.log(products_name)
        
        console.log(products_name.toUpperCase().indexOf(search_content))
        if(products_name.toUpperCase().indexOf(search_content)<0){
            products[i].style.display="none"
        }
        else{
            // products[i].style.justifyself="start"
            products[i].style.display="block"

        }
        



    }



})
    
   
    




    






