const bookURL = 'http://localhost:3000/books'
document.addEventListener("DOMContentLoaded", function() {
    const h3 = document.createElement("h3")
    const img = document.createElement("img")
    const p = document.createElement('p')
    const readBtn = document.createElement('button')
    // const userH4 = document.createElement('h4')

    fetch(bookURL)
    .then(res => res.json())
    .then(bookData => {
        bookData.forEach(book =>{
            console.log(book)
            createBookLink(book)
        })
    })

    const createBookLink = (book) =>{
        const ul = document.querySelector("#list")
        const div = document.querySelector("#show-panel")
        const li = document.createElement("li")
        li.innerText = book.title
        li.style.cursor = 'pointer'
        showBook(book,li,div)
        
        ul.append(li)
    }

    const showBook = (book,li,div) =>{

        li.addEventListener("click",() => {

            div.style.display = "block"
            h3.innerText = book.title
            img.src = book.img_url
            p.innerText = book.description
            div.append(h3,img,p)

            addUsers(book,div)
            readBtn.innerText = 'Read'

            readBtn.addEventListener("click", () => {

                let exist = document.getElementById(book.users.id)
                if (!!exist === false){
                    console.log("check1")
                    let thisUserId = 1
                    let userName = "pouros"

                    // fetch(`http://localhost:3000/books/${book.id}`, {
                    //     method: 'PATCH',
                    //     headers: {
                    //         "Content-Type": "application/json"
                    //     },
                    //     body: JSON.stringify({
                    //         "users": { 
                    //             "id": thisUserId,
                    //             "username": userName
                    //         }
                    //     })
                    // })
                    // .then(res=> res.json())
                    // .then(data => {
                    //     // addUsers(data,div)
                    // })
                    // .catch(err=> console.log('could not update ', err))

                }else{
                    console.log("they already read it")
                }
            })
            div.append(readBtn)
        })
    }
    
    const addUsers = (book,div) =>{
        let exist = div.getElementsByTagName("h4")
        if (!!exist){
            for (index = exist.length - 1; index >= 0; index--) {
                exist[index].parentNode.removeChild(exist[index]);
            }
        }
        book.users.forEach(user =>{
            const userH4 = document.createElement('h4')
            userH4.id = user.id
            userH4.innerText = user.username
            div.append(userH4)
        })
    }
})
