---
gitChangelog: false
---

# 第三方插件列表

::: warning 免责声明
插件是 FloraBot 的拓展功能，所有插件都属于第三方内容，因使用插件所造成的任何问题均与 FloraBot Team 无关。
:::

<script setup>
import data from '/plugin.json'
</script>

<table align="center">
    <thead>
        <tr>
            <th>插件名称</th>
            <th>插件作者</th>
            <th>插件描述</th>
            <th>插件仓库</th>
        </tr>
        </thead>
        <tbody>
            <tr v-for="plugin in data">
                <td>{{ plugin.PluginName }}</td>
                <td>@{{ plugin.PluginAuthor }}</td>
                <td>{{ plugin.PluginDescription }}</td>
                <td><a :href="plugin.repo">{{plugin.repo_from}}</a></td>
            </tr>
        </tbody>
</table>
