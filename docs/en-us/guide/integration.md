# Framework Integration

::: warning Note
**Some frameworks use the WebSocket protocol for connections, and the Bot may issue warnings related to WebSocket. If messages can be sent and received normally, please ignore these warnings; if not, it is an issue with the framework.**
:::

## Framework Configuration
**For HTTP protocol configuration, the framework needs to enable the HTTP service, activate HTTP event reporting, and disable HTTP heartbeats (it must be turned off to avoid unexpected bugs). Then, add the Bot's listening address to the event reporting URL. If there is a message reporting format, set it to `CQ Code`.**
**For WebSocket protocol configuration, the Bot only supports reverse WebSocket, so the framework should be configured accordingly. The rest of the configuration is similar to the HTTP protocol settings.**
