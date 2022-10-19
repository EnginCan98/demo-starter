console.log("Merhaba Kodlomaio")

// yorum satırı = kod çalışırken dikkate alınmaz

//değişkenler ve türleri
//variable var
//JAVASCRIPT tip güvenli değil
//TYPESCRIPT tip güvenli

//number
let dolarKur = 10;
//dolarKur = "Kodlamaio";   //set etmek
console.log(dolarKur);

//dolarKur = 20; //satır satır çalışır dolar kur 20 ye gelmeden yazıldı.

//string
let euroKur = "15";
console.log(euroKur);

//matematiksel operatör
console.log(dolarKur + 6);
console.log(euroKur + 10); //!string olduğu içiin yanlış çalıştı

//var keywordunu unut let kullan.ödev let ve var arasındaki farklar.

//boolean = true ya da false
let euroYuselis = true;
console.log(euroYuselis);

//number ondalıklı sayı olabilir => decimal, float, double
dolarKur = 12.50;
console.log(dolarKur);

//kolleksiyonlar
//array = dizi
let krediler = ["ihtiyaç","Taşıt","Konut"];
console.log(krediler);
console.log(krediler[1]);

//object
//JSON = Javascript Object Notation
//Naming Convention  camelCase
let odemeBilgileri = {
    aylikOdeme:415.53,
    faizOrani:1.89,
    toplamGeriOdeme: 14950,
    krediTipi: "ihtiyac Kredisi",
};
console.log(odemeBilgileri);