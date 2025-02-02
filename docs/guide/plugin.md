# 插件

::: warning
此文档适用于 FloraBot V1.13 及以上版本
:::
插件是 FloraBot 的拓展功能，所有插件都属于第三方内容，因使用插件所造成的任何问题均与 FloraBot Team 无关。

## 查找插件

可以在 [插件列表](./plugin_list.md) 中找到 FloraBot 第三方插件。

## 安装插件

FloraBot 启动后会在项目根目录创建FloraBot/Plugins 文件夹，将插件放入该文件夹即可。

插件结构示意:
```
FloraBot
 \-Plugins
    |-插件文件夹
    |  |-Plugin.json
    |  \-插件.py
    \-插件文件夹
       |-Plugin.json
       \-插件.py
Config.json
FloraBot.py
其他文件
```

放入插件后，启动或重启 FloraBot 即可生效。

## 卸载插件

将插件文件夹删除并重启 FloraBot 即可。
