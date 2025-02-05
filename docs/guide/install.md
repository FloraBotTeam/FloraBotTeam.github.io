# 开始安装
::: warning 注意
本文档适用于FloraBotv1.1x版本
:::

## 安装环境
::: tip 安装需知
FloraBot需要运行在Python3.11及以上版本，已安装可直接进入[`安装程序`](#安装程序)阶段
:::
### Windows
前往 [`Python官网`](https://www.python.org/downloads) 下载不低于 `Python3.11` 的版本进行安装即可
### Linux
运行命令安装即可
```Shell
sudo apt install python3
```

## 安装程序
### 下载程序
**从[`Github`](https://github.com/FloraBotTeam/FloraBot)仓库或者通过链接下载程序**
```link
https://github.com/FloraBotTeam/FloraBot/archive/refs/tags/v1.01.zip
```
将程序解压至空文件夹

`或者`

**使用git下载程序到本地**
```Shell
git https://github.com/FloraBotTeam/FloraBot.git
```

### 安装依赖
* **自动安装**

打开终端定位到程序文件夹，输入以下命令
```Shell
pip install -r requirements.txt
```
* **手动安装**

打开终端安装以下几条依赖
1. **`flask`**
```Shell
pip install flask
```
2. **`requests`**
```Shell
pip install requests
```
3. **`websocket-server`**
```Shell
pip install websocket-server
```
## 运行程序
在程序文件夹所在的终端输入以下命令
```Shell
python FloraBot.py
```
或
```Shell
python3 FloraBot.py
```
**首次启动会启动失败, 此时会在文件 `FloraBot.py` 的同级目录下生成一个 `Config.json` 文件, 编辑它** 
::: details 配置文件说明
**`Config.json`:**  
```Json
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
**`Config.json` 文件键值对照表:**  
* **`AutoInstallLibraries`: 是否自动安装 pip 安装所需的第三方库, 默认为值: `true`**  
* **`ConnectionType`: Bot 与框架的连接方式, 可选 `HTTP` 和 `WebSocket`, 默认值为: `HTTP`**  
**(Bot 只支持反向 WebSocket 呢)**  
* **`FloraHost`: Bot 监听的 IP 地址, 默认值为: `127.0.0.1`**  
* **`FloraPort`: Bot 监听的端口号, 默认值为: `3003`**  
**(Http 协议配置, 请在框架中将 Http 上报打开并且添加上报地址为: `http://FloraHost:FloraPort`)**  
**(反向 WebSocket 协议配置, 请在框架中将 反向WebSocket 服务打开并且添加地址为: `ws://FloraHost:FloraPort`)**  
* **`FrameworkAddress`: 框架的 Http 协议监听地址, 格式为: `IP地址:端口号`, 默认值为: `127.0.0.1:3000`**  
* **`BotID`: 登录的 Bot 账号的 ID, 默认值为 `0`**  
* **`Administrator`: 管理员/所有者/主人的 ID 列表, 一些特殊的功能需要该账号的 ID 在此列表内才能够触发, 格式为: `[ID, ID, ...]`, 默认值为: `[0]`**   
:::
**再次启动, 不出意外的话, 已经可以正常使用了**
