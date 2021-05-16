###カリー化

> 2つ以上の引数を取る関数を分割し、1つの引数だけを取る関数の組み合わせに書き換えること

**カリー化されてない関数**
```
function add(x,y) {
  return x + y;
}

add(1,2);
// 3
```
**カリー化された関数**
```
function add(x) {
  return function(y) {
    return x + y;
  }
}

const sample1 = add(1)

sample(2); //3
sample(3); //4
sample(4); //5
```
