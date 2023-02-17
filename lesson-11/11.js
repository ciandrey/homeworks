// 2.	Домашние электроприборы. Определить иерархию электроприборов.
// Включить некоторые в розетку. Посчитать потребляемую мощность.
// Провести сортировку приборов в квартире на основе одного из параметров.
// Найти прибор в квартире, соответствующий заданному диапазону параметров.
class ElectricDev {
    constructor(name, power, voltage, isPowerOn) {
        this.name = name;
        this.power = power;
        this.voltage = voltage;
        this.isPowerOn = isPowerOn;
    }
}

class TV extends ElectricDev {
    constructor (name, power, voltage, isPowerOn, sizeInch) {
        super(name, power, voltage, isPowerOn);
        this.sizeInch = sizeInch;
    }
}

class WashingMachine extends ElectricDev {
    constructor(name, power, voltage, isPowerOn, weight ) {
        super(name, power, voltage, isPowerOn);
        this.weight = weight;
    }
}

class Computer extends ElectricDev {
    constructor (name, power, voltage, isPowerOn, isHaveUps) {
        super(name, power, voltage, isPowerOn);
        this.isHaveUps = isHaveUps;
    }
}

let comp = new Computer ('IBM', 600, 220, true, false);
let tv = new TV ('LG',120, 220, true, 50);
let wm = new WashingMachine ('Boch', 1200, 220, false, 60);

let devices = [comp, tv, wm];

//сортировка по мощности
devices.sort(function(a, b){
    return a.power - b.power;
});

for (let i=0; i < devices.length; i++){
    console.log(devices[i].name + ' ' + devices[i].power);
}

//Суммарная мощность
let allPower = 0;

for (let i=0; i < devices.length; i++){
    allPower = allPower + devices[i].power;
}
console.log('Total power:' + ' ' + allPower);

//функция подключения приборов к электросети
function PowerON (name){
    for (let i=0; i<devices.length; i++){
        if (devices[i].name === name){
            devices[i].isPowerOn = true;
        }
    }
}

//функция нахождения  включенных приборов мощностью более 1000
function filterByPowerAndTurnON (devices){
    let filterResult = [];
    for (let i=0; i<devices.length; i++){
        if (devices[i].isPowerOn === true && devices[i].power >= 1000){
            filterResult.push(devices[i]);
        }
    }
    return filterResult;
}

PowerON('Boch');
console.log(filterByPowerAndTurnON(devices));