# 第三方插件列表

::: warning 免责声明
**声明: 插件为第三方内容, 请您自行分辨是否为恶意插件, 若被恶意插件入侵/破坏了您的设备或恶意盗取了您的信息, 造成的损失请自负, FloraBotTeam 概不负责也无义务负责!**
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
