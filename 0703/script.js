const content = [
    '<p>日本で二番目に大きい山は？</p>',
    '<div>富士山</div>',
    '<div>北岳</div>',
    '<div>生駒山</div>',
    '<div>高野山</div>',
    'B'
];

const quiz = document.querySelector('#quiz')


for (let i = 0; i < content.length; i++) {
    // forの中でif文を使って、答えは画面に表示しないようにする。
    if (i === 5) {
        console.log('答えは' + content[i])
    } else {
        quiz.insertAdjacentHTML('beforeend', content[i])
    }
}

// forの中でif文を使って、選択欄はクリック出来るようにする。
const select = document.querySelectorAll('#quiz div')

for (let i = 0; i < select.length; i++) {

    select[i].addEventListener('click', () => {
        console.log(select[i].textContent)
    })
}