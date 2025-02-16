# Third-party Plugins

::: warning 
**Disclaimer: The plugin is third-party content. Please distinguish for yourself whether it is a malicious plugin. If your device is invaded/damaged by a malicious plugin or your information is maliciously stolen, please bear the losses caused. FloraBotTeam is not responsible and has no obligation to be responsible!**
:::

<script setup>
import data from '../../plugin.json'
</script>

<table align="center">
    <thead>
        <tr>
            <th>Name</th>
            <th>Author</th>
            <th>Discription</th>
            <th>Repository</th>
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
