
# 滑动操作 SwipeAction

滑动操作组件。

结合手势操作，从屏幕一侧唤出操作。

## 如何使用
```
import { SwipeAction } from 'tinper-libraui';

```

## 代码演示


## API


### SwipeAction

| 属性 | 说明 | 类型 | 默认值 |
|----|-----|------|------|
| style           | `swipeout` 样式      | Object |      -       |
| left       | 左侧按钮组      | Array | `null` |
| right       | 右侧按钮组      | Array | `null` |
| autoClose       | 点击按钮后自动隐藏按钮   | Boolean | `function() {}` |
| onOpen       |    打开时回调函数   | (): void | `function() {}` |
| disabled       |   禁用 `swipeout`    | Boolean | `false` |
| onClose  |  关闭时回调函数    | (): void | `function() {}` |


## 注意事项

暂无

## 更新日志
