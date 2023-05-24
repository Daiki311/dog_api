const myButton = document.getElementById('send-button');
myButton.addEventListener('click', () => {
  // 選択した犬の名前の値を読み込む
  const dogname = document.getElementById("nameselect").value;
  // breedsの横の部分に選択された名前を入れる
  const url = 'https://dog.ceo/api/breed/' + dogname + '/images/random';
  // fetchでデータを取得する
  fetch(url)
    .then(response => response.json())
    .then(data => {
      console.log('data', data);
      document.getElementById("dog_img").src = data.message;
    })
    .catch(error => {
      console.error('エラー', error);
    });
});

