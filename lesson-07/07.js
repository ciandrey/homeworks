// // Эмулировать игру в кубики, 2 человека по очереди бросают кубик, каждый в итоге по 3 раза.
// // У кого сумма трех бросков будет наибольшей - тот выиграл. Если суммы равны то ничья.
let sum1 = 0, sum2 = 0
for (let i = 0; i < 3; i++) {
    var bone1 = Math.floor(Math.random() * 6 ) + 1; sum1+= bone1;
    var bone2 = Math.floor(Math.random() * 6 ) + 1; sum2+= bone2;
    console.log(bone1, bone2);
}
if (sum1 === sum2)
    console.log('ничья');
else if (sum1 > sum2)
    console.log('победил первый игрок');
else
console.log('победил второй игрок');

// Подсчитать количество Пятниц 13-ого с 01/01/2000 до сегодня

// вычисляем количество дней между заданой датой и сегодняшней
const date1 = new Date(2000, 0,1);
const date2 = new Date();
const diffInTime = date2.getTime() - date1.getTime();
const diffInDays = Math.round(diffInTime / 86400000);
console.log(Friday13thsIn(2000, 0, 1))

function Friday13thsIn(year, month, day)  {
 let i = 0;
    for (let j = 0;  j <= diffInDays; j++) {
        let d = new Date(year, month, day++);
        if (d.getDay() === 5 && d.getDate()=== 13) i++;
    }
    return i;
}

// Напишите код который будет разбивать число на заданное количество рандомных чисел сумма которых будет равна изначальному числу.
// Пример: разбить 15 на 3 части (сумма четырех чисел будет равна 15) (4,6,5)
// а. числа изначальное число целое, числа разбивки - целые (4,6,5)

const n = 20;
const iterations = 3;
const parts = [];

let tail = n;

for (let i = 1; i <= iterations; i++) {
    if (i === iterations) {
        parts.push (tail);
        break;
    }
    const part = Math.round(Math.random() * tail);
    parts.push(part);
    tail -= part;
}

// б. числа разбивки дробные с 2 знаками после запятой (4.55, 5.20, 5.25)
const n1 = 15.89;
const iterations1 = 3;
const parts1 = [];

let tail1 = n1;

for (let i = 1; i <= iterations1; i++) {
    if (i === iterations1) {
        parts1.push (+tail1.toFixed(2));
        break;
    }
    const part1 = Math.round((Math.random() * tail1)*100)/100;
    parts1.push(part1);
    tail1 -= part1;
}