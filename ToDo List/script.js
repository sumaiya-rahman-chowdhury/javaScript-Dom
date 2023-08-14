const addBtn = document.getElementById('add-btn').addEventListener('click',function(){
    // input fild re access korar jnno
const listOfTask = document.getElementById('input-field');
const list = listOfTask.value ;
console.log(list)
const valueShow = document.createElement('li');
valueShow.innerText = list ;
const listContainer = document.getElementById('list-container') ;
listContainer.appendChild(valueShow);
listOfTask.value = ''

})