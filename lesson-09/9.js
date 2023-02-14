// 1. Решить используя промисы и async/await.
// Сделайте 3 промиса, в каждом из которых расположена функция setTimeout со случайной задержкой от 1 до 5 секунд.
// Пусть первый промис возвращает число 1, второе - число 2, третий - число 3.
// С помощью Promise.race дождитесь загрузки первого сработавшего промиса и выведите результат его работы на экран.
function IntegerRandomNumber(min, max) {
    return Math.floor(Math.random() * (max -  min + 1) + min)
}
function getNum(t, min, max){
    return new Promise((res, rej) => {
        setTimeout(() => res(IntegerRandomNumber(min, max)),t * 1000)
    });
}
let pr1 = getNum(IntegerRandomNumber(1, 5), 1, 1);
let pr2 = getNum(IntegerRandomNumber(1, 5), 2, 2);
let pr3 = getNum(IntegerRandomNumber(1, 5), 3, 3);

Promise.race([pr1, pr2, pr3]).then((dat) => {
    console.log(dat);
});

// 2. Сделайте функцию getNum, которая возвращает промис, который с задержкой в 3 секунды выведет случайное число от 1 до 5.
// Создайте async функцию, которая с помощью await будет дожидаться результата getNum,
// затем возводить его в квадрат и выводить на экран.
async function asyncCall() {
    const result = await getNum(3, 1, 5);
    console.log(Math.pow(result, 2))
}
asyncCall();

// 3. Сделайте функцию getNum, которая возвращает промис, который с задержкой в 3 секунды выведет случайное число от 1 до 5.
// Сделайте также функцию getNum2, которая возвращает промис, который с задержкой в 5 секунд выведет случайное число от 6 до 10.
// Создайте async функцию, которая с помощью await будет дожидаться результата getNum1,
// затем будет дожидаться результата getNum, а затем найдет сумму полученных чисел и выводит на экран.
async function asyncCall2() {
    console.log(await getNum(3, 1, 5) + await getNum(5, 6, 10));
}
asyncCall2();
