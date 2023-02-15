// 1. поменять массив в обратном порядке - [1,2,3,4,5,6] [6,5,4,3,2,1]
let myArray = [1, 2, 3, 4, 5, 6];
myArray.reverse();

// 2. найти максимальное значение числа в массиве ([3,67,15...])
let myArr = [3,67,15,58,123654,0,-5];
Math.max(...myArr);

// 3. записать в массив ряд фибоначчи начиная с N члена с длинной массива M
let numN = 0;
let dimM = 10;

let fibonacci = [0, 1];

for (i = 2; i < dimM+numN; i++) {
    fibonacci[i] = fibonacci[i-1] + fibonacci[i-2];
}
fibonacci.slice(numN);

// 4. даны 2 4-х значных числа с неповторяющимися цифрами, надо определить сколько цифр в этих числах совпадают по значению и позиции
// и сколько только по значению (3487 и 3794 ---> 1 и 2 )
let
    num1 = 3487021,
    num2 = 3794206,
    count1 = 0,
    count2 = 0,
    arr1 = ('' + num1).split(''),
    arr2 = ('' + num2).split('');
for(let i=0; i<arr1.length; ++i) {
    for(let j=0; j<arr2.length; ++j) {
        if(arr1[i] === arr2[j] && i===j){
            ++count1;
        }

        if(arr1[i] === arr2[j] && i!==j){
            ++count2;
        }

    }
}

// 5. сортировка массива по возрастанию/убыванию
let scores = [1, 3, 101, 14, -5, 0];
let list = ['Дельта', 'альфа', 'ЧАРЛИ', 'браво', 100, 55, -6];

scores.sort((a, b) => a - b);
scores.sort((a, b) => b - a);
list.sort();
list.reverse();

// 6. удалить из массива все повторяющиеся элементы
let someThing = [55, 44, 55, 30, 30, 'i', 'kk', 'i', 'kk', 0, -1, -1, 0];
let unique = someThing.filter((e, i) => someThing.indexOf(e) === i );
let unirr = [...new Set(someThing)];
