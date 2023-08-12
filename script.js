const places = document.getElementsByClassName('important-places');
for(const place of places){
    console.log(place.innerText)
}

// queryseletorAll
const someLi = document.querySelectorAll('#fruits-title')
console.log(someLi)
for(const li of someLi){
    console.log(li.innerText)
}