# Markdown 扩展示例

本页面展示了 VitePress 提供的一些内置 Markdown 扩展功能。

## 语法高亮

VitePress 提供了由 [Shiki](https://github.com/shikijs/shiki) 支持的语法高亮功能，还具有额外的特性，如行高亮：

**输入**

````md
```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```
````

**输出**

```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```

## 自定义容器

**输入**

```md
::: info
这是一个信息框。
:::

::: tip
这是一个提示。
:::

::: warning
这是一个警告。
:::

::: danger
这是一个危险警告。
:::

::: details
This is a details block.
:::
```

**输出**

::: info
这是一个信息框。
:::

::: tip
这是一个提示。
:::

::: warning
这是一个警告。
:::

::: danger
这是一个危险警告。
:::

::: details
这是一个详情块。
:::

## 更多

查看[完整Markdown扩展列表](https://vitepress.dev/guide/markdown)的文档。
