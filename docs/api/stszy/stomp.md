# 播报推送

## 1. 接口说明

本接口文档旨在为广播系统提供发布和订阅广播消息的规范，适用于发布警告消息、通知等内容。

## 2. 接口列表

### 2.1 广播发布接口

- **接口说明**：发布广播消息
- **接口地址**：`https://webchat.aepic.net:9601/wdptapi/broadcast/publish`
- **请求方式**：POST

#### 2.1.1 请求参数

##### 2.1.1.2 请求体

| 参数名称                   | 类型   | 出现要求 | 描述                         |
| :------------------------- | :----- | :------- | :--------------------------- |
| **id**                     | string | 必填     | 广播消息的唯一标识           |
| **systemID**               | string | 必填     | 系统 ID（要推送给的系统 ID） |
| **title**                  | string | 必填     | 广播消息的标题               |
| **content**                | string | 必填     | 广播消息的内容               |
| **systemLink**             | string | 可选     | 要跳转的系统链接             |
| **messageType**            | string | 可选     | 消息类型                     |
| **fileList**               | array  | 可选     | 附件列表                     |
| fileList[n].fileName       | string | 必填     | 附件文件名                   |
| fileList[n].fileLink       | string | 必填     | 附件文件链接                 |
| fileList[n].fileReportTime | string | 必填     | 文件的报告时间               |

#### 2.1.2 请求示例

```json
{
  "id": "1",
  "systemID": "你的系统id(其实就是你订阅的系统id)",
  "title": "紧急通知",
  "content": "紧急通知：存在网络安全风险，请立刻检查。",
  "systemLink": "https://www.baidu.com",
  "messageType": "消息类型",
  "fileList": [
    {
      "fileName": "a.pdf",
      "fileLink": "https://xh-ai.obs.cn-north-1.myhuaweicloud.com:443/zsk/98231/2024/07/23/docx/203266127757001380176766.docx",
      "fileReportTime": "2020-10-01 10:00:00"
    }
  ]
}
```

#### 2.1.3 返回结果

##### 成功响应

```json
{
  "msg": "成功",
  "code": "200"
}
```

##### 错误响应

```json
{
  "msg": "异常信息",
  "code": "500"
}
```

---

### 2.2 广播订阅接口

- **接口说明**：订阅广播消息
- **订阅地址**：`https://webchat.aepic.net:9601/wdptapi/ws`
- **协议**：STOMP

#### 2.2.1 订阅说明

推荐使用任何支持 **STOMP** 协议的客户端来订阅广播消息。

**注意**：客户端需要通过 **WebSocket** 连接到服务器，并使用 **STOMP** 协议订阅广播频道。订阅的频道格式为 `/broadcast/{systemID}`，其中 `{systemID}` 是系统 ID，用户需要替换为相应的系统 ID。

#### 2.2.2 订阅示例 (使用 sockjs 和 stompjs)

```javascript
import SockJS from "sockjs-client";
import Stomp from "stompjs";

const socket = new SockJS(`https://api3.aepic.net:9601/wdptapi/ws`);
const stompClient = Stomp.over(socket);

// 连接到 WebSocket 服务器
stompClient.connect({}, function (frame) {
  console.log("已连接: " + frame);
  // 订阅广播频道
  stompClient.subscribe(`/broadcast/{systemID}`, function (message) {
    console.log("收到广播消息: ", JSON.parse(message.body));
  });
});
```

#### 2.2.3 订阅返回示例 (消息体)

```json
{
  "body": "{\"id\":\"1\",\"title\":\"紧急通知\",\"content\":\"紧急通知：存在网络安全风险，请立刻检查。\",\"systemID\":\"SHSAPP001\",\"systemLink\":\"https://www.baidu.com\",\"fileList\":[{\"fileName\":\"a.pdf\",\"fileLink\":\"https://xh-ai.obs.cn-north-1.myhuaweicloud.com:443/zsk/98231/2024/07/23/docx/203266127757001380176766.docx\",\"fileReportTime\":\"2020-10-01 10:00:00\"}],\"audio_link\":\"https://xh-ai.obs.cn-north-1.myhuaweicloud.com/audio/2024/12/10/32463271952002322114479.wav\",\"publish_at\":\"2025-03-21 09:21:45\"}"
}
```

#### 字段描述

| 字段名称                   | 类型   | 描述                         |
| :------------------------- | :----- | :--------------------------- |
| **id**                     | string | 广播消息的唯一标识           |
| **title**                  | string | 广播消息的标题               |
| **content**                | string | 广播消息的内容               |
| **systemID**               | string | 系统 ID（要推送给的系统 ID） |
| **systemLink**             | string | 要跳转的系统链接             |
| **messageType**            | string | 消息类型                     |
| **fileList**               | array  | 附件列表                     |
| fileList[n].fileName       | string | 附件文件名                   |
| fileList[n].fileLink       | string | 附件文件链接                 |
| fileList[n].fileReportTime | string | 文件的报告时间               |
| **audio_link**             | string | 音频链接                     |
| **publish_at**             | string | 发布的时间                   |
