## Outline
設定エリアがビュー内に入り指定秒後にGA Eventを発火するjQueryプラグイン。  
1ランディングにつき、各指定エリアで1回ずつのみ発火する。

イベント発生の有無にかかわらず、1ページしか閲覧しなかった訪問を「直帰」にカウントする`nonInteraction`は`true`に設定済み。



## Usage
```
$('#area').eventTransmit({
  category: "Category name",
  action:   "Action name",
  label:    "Label name",
  position: "default",
  runtime:  5000,
  debug:    false
});
```



## Extra Config
| Key      | Value         | Description |
|:---------|:--------------|:------------|
| position | "default"     | 指定エリアがビュー内の1/2以上を占める場合を閲覧とみなす      |
|          | "bottom"      | 指定エリアがビュー内に表示された場合を閲覧とみなす           |
| runtime  | 5000(default) | 指定エリアが設定ビュー内に入ってからイベント発火までのミリ秒 |
| debug    | true          | イベント発火とリセット時をコンソールに表示                   |
