const menu = document.querySelector('#menu');

const strawberry = {
    name: 'イチゴ',
    img: 'strawberry.jpg',
    price: 450
}

console.log(strawberry)
// ブラケット記法
console.log(strawberry['name'])
// ドット記法　基本はこっち
console.log(strawberry.img)


// 変数に代入した値を使うときは、ブラケット記法
const key ='name'

const lists = [
    {
        name: 'イチゴ',
        img: 'strawberry.jpg',
        price: 450
    },
    {
        name: 'ライム',
        img: 'lime.jpg',
        price: 400
    },
    {
        name: 'マンゴー',
        img: 'mango.jpg',
        price: 500
    },
    {
        name: 'レモン',
        img: 'lemon.jpg',
        price: 450
    },
    {
        name: 'イチジク',
        img: 'fig.jpg',
        price: 500
    },
    {
        name: 'リンゴ',
        img: 'apple.jpg',
        price: 400
    },
];



for (let i = 0; i < lists.length; i++){
    


    const content = `
    <div>
        <img src="images/${lists[i].img}" alt="">
        <h2>${lists[i].name}</h2>
        <p>${lists[i].price}円</p>
    </div>
    `
    menu.insertAdjacentHTML('beforeend', content)

}

// オブジェクトは{ }を使う
// const apple = {
//     // key : value, 
//     name: 'リンゴ',
//     color: '赤',
//     price: '100',
//     size: 'small',
//     area: '青森県'
// }

// 同じ情報を配列に入れたが分かりにくい
// const appleList = ['リンゴ','赤','100','small','青森県'];

// 配列の中にオブジェクトを並べるのは、
// アプリ開発の頻出パターン
const restaurant = [{
    name: 'ニクバルダカラ　大和西大寺店',
    city: '奈良市',
    category: ['居酒屋','ステーキ','イタリアン'],
    largeimage:'',
    smallimage:'',
    rate:3.12,
    comment:46,
    night_price:3000,
    day_price:999,
    caption:'夏の宴会～～～～～',
    reserve:[]
},{
    name: 'ニクバルダカラ　大和西大寺店',
    city: '奈良市',
    category: ['居酒屋','ステーキ','イタリアン'],
    largeimage:'',
    smallimage:'',
    rate:3.12,
    comment:46,
    night_price:3000,
    day_price:999,
    caption:'夏の宴会～～～～～',
    reserve:[]
}]