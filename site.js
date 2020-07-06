import  Role,{Call}  from './role'
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


const game = {
    name : 'valorant',
    install(){
        console.log(this)
    }
}
game.install()

const install = game.install;

install();

const getdata = {
    name : 'Ali',
    getName(){
        let name2 = prompt('Enter Your Name','Ali')
        this.name = name2
    },
    showHello : function(){
        alert('Hi '+this.name)
    }
}

// getdata.getName()
// getdata.showHello()
console.log(getdata.name)
// bind
const Show = getdata.getName.bind(getdata);
const Hello = getdata.showHello.bind(getdata);
// Show();
// Hello();
console.log(getdata.name)


// arrow functions
const square = function(num){
    return num * num
}

const square2 = num => num * num

console.log(square(5))
console.log(square2(5))
 

const Languages = [
    {id:1,name:'HTML',isES6:false},
    {id:2,name:'CSS',isES6:false},
    {id:3,name:'JavaScript',isES6:true},
]

const ES6 = Languages.filter(job => job.isES6)
console.log(ES6)





var j = 0
const Games = {
    install(){
        let ins = setTimeout(() => {
            this.install()
            console.log('Game is installing... '+j+'%')
            j++
        },20)
        if(j == 100){
        clearTimeout(ins)
        }
        
    },
}
// Games.install()


const colors = ['red','green','blue','orange']
const items = colors.map(color => `<li>${color}</li>`)


const address = {
    street : '',
    city : '',
    country : '',
};

const street = address.street;
const city = address.city;
const country = address.country;


const first = [1,2,3]
const second = [4,5,6]

const combined = first.concat(second)
combined.sort()
document.write(combined)
console.log(...first)







// classes

class Person{
    constructor(name){
        this.name = name
    }
    hi(){
        alert(this.name)
    }
}

var devHeader = new Person('Nima')
// devHeader.hi()

class Teacher extends Person{
    constructor(name,role){
        super(name)
        this.role = role
    }
    bye(){
        alert(this.name + ' Role: ' + this.role)
    }
}
  


var Nima = new Teacher('Nima','DevHeader')
Nima.hi()
Nima.bye()
var me = Role('.dev')