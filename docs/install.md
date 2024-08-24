# 开始安装

## 安装依赖

**安装必要的库:**  

* **`flask`**
```Shell
pip install flask
```
* **`requests`**
```Shell
pip install requests
```

## 安装程序

**从[github仓库](https://github.com/AEBC08/FloraBot)下载主体程序`FloraBot.py`,并运行**

**首次启动会启动失败, 此时会在文件 `FloraBot.py` 的同级目录下生成一个 `Config.json` 文件, 编辑它**

::: details 配置Config.json
**`Config.json`:**  
```Json
{
    "AutoInstallLibraries": true,
    "FloraHost": "127.0.0.1",
    "FloraPort": 3003,
    "FrameworkAddress": "127.0.0.1:3000",
    "BotQQ": 0,
    "Administrator": [0]
}
```

**`Config.json` 文件键值对照表:**  
* **`AutoInstallLibraries`: 是否自动安装 pip 安装所需的第三方库, 默认为: `true`**  
* **`FloraHost`: Bot 监听的 IP 地址, 默认值为: `127.0.0.1`**  
* **`FloraPort`: Bot 监听的端口号, 默认值为: `3003`**  
**(PS: Bot 只支持 Http 协议, 请在 QQ 框架中将 Http 上报打开并且添加上报地址为: `http://FloraHost:FloraPort`)**  
* **`FrameworkAddress`: QQ 框架的 Http 协议监听地址, 格式为: `IP地址:端口号`, 默认值为: `127.0.0.1:3000`**  
* **`BotQQ`: 登录的 Bot 账号的 QQ 号, 默认值为 `0`**  
* **`Administrator`: 管理员/所有者/主人的 QQ 号列表, 一些特殊的功能需要该账号的 QQ 号在此列表内才能够触发, 格式为: `[QQ号, QQ号, ...]`, 默认值为: `[0]`** 
:::

**如果配置没问题那么再次启动应该会成功**

## 框架配置
**Bot 只支持 Http 协议, 框架需要把 Http 服务打开, 启用 Http 事件上报, 关闭 Http 心跳**
::: warning
一定要关, 不然会出现意想不到的 Bug
::: 
**在事件上报地址中添加 Bot 的监听地址, 如果有消息上报格式, 设置为 `CQ码` 即可**

::: details 对接llonebot
![onebot](/onebot.png "onebot")
**配置文件内`FrameworkAddress`修改为地址+llonebot内http监听端口**

**添加http上报地址为`http://FloraHost:FloraPort`**
![config](/config.png "config")
:::