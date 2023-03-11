//1

class Flower {
    static hashiv = 0;
    constructor(name,color,count){
        this.name = name
        this.color = color
        this.count = count
        Flower.hashiv += this.count

    }
}
class Rose extends Flower {

}
class Carnation extends Flower {

}
class Tulip extends Flower{
  
}

class Lily extends Flower{
  
}

class Orchid extends Flower{
  
}

class Aster extends Flower{
  
}

let buket = [new Rose('Rose','Red',11),new Carnation('Carnation','White',10),new Tulip('Tulip','Yellow',4)];

let buket_1 = [new Lily('Lilia','White',7),new Orchid('Orchid','Pink',14),new Aster('Aster','Purple',6)];

let buket_2 = [new Tulip('Tulip','Yellow',16),new Rose('Rose','Red',22),new Lily('Lilia','White',3),new Orchid('Orchid','Pink',4)];

console.log(Flower.hashiv);

//2

class Vehicle{
fuel;
wheels; 
carMirrors; 
set hood (value) {
    this._hood = value;
};
get hood() {
    return this.hood;
};
set bumper (value) {
    this._bumper = value;
};
get bumper() {
return this.bumper;
};
#steeringWheel;
#windshieldWipers;
#headLight;
}

class Car extends Vehicle{
    engin; 
    door;
    set trunk(value){
        this._trunk = value;
    };
    get trunk(){
        return this.trunk;
    }
    #windscreen;
    #bucketSeat;
    
    }

class Truck extends Vehicle{
fuelTank;
color;
set window(value) {
    this._window = value;
};
get window()  {
   return this.window;
};
#trailer;
#step;
}

class Wagon extends Vehicle{
ironTire;   
woodWheels;  
set bonnet(value) {
    this._bonnet = value;
};
get bonnet(){
    return this.bonnet;
};
#jockeyBox;
#horse;
}

let vehicle = new Vehicle();

let car = new Car();

let truck = new Truck();

let wagon = new Wagon();

console.log(vehicle);



//3

class ArramSum extends Array{
    
sum(){
    let result = 0;
    for(let i=0; i < this.length; i++){
        if(typeof this[i] ==='number'){
            result +=this[i]
        }
        
    }
return result 
}
}
let arramSum = new ArramSum(2,'a',9,1,4,'b',7,'c',5,3)
console.log(arramSum.sum());



//4 

let str = "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
String.prototype.toUpper = function() {

let strArray = this.split(" ");
strArray = strArray.map((str) =>{
    return str.charAt(0).toUpperCase() + str.substring(1);
});
return strArray.join(" ")
}
    
console.log(str.toUpper());






