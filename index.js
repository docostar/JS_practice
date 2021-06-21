//comment  This is my first javascript 
console.log("Hi, THis is seperate file consol message")
let name='Rahul';
console.log(name);

//const to declare constants
const intrest_rate=0.3;
// intrest_rate=1;  we can't assign to const
console.log(intrest_rate);


//Data type
let my_name='Payal';  //string
let number=23;  //number
let isApproved=false        //bool
let firstName= undefined    //undefied
let selectedColor= null     //null

//Dynamic Typing

console.log(typeof(my_name))

my_name=30.1
console.log(typeof(my_name))

console.log(selectedColor)

//Object
let person={
    name:   "Mosh",
    age:    30
};

console.log(person)

//change Property
person.name= "john"
console.log(person.name)
//or bracket 
person['name']='Mary'
console.log(person['name'])

//Array
let myColor=['red','blue']
myColor[2]='Green'
myColor[3]=45
console.log(myColor)

console.log(myColor.length)

//functions
//performing Task
function greet(name,lastName)
{
    console.log("Hello world from function."+name+" "+lastName)
}


greet('Rahul','Dholariya')

//calculating Function
function square(num)
{
    return(num*num)
}

console.log(square(4))