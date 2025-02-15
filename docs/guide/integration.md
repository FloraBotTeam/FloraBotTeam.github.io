# 对接框架

::: warning 注意
**部分框架使用 WebSocket 协议进行连接, Bot 可能会警告 WebSocket 相关的问题, 如果能够正常收发消息请忽略, 如果不能则为框架的问题**  
:::

## 框架配置
**Http 协议配置, 框架需要把 Http 服务打开, 启用 Http 事件上报, 关闭 Http 心跳(一定要关, 不然会出现意想不到的 Bug), 然后在事件上报地址中添加 Bot 的监听地址, 如果有消息上报格式, 设置为 `CQ码` 即可**  
**WebSocket 协议配置, Bot 只支持反向 WebSocket , 所以框架应该配置反向 WebSocket 哦, 其他部分与 HTTP 协议配置相同**