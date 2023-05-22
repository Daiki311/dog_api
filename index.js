let myButton = document.getElementById("button"); 
let dogform = document.getElementById("dogform");
let dog_img = document.getElementById("dog_img");
// ボタンを押すと起動
myButton.addEventListener('click', () => {
  let form = dogform.ariaValueMax.trim()
  // fetchでデータを取得する
  fetch("https://dog.ceo/api/breeds/image/random")
  
  .then(Response => Response.json())
  .then(data => {
// 入力したものを読み込む
//リクエストパラメーターとして走るようにする。
// レスポンスの中から画像urlの情報を受け取る
//画像URLの画像をhtmlに埋め込む

    // データの処理

        //エラーが発生した場合

})
});