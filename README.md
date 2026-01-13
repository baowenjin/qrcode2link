# QRCode2Link

![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![License](https://img.shields.io/badge/license-MIT-green?style=for-the-badge)

**QRCode2Link** is a modern, privacy-focused web application that instantly decodes QR codes from images into clickable links. It runs entirely in your browser, ensuring your data never leaves your device.

## ✨ Features

- **🚀 Instant Decoding**: Drag & drop or upload any image containing a QR code.
- **📋 Clipboard Support**: Simply take a screenshot and paste (Ctrl+V / Cmd+V) to decode immediately.
- **🔒 Privacy First**: All processing happens locally using `jsQR`. **No images are uploaded to any server.**
- **🌍 Bilingual Interface**: Seamlessly switch between English and Chinese.
- **🎨 Modern Design**: Features a sleek glassmorphism UI with responsive animations.

## 🛠️ Tech Stack

- [React 19](https://react.dev/) - The library for web and native user interfaces
- [Vite](https://vitejs.dev/) - Next Generation Frontend Tooling
- [jsQR](https://github.com/cozmo/jsQR) - A pure JavaScript QR code reading library

## 🚀 Getting Started

To run this project locally, follow these steps:

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) (version 16 or later) installed on your machine.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/baowenjin/qrcode2link.git
   cd qrcode2link
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and visit `http://localhost:5173`.

## 📦 Build & Deployment

To build the project for production:

```bash
npm run build
```

### Deploy on Vercel

This project is optimized for deployment on Vercel.

1. Push your code to a GitHub repository.
2. Import the project in Vercel.
3. Vercel will automatically detect the Vite settings and deploy your site.

## 📄 License

This project is licensed under the MIT License. Feel free to use and modify it for your own projects.
