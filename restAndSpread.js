export function sizCevapVerin(){  //export ile dışarıya aktarılabilir.
    return [10,20,30,40,50];
}

//Rest Operator = sadece parametre tanımlarken.Verilen parametreleri toparlar.
export function sum(...numbers){  //başına 3 nokta koyunca girilen parametreleri array olarak verir.Tek tek vermek yerine böyle kullanılır.
    // console.info("number3:",number3);  
    // console.info("number3:",Number(number3));
    // const sum = number1 + number2 + number3;  //numbers olarak verince değişti.
    let total=0;
    for(let i=0; i<numbers.length; i++){
        //total = total + numbers[i];
        total += numbers[i];  //toplama yapmak yerine birleştirme yapabilir.
    }
    // return numbers.reduce((total,number)=> total + number,0); //böyle de yapılabilir.
    return total;
}

// function avg(cevapVerenKisiSayisi, ...numbers){  //avg=average
//     return sum(...numbers) / cevapVerenKisiSayisi;
// }

//Spread Operator = toplama yapmak istediğimzde bazen birleştirme yapabilir.Bunu çözmek için kullanılır.Array in içindeki dizi elemanları parametre olarak gönderir yani ayrıştırır.
export const cevaplariniz = sizCevapVerin();
const result = sum(...cevaplariniz);
// const result = avg(26, ...cevaplariniz);
// const result = sum(10,20,null); //=> null etkilemez 30 cevabını alrız.
console.log(result); //tipini bulmak için başına typeof yazılır.
Math.max(...cevaplariniz);
console.log(Math.max(...cevaplariniz));
//NaN - Not an Number
//010,20,30,40,50

function sayMyName(...letters) {
    for (const letter of letters) {
        console.log(letter)
    }
}
sayMyName(...Object.values({first:"A",second:"h"})); //strin de bir char array olduğu için ... kullanabiliriz.

let instructor = {
    firstName:"Ahmet",
    lastName:"Çetinkaya"
}

let student = {
    firstName:"Anıl",
    lastName:"Kavuk"
}

const learningTopic = {
    topic :["JavaScript"]
}
student = {
    // firstName:"Anıl",
    // lastName:"Kavuk",
    ...student,              //yazmak yerine ... ile verdik.Ama bu sefer 61 deki angular da geldi.Bunun sebebi referans tipe dönüşmesi oldu.
    // topic :["JavaScript"],
    ...learningTopic,
}
//Object.assign(instructor,student);
learningTopic.topic.push("Angular");
console.log(instructor);
console.log(student)