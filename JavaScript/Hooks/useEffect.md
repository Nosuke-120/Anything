### useEffect

>関数の実行タイミングをReactのレンダリング後まで遅らせるhook
>useEffectに渡された関数はレンダーの結果が画面に反映された後に動作

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
