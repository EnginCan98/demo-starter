//OOP - Object Oriented Programming - Nesne Yönelimli Programlama

export default class Ev {  //default denince
    constructor(odaSayisi,kat,cephesi,aidat,fiyat){
        this.odaSayisi = odaSayisi
        this.kat = kat;
        this.cephesi = cephesi;
        this.aidat = aidat;
        this.fiyat = fiyat;
    }
    tanit(){
        console.log(this);
    }

    tanit(){
        console.log("tanit2", this);
    }
}

export const ev1 = new Ev(3,2,"Kuzey",100,50000);
ev1.tanit();


function evOlustur(oda,kat,cephe,aidat,fiyat) {
    // return { odaSayisi:oda,kat:kat,cephe:cephe,aidat:aidat,fiyat:fiyat}
    this.odaSayisi = oda;
    this.kat = kat;
    this.cephe = cephe;
    this.aidat = aidat;
    this.fiyat = fiyat;
    }
    evOlustur.prototype.tanit = function ()  {
        console.log(this);
    };
    evOlustur.prototype.tanit = function () {
        console.log("tanit2", this);
      };
// const ev2 = {
//     odaSayisi:1,
//     kat:1,
//     cephe:"Güney",
//     aidat:50,
//     fiyat:10000,
// };
const ev2 = evOlustur(3,2,"Kuzey",100,50000)
console.log(ev2);

export class Customer{
    constructor(fisrtName,lastName){
        this.fisrtName = fisrtName;
        this.lastName = lastName;
    }
}