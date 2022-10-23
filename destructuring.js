import { cevaplariniz } from './restAndSpread.js';

//require common.js için gerekli type için.

console.log("-----------")

console.log(cevaplariniz);

// const first = cevaplariniz[0];
// const second = cevaplariniz[1];

const[first,second,...others] = cevaplariniz;

console.log(first,second,others);

const [icAnadolu,marmara,ege,akdeniz,[icAnadoluSehirleri, marmaraSehirleri,...digerSehirler]] =[  //eğer köşeli paranrz olmasaydı şehirlerde hepsini yazardı.
    {name:"iç Anadolu", population:1000000},
    {name:"Marmara", population:2000000},
    {name:"Ege", population:3000000},
    {name:"Akdeniz", population:4000000},
    [
        ["Ankara","Konya"],
        ["İstanbul","Bursa"],
        ["İzmir","Manisa"],
        ["Antalya","Mersin"],
    ],
];

console.log(icAnadolu,marmara,ege,akdeniz);
console.log(...icAnadoluSehirleri);
console.log(...marmaraSehirleri);
//const [egeSehirleri,akdenizSehirleri] = ...digerSehirler //hata verir kullanamayız.
console.log(...digerSehirler.flat(2)); //flat tek array e çevirdi