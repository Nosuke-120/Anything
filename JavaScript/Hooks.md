### useState

>useState()は、関数コンポーネントでstateを管理（stateの保持と更新）するためのReactフック

`
//const [状態変数, 状態を変更するための関数] = useState(状態の初期値);
const [count, setCount] = useState(initialState)
`

`
// ちなみにクラスコンポーネントでは、、、
this.state = {
  count: initialState
}
`