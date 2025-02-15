# 插件开发
**要求:**  
* **会 Python 的基础知识**  
* **会使用 Python 解析 Json**  
* **如果会 CQ 码会更好**  
* **...**  
**示范(可从仓库中的 `PluginTemplate` 文件夹内找到模板):**  
**`Plugin.json`(必要):**  
```Json
{
    "PluginName": "插件名",
    "DependentLibraries": null,
    "IsLibraries": false,
    "PluginIcon": null,
    "PluginAuthor": "插件作者名",
    "MainPyName": "插件主 .py 文件名, 不要带上 .py 后缀名",
    "PluginDescription": "插件描述",
    "EnablePlugin": true
}
```
**`Plugin.json` 文件键值对照表:**  
* **`PluginName`: 插件名**  
* **`DependentLibraries`: 依赖的第三方库的名称, 若 `AutoInstallLibraries` 值为 `true` 则会尝试自动安装这些库, 格式为: `["库名", "库名", ...]`**  
* **`IsLibraries`: 是否为依赖库插件**  
* **`PluginIcon`: 插件的图标, 格式为: `xxx.png`(要带上后缀, 主流文件格式即可, 可以在文件夹下, 但是相对路径是从 `Plugin.json` 文件所在的目录开始的)**  
* **`PluginAuthor`: 插件作者名**  
* **`MainPyName`: 插件主 .py 文件名, 不要带上 .py 后缀名, 另外 py 文件里不要赋值 `__name__` 变量!**  
* **`PluginDescription`: 插件描述**  
* **`EnablePlugin`: 是否启用插件, 这是一个标志, 用于启用和禁用插件的, 默认值为 `true` 即可**  
## 前言
::: warning
**目前 WebSocket 协调连接可能调用一些 API 尚存一些问题, 一些框架的 API 调用起来可能会比较复杂, 目前做不到把它变得更加完美, 当前的WebSocket链接仍然处于不稳定状态**  
:::
::: details 插件主文件编写示范
```Python
# 前言,这里用不到的函数可以不定义,可以直接删去,包括API也可以删去不定义,不会报错的

flora_api = {}  # 顾名思义,FloraBot的API,载入(若插件已设为禁用则不载入)后会赋值上


def occupying_function(*values):  # 该函数仅用于占位,并没有任何意义
    pass


send_msg = occupying_function


def init():  # 插件初始化函数,在载入(若插件已设为禁用则不载入)或启用插件时会调用一次,API可能没有那么快更新,可等待,无传入参数
    global send_msg
    print(flora_api)
    send_msg = flora_api.get("SendMsg")
    print("FloraBot插件模板 加载成功")


def api_update_event():  # 在API更新时会调用一次(若插件已设为禁用则不调用),可及时获得最新的API内容,无传入参数
    print(flora_api)


def event(data: dict):  # 事件函数,FloraBot每收到一个事件都会调用这个函数(若插件已设为禁用则不调用),传入原消息JSON参数
    print(data)
    send_type = data.get("SendType")
    send_address = data.get("SendAddress")
    ws_client = send_address.get("WebSocketClient")
    ws_server = send_address.get("WebSocketServer")
    send_host = send_address.get("SendHost")
    send_port = send_address.get("SendPort")
    uid = data.get("user_id")  # 事件对象QQ号
    gid = data.get("group_id")  # 事件对象群号
    mid = data.get("message_id")  # 消息ID
    msg = data.get("raw_message")  # 消息内容
    if msg is not None:
        msg = msg.replace("&#91;", "[").replace("&#93;", "]").replace("&amp;", "&").replace("&#44;", ",")  # 消息需要将URL编码替换到正确内容
        print(send_type, uid, gid, mid, msg, ws_client, ws_server, send_host, send_port)
```
**上面的注释已经很详细了**  
**注意事项:**  
* **这些函数以及 `flora_api` 变量都不是必要的, 少了也不会报错**  
* **`init` 函数里获取 API 内容的话, `PluginsDict` 和 `PluginsInfoDict` 还不是正确的, 推荐放到 `api_update_event` 函数中处理**
:::
## 插件API
**这些在插件中都可以使用 `flora_api.get()` 获取到**  
* **`FloraPath`: FloraBot.py 文件所在的绝对路径, 不是这个文件的路径, 而是所在目录**  
* **`FloraHost`: Bot 监听的 IP 地址**  
* **`FloraPort`: Bot 监听的端口号**  
* **`FrameworkAddress`: QQ 框架的 Http 协议监听地址**  
* **`BotID`: 登录的 Bot 账号的 ID**  
* **`Administrator`: 管理员/所有者/主人的 ID 列表**  
* **`FloraVersion`: Bot 的版本号**  
* **`FloraServer`: Bot 的 Flask 实例**  
* **`UpdateFloraApi`: 更新 `flora_api` 的函数, 调用了会同时调用插件中的 `api_update_event` 函数, 无参数**  
* **`LoadPlugins`: 加载/重载插件函数, 会调用 `UpdateFloraApi` 函数, 无参数**
* **`BroadcastEvent`: 广播消息函数, 向所有插件包括内置功能广播基于 OneBot 协议的数据, 参数如下方注释解释**
```Python
def broadcast_event(data: dict, send_type: str, ws_client=None, ws_server=None, send_host: str = "", send_port: int | str = ""):
    # 广播消息函数,data: 基于OneBot协议的数据
    # send_type: 发送类型,告诉插件是用HTTP还是WebSocket发送消息
    # ws_client: WebSocket连接实例,ws_server: WebSocket服务端实例(若发送类型为WebSocket这两个参数必填)
    # send_host: HTTP协议发送地址,send_port: HTTP协议发送端口(若填这两个参数则使用自定义地址发送)
```
**调用 `BroadcastEvent` 示例:**  
**如果你希望其他插件能够将消息从你的插件中开启的 HTTP 发送消息, 你可以这么写:**  
```Python
broadcast_event(data, "HTTP", None, None, "地址", "端口")
```
**WebSocket:**  
```Python
broadcast_event(data, "WebSocket", "地址", "端口")
```
* **`SendMsg`: 发送信息函数, 也可以发送事件, 只要你会 CQ 码, 参数如下方注释解释**   
**`SendMsg` 函数:**
```Python
def send_msg(msg: str, uid: str | int, gid: str | int | None, mid: str | int | None = None, ws_client=None, ws_server=None, send_host: str = "", send_port: int | str = ""):
    # 发送消息函数,send_type: 发送类型,决定是用HTTP还是WebSocket发送消息
    # msg: 正文,uid: ID,gid: 群号,mid: 消息编号
    # ws_client: WebSocket连接实例,ws_server: WebSocket服务端实例(若发送类型为WebSocket这两个参数必填)
    # send_host: HTTP协议发送地址,send_port: HTTP协议发送端口(若填这两个参数则使用自定义地址发送)
```
**关于 `SendMsg` 的补充, 默认传入参数如下即可:**  
```Python
send_msg(send_type, "正文", uid, gid, mid, ws_client, ws_server)
```
**默认为回复信息, 如果不需要回复将参数 `mid` 改成 `None` 即可**  
* **`PluginsDict`: 插件对象字典, 使用对应的插件名获取, 并赋值给变量(或不赋值直接调用), 即可将对应的插件当作库来调用**  
* **`PluginsInfoDict`: 插件信息字典, 使用对应的插件名获取, 可获取到对应插件的 `Plugin.json` 已转换为 Python 对象的内容**  
* **`ThePluginPath`: 插件对于 `FloraBot.py` 文件所在的目录的相对路径, 由于是将插件导入再调用的, 所以任何相对路径都是从 `FloraBot.py` 文件所在的目录开始的, 这非常重要, 不推荐使用自己手动定义到插件资源的相对路径, 而是推荐使用 `ThePluginPath` + 插件相对于资源的相对路径(因为可能会出现种种原因导致你手动定义到插件资源的相对路径不能正确使用插件文件夹中的文件), 示例: 我有一个叫做 Test.json 的文件, 在插件目录中的文件夹 Test 中(即 Test/Test.json), 那么获取 `ThePluginPath` 的值拼接到路径"/Test/Test.json"的前面即可获得 `FloraBot.py` 与该文件的相对路径, 现在就可以在插件中正确的使用这个文件了(希望不会那么拗口:) )**  
**如果还是不能理解 `ThePluginPath` 的话, 直接上代码:**  
```Python
import json

group_white_list = []


def init():
    global group_white_list
    with open(f"./{flora_api.get('ThePluginPath')}/Plugin.json", "r", encoding="UTF-8") as plugin_config:
        group_white_list = json.loads(plugin_config.read()).get("GroupWhiteList")
```
**上述代码使用 `ThePluginPath` 拼接了当前插件配置文件的路径, 并且读取并获取了当中的 `GroupWhiteList` 键的值**  
**另外, 如果你要发送图片等本地文件需要绝对路径可以这么写:**  
```Python
flora_api = {}


def occupying_function(*values):  # 该函数仅用于占位,并没有任何意义
    pass


send_msg = occupying_function


def init():
    global send_msg
    send_msg = flora_api.get("SendMsg")


def event(data: dict):  # 事件函数,FloraBot每收到一个事件都会调用这个函数(若插件已设为禁用则不调用),传入原消息JSON参数
    print(data)
    send_type = data.get("SendType")
    send_address = data.get("SendAddress")
    ws_client = send_address.get("WebSocketClient")
    ws_server = send_address.get("WebSocketServer")
    send_host = send_address.get("SendHost")
    send_port = send_address.get("SendPort")
    uid = data.get("user_id")  # 事件对象QQ号
    gid = data.get("group_id")  # 事件对象群号
    mid = data.get("message_id")  # 消息ID
    msg = data.get("raw_message")  # 消息内容
    if msg is not None:
        msg = msg.replace("&#91;", "[").replace("&#93;", "]").replace("&amp;", "&").replace("&#44;", ",")  # 消息需要将URL编码替换到正确内容
        if msg == "TestSendImage":
            send_msg(send_type, f"[CQ:image,file=file:///{flora_api.get('FloraPath')}/{flora_api.get('ThePluginPath')}/Test.png]", uid, gid, mid, ws_client, ws_server, send_host, send_port)
```
**上述代码发送图片时使用了 `FloraPath` 和 `ThePluginPath` 拼接了当前插件文件夹下的 Test.png 的绝对路径, 或获取相对路径的文件的绝对路径**  
**注意!!!: 拼接路径请使用 `/` 而不是 `\` , 因为如果路径中出现了 `\` 则只能在 Windows 中使用, 而 `/` 则是全平台, Windows 支持使用 `/` 拼接路径**   
