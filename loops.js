console.log("Loops başlangıç");

let krediler = ["İhtiyac", "Tasıt", "Arac"]

//CTRL + K + C
//CTRL + K + U
//döngüler
//iterate, iteration
console.log("<ul>")
for(let i=0; i<krediler.length; i++) {
    console.log("<li>", krediler[i], "</li>");
}
console.log("</ul>")

//arrow function
krediler.forEach((kredi) => {
    console.log("Foreach: ", kredi);
});

let urunler = [
    { fiyat:100, ad:"Urun 1", discount:true, ratio:15},
    { fiyat:150, ad:"Urun 2", discount:false, ratio:0},
    { fiyat:200, ad:"Urun 2", discount:true, ratio:2.5},
]

urunler.forEach((urun) => {
    if(urun.discount === true){
        urun.fiyat -= urun.fiyat * (urun.rate / 100);
    }
    if(urun.indirimli>150){
        console.log("pahalı");
    }
});

if(urun>160){
    console.log(urun.ad);
}