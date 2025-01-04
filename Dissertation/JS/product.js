let search=document.getElementById("search");

search.addEventListener("input", (e)=>{
    let searchValue=search.value.toLowerCase();
    let cards=document.querySelectorAll('.card');

    cards.forEach((card)=>{
        let productName=card.querySelector("h3").textContent.toLowerCase();

        if (productName.includes(searchValue)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    })
})