# QRCode2Link

![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![License](https://img.shields.io/badge/license-MIT-green?style=for-the-badge)

[English](./README.md) | [简体中文](./README.zh-CN.md) | [Français](./README.fr.md)

**QRCode2Link** 是一个现代化的、注重隐私的 Web 应用程序，可以即时将图片中的二维码解码为可点击的链接。它完全在您的浏览器中运行，确保您的数据永远不会离开您的设备。

## ✨ 功能特点

- **🚀 即时解码**：拖放或上传任何包含二维码的图片。
- **📋 剪贴板支持**：只需截图并粘贴 (Ctrl+V / Cmd+V) 即可立即解码。
- **🔒 隐私优先**：所有处理均使用 `jsQR` 在本地进行。**没有任何图片会被上传到服务器。**
- **🌍 双语界面**：无缝切换英语和中文。
- **🎨 现代设计**：拥有流畅的玻璃拟态 UI 和响应式动画。

## 🛠️ 技术栈

- [React 19](https://react.dev/) -用于构建 Web 和原生用户界面的库
- [Vite](https://vitejs.dev/) - 下一代前端工具链
- [jsQR](https://github.com/cozmo/jsQR) - 纯 JavaScript 二维码读取库

## 🚀 快速开始

要在本地运行此项目，请按照以下步骤操作：

### 前置要求

确保您的机器上安装了 [Node.js](https://nodejs.org/)（版本 16 或更高）。

### 安装

1. 克隆仓库：
   ```bash
   git clone https://github.com/baowenjin/qrcode2link.git
   cd qrcode2link
   ```

2. 安装依赖：
   ```bash
   npm install
   ```

3. 启动开发服务器：
   ```bash
   npm run dev
   ```

4. 打开浏览器并访问 `http://localhost:5173`。

## 📦以此构建与部署

为生产环境构建项目：

```bash
npm run build
```

### 部署到 Vercel

本项目针对 Vercel 部署进行了优化。

1. 将代码推送到 GitHub 仓库。
2. 在 Vercel 中导入项目。
3. Vercel 将自动检测 Vite 设置并部署您的站点。

## 📄 许可证

本项目基于 MIT 许可证开源。欢迎在您的项目中使用和修改。
