## Outline
設定エリアがビュー内に入り指定秒後にGA Eventを発火するjQueryプラグイン。1ランディングにつき、各指定エリアで1回ずつのみ発火する。
イベント発生の有無にかかわらず、1ページしか閲覧しなかった訪問を「直帰」にカウントする`nonInteraction`は`true`に設定済み。



## Usage
```
$('#area').eventTransmit({
  runtime:  5000,
  category: "Category name",
  action:   "Action name",
  label:    "Label name"
});
```
