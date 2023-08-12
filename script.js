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
const attr = document.getElementById('places-title') ;

console.log(attr.getAttribute('id') )

// add 
const mainContainer = document.getElementById('main-container');
// ki add korsi
const section = document.createElement('section')
const h1 = document.createElement('h1');
h1.innerText = "My Food List :"
section.appendChild(h1);
const ul = document.createElement('ul');
// create first list item
const li1 = document.createElement('li');
li1.innerText = "Biriyani";
ul.appendChild(li1);
// 
// create another 
const li2 = document.createElement('li');
li2.innerText = "Khichuri";
ul.appendChild(li2);
// 
// create another 
const li3 = document.createElement('li');
li3.innerText = "Luchi-Alur Dom";
ul.appendChild(li3);
// 
// create another 
const li4 = document.createElement('li');
li4.innerText = "Bhuna Mangso";
ul.appendChild(li4);
// 
section.appendChild(ul);
mainContainer.appendChild(section);
// End

// set innerHtml directly

const sectionSinger = document.createElement('section');
sectionSinger.innerHTML =`
<h1>My Fav Singer </h1>
<ul><li>Lana Del rey</li></ul>
`
mainContainer.appendChild(sectionSinger);
// End set innerHtml directly

