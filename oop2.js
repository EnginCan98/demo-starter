import { BaseLogger, EmailLogger, FileLogger, SmsLogger } from "./oop3.js";

import House from "./oop.js";

console.log("------------------");

class HouseService {
  constructor(logger) {
    //x loggerType
    this.houses = [];
    this.logger = logger;
    // this.loggerType = loggerType;
  }

  list(filterCb) {
    // callback
    console.log(filterCb !== undefined ? this.houses.filter(filterCb) : this.houses); // ternary operator
    // false, 0, null, undefined, NaN, ""
    // Boolean()
  }

  add(house) {
    this.houses.push(house);
    this.logger.log("Yeni bir ev eklendi.", house); //x , this.loggerType
  }
}

// konfigürasyon
const logger = new SmsLogger(); // PnP, plug and play mimarisi
//
const houseService = new HouseService(logger); //x , "email"
const newHouse = new House(3, 2, "Kuzey", 100, 5000);
houseService.add(newHouse);



// import { BaseLogger, EmailLogger, FileLogger, SmsLogger } from "./oop3.js";

// import House from "./oop.js";

// console.log("---------")

// class HouseService{
//     constructor(){
//       this.houses = [];
//     }
//     list(filterCb){
//         // return this.houses;
//         console.log(filterCb !==undefined ? this.houses.filter(filterCb) : this.houses);
//     }
//     add(house){
//     this.houses.push(house);
// }
// }


// const houseService = new HouseService();
// const newHouse = new House(3,2,"Kuzey",100,50000)
// const newHouse1 = new House(3,2,"Güney",100,50000)
// houseService.add(newHouse);
// houseService.add(newHouse1);
// houseService.list((house.cephe === "Kuzey"));