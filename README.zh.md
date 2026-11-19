# dsh-speech-coach

把 [speech-coach](https://www.npmjs.com/package/speech-coach) 放进聊天里的 DSH 插件。

直接说「帮我分析 `E:\talks\彩排.mp4`，按 3MT 比赛、进阶档打分」，拿到的就是网页版能下载的那份报告：
百分制分数、按丢分排序的改进项、逐句表、以及完整文字稿。视频不上传，音频在本机解码和转写。

## 它加了什么

| | |
|---|---|
| 工具 | `mcp__speech-coach__analyze_speech` |
| 服务器 | `npx -y speech-coach`（stdio） |
| 需要 | Node 20+，磁盘上有一个视频文件 |
| 联网 | 首次运行要下包和约 80 MB 的 Whisper 权重，之后不再联网 |

## 安装

在插件管理器里安装这个目录（等同于 `plugin_manager install_bundle`，target 指向本文件夹）。
Windows 已经配好（`cmd /c npx …`）；macOS / Linux 按 `cordis.patch.yml` 里的注释改那两行。

装完后重启一次 Harness，新的 MCP 行才会加载——之后工具名是 `mcp__speech-coach__analyze_speech`。

## 用法

> 帮我分析 `E:\talks\彩排-final.mp4`，按 3MT 比赛、进阶档打分，告诉我最该改的一件事。

常用参数：`scene`（`homework` 作业 / `final` 期末 / `contest` 比赛 / `interview` 面试 / `defense` 答辩 /
`pitch` 路演）、`level`（`starter` 入门 / `solid` 进阶 / `pro` 专业）、`format`（`camera` 对镜头 /
`stage` 讲台）、`lang`（`en` / `zh`）、`content` 与 `composition`（两个机器判断不了的部分，你自己给 0–100 分）。

## 说明

- 第一次调用会慢：要装包、下模型。之后再调用会复用缓存。
- 长视频：3 分钟的片子 CPU 上大约 1 分钟。这个 bundle 给每次调用留了 30 分钟。
- 这个 bundle 只负责"接上"，引擎和评分都在已发布的包里。
