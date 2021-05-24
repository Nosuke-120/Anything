// 問51
//変数fafa内にある要素を出力してください
//期待する出力 //['one','info@fa'] //['two', 'send@fafa'] //['three', 'hoso@fafa']

let fafa = [['one', 'info@fa'],['two', 'send@fafa'],['three', 'hoso@fafa']];
// イテレータを作る　（値を１つずつ取り出すことができるデータ）
// next()メソッドを持ち、既存メソッドであるentrieis()で作成できる
// 「順番にデータが発生する」という状況を表すのにイテレータは向いています。

let entries = fafa.entries();
for (let entry of entries) {
  console.log(entry);
}

// 問52
// 'morita kenji'のような1つ以上の小英字、半角スペース、1つ以上の小英字にマッチした場合、配列['morita kenji']が返るようにしてください。
// exec() メソッドは、指定された文字列内で一致するものの検索を実行します。結果の配列、または null を返します
/\w+\s+\w/.exec('morita kenji') //例1
let pattern = /\w+\s+\w/; //例2
result = 'morita kenji'.match(pattern);
console.log(result);

// 問53
// このような 'It is an important problem'と'The import duty is not cheap'の文字列内importにマッチするとbooleanを返す記述をしてください
const str1 = 'It is an important problem';
const str2 = 'The import duty is not cheap';
let isImport = /.*\bimport\b.*/.test(str1); //test()はbooleanを返す
isImportant //false
let isImport = /.*\bimport\b.*/.test(str2); // 単語の境界線は\b
isImportant //true

// 問54
// ひらがな全てにマッチ、半角カタカナ全てにマッチ、カタカナ全てにマッチする正規表現を記述してください
// ひらがな→　[あ-ん]
// 半角カタカナ→　[/^[\uFF65-\uFF9F]+$/]
// 半角→　/[^A-Za-z0-9]/


