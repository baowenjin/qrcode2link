# QRCode2Link

<div align="center">
  <h1>QRCode2Link</h1>
  <p>
    <strong>Instantly decode QR codes into clickable links directly in your browser.</strong>
  </p>
  
  <p>
    <a href="https://qrcode2link.vercel.app">
      <img src="https://img.shields.io/badge/Live_Demo-Visit_Now-success?style=for-the-badge&logo=vercel&logoColor=white" alt="Live Demo" />
    </a>
  </p>

  <p>
    <a href="https://github.com/baowenjin/qrcode2link/blob/main/LICENSE">
      <img src="https://img.shields.io/badge/license-MIT-green?style=flat-square" alt="License" />
    </a>
    <img src="https://img.shields.io/badge/Privacy-Local_Only-blue?style=flat-square" alt="Privacy First" />
    <img src="https://img.shields.io/badge/v1.0.0-Stable-orange?style=flat-square" alt="Version" />
  </p>

  <p>
    <a href="./README.md">English</a> | 
    <a href="./README.zh-CN.md">简体中文</a> | 
    <a href="./README.fr.md">Français</a>
  </p>
</div>

---

## 🚀 Introduction

**QRCode2Link** is a lightweight, privacy-focused web tool designed to solve a simple problem: extracting links from QR code images on your computer without grabbing your phone. 

Unlike many online tools that upload your images to a remote server for processing, **QRCode2Link runs 100% locally in your browser**. Your images and data never leave your device, ensuring complete privacy and security.

### Why use QRCode2Link?

- **🔒 Privacy First**: Built with `jsQR`, all decoding happens in your browser's memory. No tracking, no uploads.
- **⚡️ Lightning Fast**: Instant results with no server latency.
- **📋 Clipboard Integration**: Support for pasting images directly (Ctrl+V) — perfect for screenshots.
- **🌍 Global Ready**: Fully localized in English, Chinese (Simplified), French, and Japanese.

## 🎯 Key Features

| Feature | Description |
| :--- | :--- |
| **Drag & Drop** | Simply drag any image file containing a QR code onto the interface. |
| **Paste to Decode** | Take a screenshot and paste it directly. No need to save files first. |
| **Instant Links** | Automatically detects URLs and provides a one-click "Open" or "Copy" button. |
| **Responsive UI** | A beautiful, modern glassmorphism design that works on desktop and mobile. |

## 🛠 Tech Stack

This project is built with modern web technologies for performance and maintainability:

- **[React 19](https://react.dev/)**: The latest version of the library for web and native user interfaces.
- **[Vite](https://vitejs.dev/)**: Next-generation frontend tooling for ultra-fast builds.
- **[jsQR](https://github.com/cozmo/jsQR)**: A robust, pure JavaScript QR code reading library.

## 💻 Development

Want to run this locally or contribute?

### Prerequisites
- Node.js (v16+)
- npm or yarn

### Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/baowenjin/qrcode2link.git
   cd qrcode2link
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the dev server**
   ```bash
   npm run dev
   ```

4. Open `http://localhost:5173` to view the app.

## 🚢 Deployment

The project is optimized for deployment on **Vercel**. 

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fbaowenjin%2Fqrcode2link)

Simply connect your GitHub repository to Vercel, and it will automatically detect the settings.

## 📄 License

This project is open-sourced under the [MIT License](LICENSE).
