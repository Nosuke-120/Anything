### useState

>useState()は、関数コンポーネントでstateを管理（stateの保持と更新）するためのReactフック

```
//const [状態変数, 状態を変更するための関数] = useState(状態の初期値);
const [count, setCount] = useState(initialState)
```

```
// ちなみにクラスコンポーネントでは
this.state = {
  count: initialState
}
```

### useEffect

>関数の実行タイミングをReactのレンダリング後まで遅らせるhook
>useEffectに渡された関数はレンダーの結果が画面に反映された後に動作する

クラスコンポーネントでのライフサイクルメソッドに当たります。
- componentDidMount
- componentDidUpdate
- componentWillUnmoun

```
//関数コンポーネント
const [count, setCount] = useState(0);

useEffect(() => {
  document.title =`${count}回クリックされました`
})
```

```
// クラスコンポーネント
componentDidMount(){
    document.title =`${this.state.count}回クリックされました`
  }

componentDidUpdate(){
  document.title =`${this.state.count}回クリックされました`
}
```