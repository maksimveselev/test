function yolochka33(){};

yolochka33.prototype.fast = function(){
console.log("Fast !!")
}

yolochka33.prototype.green = function (sun, co2){
    console.log("green ==", sun, " + ", co2 )
}

yolochka33.prototype.shishki = function(){
    console.log('shishki == Yolki')
}

let forest = new yolochka33()

forest.fast()
forest.green(14500, 50 )
forest.shishki()