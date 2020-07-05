// change header value
var header = document.getElementById('web');
var pre_header = document.getElementById('header_value');

function changeHeader(){
    
    header.innerHTML = pre_header.value
    pre_header.value = null
    
}

var detail = document.getElementById('web-details');
var pre_detail = document.getElementById('header_value');



    function chanegeDetails(){
   
        detail.innerHTML = pre_header.value
        pre_header.value = null
        
    }

// -------------ES6 part---------------- //
// var -> function
// let -> block
// const -> block -> read-only
let y = 0;
y = 1; 
const x = 1;
try{
    x = 2;
}catch(error){
    console.log(error.message)
}


// objects



const person = {
    name : 'Nima',
    walk : function(){},
    talk : function(){},
};
const targetMember = 'name'
console.log(person.walk())
console.log(person[targetMember.value] = 'Ali')
console.log(person.name)



// this Keyword


