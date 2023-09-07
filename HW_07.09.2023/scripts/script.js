const formElem = document.querySelector(".first_task")
const firstNameElem = document.querySelector("#first_name")
const lastNameElem = document.querySelector("#last_name")
const ageElem = document.querySelector("#age")
const firstButtonElem = document.querySelector("#first_button")

let users = []

formElem.addEventListener("submit", function (e) {

    e.preventDefault()
    // console.log(firstNameElem.value);
    // console.log(lastNameElem.value);
    // console.log(ageElem.value);

    let user = {
        firstName: firstNameElem.value,
        lastName: lastNameElem.value,
        age: ageElem.value
    }
    users.push(user)
    rerender()
    formElem.reset()
})

function creatUsersBlock({ firstName, lastName, age }) {
    const userFirstName = document.createElement("p")
    const userlastName = document.createElement("p")
    const userAge = document.createElement("p")

    userFirstName.innerText = firstName
    userlastName.innerText = lastName
    userAge.innerText = age

    const userCardDiv = document.createElement("div")
    userCardDiv.classList.add("user_card")

    userCardDiv.append(userFirstName, userlastName, userAge)
    return userCardDiv
}

function rerender() {
    let usersBlock = document.querySelector(".users_block")
    usersBlock.innerHTML = ""
    for (let i = 0; i < users.length; i++) {
        const userCard = creatUsersBlock(users[i])
        userCard.addEventListener("dblclick", function () {
            users.splice(i, 1)
            rerender()
        })
        usersBlock.append(userCard)
    }

}