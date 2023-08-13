document.getElementById('btn-update').addEventListener('click',function(){
    alert("Updated");
   const inField = document.getElementById('input-field');
   console.log();
   const inText = inField.value ;
//    ------------------------>
// setting the value to p
const comment = document.getElementById('comment-added');
comment.innerText = inText ;

// 
inField.value = ' ';


})

