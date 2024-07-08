const text = document.querySelector('#colorText')
const color = document.querySelector('#colorPicker')


const colorBg = () => {

    // ケバブケース    が キャメルケース  になっている。
    // backgroud-color が backgroundColor になっている
    document.body.style.backgroundColor = color.value;

    // document.body.style.fontSize = '40px';

    if (color.value === '#ffffff'){
        text.textContent = `カラーコード：${color.value} (white)`
    } else if (color.value === '#000000'){
        text.textContent = `カラーコード：${color.value} (black)`
    } else {
        text.textContent = `カラーコード：${color.value}`
    }
}

color.addEventListener('click', colorBg)


// // 関数の定義（実行はまだしていない）
// const message = (name, weather) => {
//     console.log(`${name}さん、こんにちわ！今日は${weather}です。`);
// }

// // 呼び出して初めて実行される。
// message('aa','いい天気')
// message('bb','雨')