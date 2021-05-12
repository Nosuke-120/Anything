### children

```
import * as React from 'react'
 
const Child = props => (
  <div>{props.children}</div>
)
 
const Parent = props => (
  <Child>
    aaaaaaaaa
  </Child>
)
 
export default Parent
```

{props.children}の正体は「親コンポーネントのタグの間に入れられた要素」

この場合は、aaaaaaaaが表示される
