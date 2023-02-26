// alert('Hello!')

// confirm('Вы учите JS?')

// prompt('Какой язык вы учите?', 'пока не в курсе')

// let a = 5
// a = 7
// const b = 12
//
// const span = document.getElementById('skill')
//
// console.log(span)
// console.log(span.innerText)
//
// const skill = document.getElementById('skill')
// const isLove = document.getElementById('isLove')
// const string = document.getElementById('string')

// const skillText = prompt('Какой язык вы учите?', 'пока не в курсе')
// const isLoveValue = confirm("Вы любите изучаемый язык?")
//
// console.log(isLoveValue)
//
// skill.innerText = skillText
// isLove.innerText = isLoveValue

// string.innerHTML = "str"

// const example = document.getElementById('example')
// console.log(example.innerHTML)
// console.log(example.innerText)


// let a = "seven"
// a = 7
// const b = 8

//STRING
// const str1 = 'Greeting'
// const str2 = 'Greeting'
// const str3 = 'Greeting'


// const variant = "option1"
// console.log(5 == "5")
// console.log(5 === "5")
// console.log("5" == "5")
// console.log("a" > 15)
// console.log(null > 0)

// const userName = prompt("Who you are?", "anonim")
// // userName = null
//
// if (userName === "admin") {
//     alert("Hello boss!")
// } else if (userName === "anonim" || !userName) {
//     alert("I don't know you")
// } else {
//     alert(`Hi ${userName}`)
// }

// const counts = prompt("До скольки вы хотите достчитать", 10)
// let i = 10
// while (i <= counts) {
//     console.log(i++)
//     // i = i + 1
//     // i += 1
//     // i++
//     // ++i
// }

// do {
//     console.log(i++)
// } while (i <= counts)
//     console.log(i)

// let arr = [4, 5, 6]
//
// arr[3] = 7
// console.log(arr)
//
// const arr = []
// for (let i = 1; i <= 50; ++i) {
//     arr.push(i)
// }
//
// const newArr = []
//
// for( elem of arr) {
//     const marker = elem % 3
//     if (!marker) {
//         newArr.push(elem)
//     }
//
//     console.log(newArr)
// }

// const obj = {
//     name: "Sasha",
//     age: 25,
//     city: "Voronej!"
// }
// for ( key in obj) {
//     console.log(key, obj[key])
// }


// setTimeout(() =>{
//     alert("Время вышло!")
// }, 2000)

// const timeIsOver = () => {
//     alert("Время вышло!")
// }
// setTimeout(() =>{
//     alert("Время вышло!")
// }, 2000)

// const alarm = setInterval(timeIsOver, 3000)

// let wantToSleep = confirm("Хотите ли вы спать?")
// clearInterval(alarm)
//
// console.log()

const postsBlock = document.querySelector(".posts_block-container")
const postsTitle = document.querySelector(".posts_block-container h3")
const postsBody = document.querySelector(".posts_block-container span")

fetch("https://jsonplaceholder.typicode.com/posts")
    .then( (res) => {
        console.log(res)
        return res.json()
    } )
    .then( data => {
        addPost(data[7].title, data[7].body)
        console.log(data)
    } )
    .catch((err) => {
        console.log(err)
        console.log(err.message)
    })

function addPost(title, body) {
    const postTitle = document.createElement("h3")
    const postTitle = document.createElement("span")
    const postItem = document.createElement("p")
    postsBlock.append(postItem)
    postsTitle.innerText = title
    postsBody.innerText = body
}

function createPost(title, body, userid){
    fetch("https://jsonplaceholder.typicode.com/posts"), {
        method: 'POST',
        body: JSON{
            title,
            body,
            userid,
        },
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        then(res => {
            console.log(res)
        })
}

createPost("title", "body", 15)
