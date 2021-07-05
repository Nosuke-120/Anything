## りあクト！

<b>Reactとviewの違い</b>
<br>

Reactの設計パターンはそもそもパラダイムが異なる
Vueの設計パターンはMVVM（Model-View-ViewModel）
MVVMはRailsなどのMVCと近いので、Railsなどが人気な日本では採用されることが多い

<b>Node.jsがフロントに必要な理由</b>
<br>

* Node.jsはRubyやPythonのようにローカルのターミナルでもJavascriptを動かせるようにするためのソフトウェア。
ランタイムとも呼ばれてる？

<br>
<b>以下を実現するためのツールなどはNode.js上で動くことになっている</b>
<br>

- バンドル（パフォーマンスの最適化のためにJSやCSSのファイルを少数のファイルにまとめる）
- 最新版の機能を使用しているJSのコードを、ブラウザの実行時にpolyfillするのではなく、最初からコンパイルしておく
- 開発中にブラウザに直接ローカルのファイルを読み込ませるのではなく、ローカル環境で開発用のHTTPサーバーを起動してそれ由でアプリケーションを稼働させる
- テストツールを用いて、単体テストE2Eテストを記述する
- ソフトウェアテストやコードの構文解析をローカルで実行する
<br>

<b>Node.jsのパッケージマネージャ</b>
- npm, yarn

<b>Node.jsのバージョンマネージャ</b>
- nodenv
- プロジェクトごとに異なるバージョンの環境を共存させることができる
- anyenvを経由してインストールことでrbenvやpyenvなどの他の言語もまとめて管理できる。設定も共通化できる。
- `anyenv install nodenv`

<b>ブラウザに実際に返されてるHTMLのソースコード</b>
```
︙
<body>
  <noscript>You need to enable JavaScript to run this app.</noscript>
  <div id="root"></div>
  <script src="/static/js/bundle.js"></script>
  <script src="/static/js/0.chunk.js"></script>
  <script src="/static/js/main.chunk.js"></script>
</body>
</html>
```
- main.chunk.jsはレガシーな JavaScript にコンパイルされたアプリの中身
- CRA で作成したプロジェクトでは、上記のようにソースコードファイルはコンパイラである *Babel* によってコンパイルされ、それがバンドラである*webpack*によって適切な形にまとめられ、それらが相互に関連付けられる

<b>JavaScriptの良いところ</b>
- ①第一級関数とクロージャをサポート
- ②プロパティを随時追加できる柔軟なサポート
- ③表現の高いリテラル記法

<b>JavaScriptのデータ型　〜プリミティブ型〜</b>
- プリミティブ型はBoolean, String, Number, BigInt, Symbol, Null, Undefinedの7つの型の種類がある
- falsyな値は、false, 0, '', null, undefined

<b>JavaScriptのデータ型　〜オブジェクト型〜</b>
- 配列リテラル, オブジェクトリテラル、正規表現リテラルの3つがある
- オブジェクトのインスタンスプロパティ__proto__には、そのインスタンスが何を下敷きに生成されたかが格納されている

<b>関数</b>
- JavaScriptにおける関数は第一級オブジェクトである
- 他のオブジェクトと同様に、変数に代入したり、配列のプロパティ値にしたり、関数の引数に渡したりできる
- 引数にRest Parametersを使える。残りの引数を配列として受け取れる。
```
const showNames = (a, b, ...rest) => {

console.log(a);
console.log(b);
console.log(rest); // [rest1, rest2, rest3]
};
```
- 第一引数にRest Parametersを設定した場合
```
const showAllArgs = (...args) => {
console.log(args);
};

console.log(showAllArgs('A', 'B', 'C', 'D'));  // [ 'A', 'B', 'C', 'D' ]
```
- Rest Parametersに名前を付けたい場合
```
const sum = (i, ...[j, k, l]) => i + j + k + l;

console.log(sum(1, 2, 3, 4));  // 10
console.log(sum(1, 1, 1, 1, 1));  // 4
```

<b>プロトタイプベース</b>
- JavaScriptはクラスベースではなく、プロトタイプベースのオブジェクト指向言語である。
