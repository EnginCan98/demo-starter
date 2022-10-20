let products = [
    { unitPrice:100, productName:"Urun 1", discount:true, rate:15},
    { unitPrice:150, productName:"Urun 2", discount:false, rate:0},
    { unitPrice:200, productName:"Urun 3", discount:true, rate:2.5},
]

function getProductByName(productName){
    let productsResult = products.filter(p=>p.productName.includes(productName));
    console.log(`arama sonucunda ${productsResult.length} adet ürün bulundu`)
    };
    
    getProductByName("Urun");

  console.log(products[0]);

//   products.forEach((product) => {
//     if(products.unitPrice<160){
//         console.log(product.productName);
//     }
// });

let filteredProducts = products.filter(product =>{
    return product.unitPrice < 160
});
console.log(filteredProducts);

let filteredProducts1 = products.filter(product =>{
    return product.unitPrice > 160
});
console.log(filteredProducts1);

// let newArray = products.map((product)=>{
    
//         unitPrice : products.discount === true;
// });
//  console.log(newArray);

let filteredProducts2 = products.filter(product =>{
    return product.discount == true;
});
console.log(filteredProducts2);

products.push({unitPrice:100, productName:"Urun 4", discount:true, rate:15});
console.log(products);

products = products.filter(products => products.productName != 'Urun 4');
console.log(products);

// products.pop({unitPrice:100, productName:"Urun 4", discount:true, rate:15});
// console.log(products);

console.log(products);
