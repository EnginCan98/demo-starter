//Global Scope
var variable = 1;
let variable2 = 2;

//Function Scope
function func(){
    let variable = 10;  //Burda let olmazsa global scope'u günceller.yada oluşturur.
    console.log("1. cavap", variable);
}
func();

console.log("2. cevap", variable);
//------------
var value1=10;
let value2=20;
const value3=30;

function func1(){  //let ve const scope a özgü
  //var value4=70;  
    var value1=40;
    let value2=50;
    const value3=60;
    if(true){
     //Block Scope
     var value4=70;
     let value5=80;
     const value6=90;
     console.log(value4,value5)
    }
    console.log(value1,value2,value3,value4,value5);//40 50 60 70
    console.log(value5);//error
}
func1();

console.log(value1,value2,value3,value4,value5);
