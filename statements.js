console.log("Statements Start")

//Koşul Blokları
//true - false
//mantıksal operatör
console.log(1 == 1);  //1 eşittir 1
console.log(1 != 1);  //1 eşit değildir 1
console.log(1 >= 1);  // > >= || =< <

// == sadece değer kontrölü
// === tip ve değer kontrolü
console.log(1 === "1");
console.log(1 !== "1");

//condition
if(1 == 1){
console.log("IF içerisi çalıştı.")
}
else if(2 == 2){
    console.log("ELSE IF çalıştı.")
}
else{
    console.log("ELSE bloğu çalıştı.")
}

let dolarKurDun = 18.74;
let dolarKurBugun = 18.8;

if(dolarKurBugun>dolarKurDun){
    console.log("fazla");
}
else if(dolarKurBugun==dolarKurDun){
    console.log("eşit");
}
else{
    console.log("az");
}

//ternacy operator
//tek satırlık if - one line if statement
//kosul ? kod1 : kod 2
//kod1 => koşul true, kod2 => kosul false
dolarKurBugun >= dolarKurDun 
? console.log("fazla") : console.log("az")

//switch-case
let toplamBakiye = 100;
let secilenKur = "USD";

switch (secilenKur) {
    case "USD":
        toplamBakiye *= 17;  //çarpı eşittir direk soldaki değerle çarpar.
        break;
    case "EUR":
        toplamBakiye *= 20;
        break;
    default:
        console.warn("Bilinmedik kur türü");
        break;
}

console.log("Toplam Bakiye: ", toplamBakiye);

let secilenKredi = 0;
let krediTutari = 15000;

switch (secilenKredi) {
    case 0:
        console.log("Tasıt Kredisi")
        krediTutari *= 2;
        break;
    case 1:
        console.log(" Kredisi")
        krediTutari *= 1.5;
        break;
    case 2:
        krediTutari *= 2.5;
        break;
    default:
        console.warn("hata");
        break;
}

console.log("Kredi tutarınız: ", krediTutari);

let girilenSayi = 10;

//% => MOD operator

if(girilenSayı%2 == 0){
 console.log("Cift")
}
else{
    console.log("tek")
}