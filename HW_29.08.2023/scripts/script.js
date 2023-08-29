//Напишите функцию, которая принимает два числовых аргумента и возвращает наименьшее из них.

function getSmaller(firstNumber, secondNumber){
    if (firstNumber < secondNumber){
        return firstNumber
    }
    return secondNumber
}

console.log(getSmaller(8,4));

console.log("=============================================");

//Напишите функцию, которая принимает два числовых аргумента и выводит в консоль все четные числа от большего к меньшему.

function buildArray(firstNumber, secondNumber){
    min = firstNumber
    max = secondNumber

    if(firstNumber > secondNumber){
        min = secondNumber
        max = firstNumber
    }
    if(min % 2 !==0){
        min = min + 1
    }
    for (let i = min; i <= max; i+=2){
        console.log(i);
    }
}
buildArray(3, 15)

console.log("=============================================");

//Напишите функцию power, которая принимает два числовых аргумента (основание степени и саму степень) и возвращает число в указанной степени. Значение степени должно быть указано по умолчанию 2.
function power (a, b=2){
    return a**b
}
console.log(power(3,3));

console.log("=============================================");

//Напишите функцию, которая принимает числовой аргумент n и считает сумму чисел от 1 до n.

function getSum(n){
    let sum = (1 + n)/2 * n
    console.log(sum);
}
getSum(5)

console.log("=============================================");

//Напишите функцию, которая принимает два числовых аргумента n и m и считает сумму четных чисел и нечетных чисел от n до m. Суммы выведите в консоль (в начале сумму четных чисел, а затем сумму нечетных).

function getSumOddsEvens(n, m){
    let min = n
    let max = m
    let evenSum = 0
    let firstElement = min
    if(n > m){
        min = m
        max = n
    }
    if(min % 2 !==0){
        firstElement = min + 1
    }
    for (let i = firstElement; i <= max; i+=2){
        evenSum += i
    }
    let oddSum = (2*min + (max - min))/2 * (max - min +1) - evenSum
    console.log(`even sum is ${evenSum}; odd sum is ${oddSum}`);
}
getSumOddsEvens(6,9)

console.log("=============================================");

//Напишите функцию, которая принимает в качестве аргументов массив строк, а возвращает первый самый длинный элемент массива. Если входной массив пуст, функция возвращает null. Если есть несколько одинаковых по длине элементов - функция возвращает первый из этих элементов. 
//Пример: [ 'one', 'two', 'three' ] => 'three'

function getLongestString(stringArray){
    let longestString = null
    let maxStringLength = stringArray[0].length
    for(let i = 0; i < stringArray.length; i++){
        if(stringArray[i].length > maxStringLength){
            maxStringLength = stringArray[i].length
            longestString = stringArray[i]
        }
    }
    return longestString
}
let arr = ["john", "bob", "akim", "pepa", "pueee", "tgtgtg", "qwertyg", "qwertyi"]
console.log(getLongestString(arr));