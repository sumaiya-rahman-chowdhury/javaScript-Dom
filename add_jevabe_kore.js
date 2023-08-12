const newList = document.createElement('li');
newList.innerText = " Vetor er Content" ;
ul.appendChild(newList); 
// ul er last child er pore eei list ta add korsi appendChild(newList) er maddhome eta bojhai .


// ekebare onek gulo jevabe add korbo .
const main = document.getElementById('main-container');
const section = document.createElement('section');
section.innerHTML = `
<h1>My Fav Singer </h1>
<ul><li>Lana Del rey</li></ul>
<p>GitHub Pages is designed to host your personal, organization, or project pages from a GitHub repository.</p>
` ;
main.appendChild(section);

