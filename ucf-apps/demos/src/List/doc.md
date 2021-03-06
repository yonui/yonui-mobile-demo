# 列表 List

单个连续模块垂直排列，显示当前的内容、状态和可进行的操作。eg：联系人列表。


## 如何使用

```
import { List } from 'tinper-libraui';

```

## 代码演示


## API

### List

| 属性 | 说明 | 类型 | 默认值 |
|----|-----|------|------|
| renderHeader       | list heder  | (): void |  无  |
| renderFooter       | list footer  | (): void |  无  |

### List.Item

| 属性 | 说明 | 类型 | 默认值 |
| ----|-----|------|------|
| thumb       | 缩略图(当为 string 类型时作为 img src)  | String/React.Element |  无  |
| extra      | 右边内容        | String/React.Element |  无  |
| arrow      | 箭头方向(右,上,下), 可选`horizontal`,`up`,`down`,`empty`，如果是`empty`则存在对应的dom,但是不显示   | String |   无  |
| align    |  子元素垂直对齐，可选`top`,`middle`,`bottom`  | String   | `middle` |
| onClick    | 点击事件的回调函数 | (): void |  无  |
| error    | 报错样式,右侧文字颜色变成橙色 | Boolean  | `false`  |
| multipleLine    | 多行 | Boolean  | `false`  |
| wrap    | 是否换行，默认情况下，文字超长会被隐藏， | Boolean  | `false`  |
| activeStyle    | 自定义active的样式 | Object  |   |
| platform  |  设定组件的平台特有样式, 可选值为 `android`, `ios`， 默认为 `cross`， 即组件会自动检测设备 UA 应用不同平台的样式    | String | `'cross'`|


## 注意事项

暂无

## 更新日志
