getBooks().then( res => {
    console.log(res);
    for (let i of res) {
        renderBook(i);
    }
})

async function getBooks() {
    const response = await fetch('http://localhost:3000/books');
    const json = await response.json();
    return json;
}

function renderBook(book) {
    const ul = document.querySelector('#list')

    const div = document.querySelector('#show-panel');

    const li = document.createElement('li');
    li.textContent = book.title;

    const p = document.createElement('p');
    p.textContent = book.description;

    const likes = document.createElement('p');
    likes.textContent = `likes: ${book.users.length}`;

    const likeButton = document.createElement('button');
    likeButton.textContent = 'like';
    likeButton.addEventListener('click', () => {
        console.log('i like that');
    }) 

    const btn = document.createElement('button');
    btn.textContent = 'show';
    btn.addEventListener('click', () =>{
        div.append(li,p,img,likes,likeButton);
    });

    const img = document.createElement('img');
    img.src = book.img_url;

    
    li.append(btn);
    ul.append(li);
}
