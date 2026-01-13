# QRCode2Link

<div align="center">
  <h1>QRCode2Link</h1>
  <p>
    <strong>直接在浏览器中即时将二维码解码为可点击的链接。</strong>
  </p>
  
  <p>
    <a href="https://qrcode2link.vercel.app">
      <img src="https://img.shields.io/badge/Live_Demo-立即访问-success?style=for-the-badge&logo=vercel&logoColor=white" alt="Live Demo" />
    </a>
  </p>

  <p>
    <a href="https://github.com/baowenjin/qrcode2link/blob/main/LICENSE">
      <img src="https://img.shields.io/badge/license-MIT-green?style=flat-square" alt="License" />
    </a>
    <img src="https://img.shields.io/badge/隐私-仅本地运行-blue?style=flat-square" alt="Privacy First" />
    <img src="https://img.shields.io/badge/v1.0.0-稳定版-orange?style=flat-square" alt="Version" />
  </p>

  <p>
    <a href="./README.md">English</a> | 
    <a href="./README.zh-CN.md">简体中文</a> | 
    <a href="./README.fr.md">Français</a>
  </p>
</div>

---

## 🚀 简介

**QRCode2Link** 是一款轻量级、注重隐私的 Web 工具，旨在解决一个简单的问题：无需拿起手机即可从电脑上的图片中提取二维码链接。

与许多将您的图片上传到远程服务器进行处理的在线工具不同，**QRCode2Link 100% 在您的本地浏览器中运行**。您的图片和数据永远不会离开您的设备，确保完全的隐私和安全。

### 为什么选择 QRCode2Link？

- **🔒 隐私优先**：基于 `jsQR` 构建，所有解码都在浏览器内存中完成。无追踪，无上传。
- **⚡️ 极速体验**：即时出结果，没有服务器延迟。
- **📋 剪贴板集成**：支持直接粘贴图片（Ctrl+V）——非常适合截图识别。
- **🌍 全球化支持**：完全本地化支持英语、简体中文、法语和日语。

## 🎯 核心功能

| 功能 | 描述 |
| :--- | :--- |
| **拖拽上传** | 只需将包含二维码的任何图片文件拖放到界面上即可。 |
| **粘贴解码** | 截图后直接粘贴。无需先保存文件。 |
| **即时链接** | 自动检测 URL 并提供一键“打开”或“复制”按钮。 |
| **响应式 UI** | 美观、现代的玻璃拟态设计，完美适配桌面和移动端。 |

## 🛠 技术栈

本项目使用现代 Web 技术构建，以确高性能和可维护性：

- **[React 19](https://react.dev/)**：用于 Web 和原生用户界面的最新版本库。
- **[Vite](https://vitejs.dev/)**：下一代前端工具链，实现超快构建。
- **[jsQR](https://github.com/cozmo/jsQR)**：一个强大、纯 JavaScript 的二维码读取库。

## 💻 本地开发

想要在本地运行或参与贡献？

### 前置要求
- Node.js (v16+)
- npm 或 yarn

### 快速开始

1. **克隆仓库**
   ```bash
   git clone https://github.com/baowenjin/qrcode2link.git
   cd qrcode2link
   ```

2. **安装依赖**
   ```bash
   npm install
   ```

3. **启动开发服务器**
   ```bash
   npm run dev
   ```

4. 打开 `http://localhost:5173` 查看应用。

## 🚢 部署

本项目针对 **Vercel** 部署进行了优化。

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fbaowenjin%2Fqrcode2link)

只需将您的 GitHub 仓库连接到 Vercel，它将自动检测设置。

## 📄 许可证

本项目基于 [MIT 许可证](LICENSE) 开源。
