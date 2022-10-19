let urunler = [
    { fiyat:100, ad:"Urun 1", indirim:true, oran:15},
    { fiyat:150, ad:"Urun 2", indirim:false, oran:0},
    { fiyat:200, ad:"Urun 2", indirim:true, oran:2.5},
]

//filter
//array.prototype.filter

let filtrelenmisUrunler = urunler.filter(urun =>{
    return urun.fiyat > 160
});
console.log(filtrelenmisUrunler);

urunler = urunler.filter(urun =>{
    return urun.fiyat > 120;
});
console.log(urunler);

// map => forEach ile aynı farkı map yeni bir array oluşturur ve döner

let maplanmisArray = urunler.map(urun => {
    return{
        fiyat:urun.fiyat*2,
        ad:urun.ad,
        indirim: urun.indirim,
        oran: urun.oran,
    }; 
});
console.log("Maplenmis array: ", maplanmisArray);


let newArray = urunler.map((urun)=>{
    return {
        fiyat : urun.indirim === true 
        ? urun.fiyat - urun.fiyat * (urun.oran/100)
        : urun.fiyat,
       ad: urun.ad,
       indirimTutari: urun.fiyat * (urun.oran/100),
    };
});
console.log(newArray);

let cart = [
    {id:1, productName:"p1", quantity:3,unitPrice:3000},
    {id:2, productName:"p2", quantity:2,unitPrice:1000},
    {id:3, productName:"p3", quantity:1,unitPrice:500},
];

let total={price:0,products:0};
cart.forEach((cart) => {
    total.price += cart.quantity * cart.unitPrice;
    total.products += cart.quantity;
});
console.log(total);





