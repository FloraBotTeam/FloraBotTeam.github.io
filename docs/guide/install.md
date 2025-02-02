# 安装

::: warning
此文档适用于 FloraBot V1.13 及以上版本
:::

## 自动安装

FloraBot 官方一键安装脚本: [https://github.com/FloraBotTeam/FloraBot-Installer](https://github.com/FloraBotTeam/FloraBot-Installer)

## 手动安装

### 安装准备

如果满足以下要求可跳过此步骤：

::: tip 要求
- 已安装Python 3.11 或以上版本
:::

FloraBot 使用 Python 开发，因此需要安装 Python 环境

- **下载 Python** 

  - Windows: 

  前往[Python官网](https://www.python.org/downloads/)下载Python 3.11 或以上版本安装包并运行安装

  - Linux: 

  运行以下命令安装 Python 3.11 或以上版本：

  ```sh
  sudo apt-get update
  sudo apt-get install python3.11
  ```

### 安装 FloraBot

- **下载 FloraBot**

  前往 [FloraBot Releases](https://github.com/FloraBotTeam/FloraBot/releases)下载最新版本的 FloraBot 压缩包并解压到空文件夹

- **安装依赖**

  进入解压后的 FloraBot 根目录打开命令行，运行以下命令安装依赖：

  ```sh
  pip install -r requirements.txt
  ```

## 启动 FloraBot

 进入FloraBot根目录，运行以下命令启动 FloraBot：

 ```sh
 python main.py
 ```

 或

 ```sh
 python3 main.py
 ```
 等待 FloraBot 启动， 第一次启动后会创建配置文件， 并退出运行

## 配置文件

FloraBot 第一次启动后会自动创建配置文件，位于根目录下的 `config.json` 文件，可根据自己的需求修改配置。

```
FloraBot根目录/Config.json
```

配置文件示例:
```json
{
    "AutoInstallLibraries": true,
    "ConnectionType": "HTTP",
    "FloraHost": "127.0.0.1",
    "FloraPort": 3003,
    "FrameworkAddress": "127.0.0.1:3000",
    "BotID": 0,
    "Administrator": [0]
}
```

- `AutoInstallLibraries`：是否自动安装依赖库，默认 `true`
- `ConnectionType`：连接方式，可选 `HTTP` 或 `WebSocket`，默认 `HTTP`
- `FloraHost`：FloraBot的IP地址，默认 `127.0.0.1`
- `FloraPort`：FloraBot的端口号，默认 `3003`

(`FloraHost` 和 `FloraPort` 在 `ConnectionType` 连接方式是 `HTTP` 时为FloraBot HTTP服务端主动请求的地址)

(`FloraHost` 和 `FloraPort` 在 `ConnectionType` 连接方式是 `WebSocket` 时为FloraBot WebSocket服务端主动连接的地址)

- `FrameworkAddress`：FloraBot HTTP服务端监听的地址，默认 `127.0.0.1:3000`

(`FrameworkAddress` 配置项在 `ConnectionType` 连接方式是 `HTTP` 时才生效, 为`WebSocket` 时无效)
- `BotID`：机器人ID，默认 `0`
- `Administrator`：机器人管理员，默认 `[0]`





