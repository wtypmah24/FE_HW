//Написать цикл, который создает множество параграфов с каждым десятым числом в промежутке от 100 до 50 (т.е. 100, 90, 80, 70, 60, 50). Добавить созданные параграфы в div с классом numbers.


const divNumbers = document.querySelector(".numbers")
for (let i = 100; i >=50; i -=10){
    let pElem = document.createElement("p")
    pElem.innerText = i
    divNumbers.append(pElem)
}

//Написать цикл, который проходится по массиву строк, для каждой строки создает параграф и добавляет его в div с классом strings_container. Строки взять произвольные.
const divStringContainer = document.querySelector(".string_container")
let stringArray = ["first", "second", "third", "fourth", "fivth", "sixth", "seventh"]

for(let i = 0; i < stringArray.length; i++){
    let pElem = document.createElement("p")
    pElem.innerText = stringArray[i]
    divStringContainer.append(pElem)
}

//Написать цикл, который проходится по массиву с объектами - у объектов свойства first_name, last_name и  age (данные взять произвольные) - и создает карточки только для совершеннолетних пользователей. Карточка должна содержать информацию об имени, фамилии и возрасте пользователя. Добавить все карточки в div с классом users_container.

let users = [
    {
        first_name: "Bob",
        last_name: "Dilan",
        age: 29
    },
    {
        first_name: "John",
        last_name: "Wick",
        age: 15
    },
    {
        first_name: "Helmut",
        last_name: "Konrad",
        age: 17
    },
    {
        first_name: "Doctor",
        last_name: "House",
        age: 20
    },
    {
        first_name: "Doctor",
        last_name: "Who",
        age: 33
    },
    {
        first_name: "Clark",
        last_name: "Kent",
        age: 11
    }
]

const divUsersContainer = document.querySelector(".users_container")
for (let i = 0; i < users.length; i ++){
    const {first_name, last_name, age} = users[i]
    if (age >= 18){
        let pElem = document.createElement("p")
        pElem.innerText = `First name: ${first_name}, Last name: ${last_name}, Age: ${age}`
        divUsersContainer.append(pElem)
    }
}