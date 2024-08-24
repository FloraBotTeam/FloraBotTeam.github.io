---
outline: deep
---

# 运行时API示例

本页面展示了如何使用VitePress提供的部分运行时API。

主要的` useData() API` 可以用来访问当前页面的站点、主题和页面数据。它在` .md` 和` .vue` 文件中都可以使用：

```md
<script setup>
import { useData } from 'vitepress'

const { theme, page, frontmatter } = useData()
</script>

## Results

### Theme Data
<pre>{{ theme }}</pre>

### Page Data
<pre>{{ page }}</pre>

### Page Frontmatter
<pre>{{ frontmatter }}</pre>
```

<script setup>
import { useData } from 'vitepress'

const { site, theme, page, frontmatter } = useData()
</script>

## 结果

### 主题数据
<pre>{{ theme }}</pre>

### 页面数据
<pre>{{ page }}</pre>

### 页面前置元数据
<pre>{{ frontmatter }}</pre>

## 更多

查看完整运行时[API列表](https://vitepress.dev/reference/runtime-api#usedata)的文档。
