let count = 0 ;
const increment = document.getElementById('increment-btn').addEventListener('click',function(){
     count++ ;
   const setValue = document.getElementById('h1-value');
   setValue.innerText = count;
   setValue.style.fontSize = '150px';
});



const decrement = document.getElementById('decrement-btn').addEventListener('click',function(){
   if(count >= 0){
    const setValue = document.getElementById('h1-value');
    setValue.innerText = count-- ;
    setValue.style.fontSize = '150px';
   }
   else{
    const setValue = document.getElementById('h1-value');
    setValue.innerText = "No Decrement Possible"
    setValue.style.fontSize = '50px';
   }
   
})