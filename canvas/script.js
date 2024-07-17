// キャンバス要素を取得
const canvas = document.querySelector("#tutorial")
// const canvas = document.getElementById("tutorial");


// キャンバスに対応するか確認
if (canvas.getContext) {
    // コンテキスト（データの種類：２ｄか３ｄなど）を指定
    const ctx = canvas.getContext("2d");

    console.log('キャンバスに対応している')
} else {
    // キャンバスに未対応の場合のコードをここに
}

