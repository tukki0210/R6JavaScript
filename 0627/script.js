// textareaのキーの入力に反応する仕組み
// textareaを取得する
const text = document.querySelector('#text');

const question = document.querySelector('#question').textContent

// キー入力に反応させる
text.addEventListener('keyup', ()=> {
    console.log('キー入力した')

    // 入力内容をJSで取得する
    console.log(text.value)

    // 入力内容とお題が一致するか
    // お題を取得する
    // console.log(document.querySelector('#question').textContent)

    // 一致するか
    if (question === text.value){
        console.log('一致した！')
        // 一致したときの表現
        alert('一致しました！！')
    }
})