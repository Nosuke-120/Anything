// 問51
//変数fafa内にある要素を出力してください
//期待する出力 //['one','info@fa'] //['two', 'send@fafa'] //['three', 'hoso@fafa']

let fafa = [['one', 'info@fa'],['two', 'send@fafa'],['three', 'hoso@fafa']];
// イテレータを作る　（値を１つずつ取り出すことができるデータ）
// next()メソッドを持ち、既存メソッドであるentrieis()で作成できる

let entries = fafa.entries();
for (let entry of entries) {
  console.log(entry);
}

