# QRCode2Link

![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![License](https://img.shields.io/badge/license-MIT-green?style=for-the-badge)

[English](./README.md) | [简体中文](./README.zh-CN.md) | [Français](./README.fr.md)

**QRCode2Link** est une application web moderne et respectueuse de la vie privée qui décode instantanément les codes QR à partir d'images en liens cliquables. Elle fonctionne entièrement dans votre navigateur, garantissant que vos données ne quittent jamais votre appareil.

## ✨ Fonctionnalités

- **🚀 Décodage instantané** : Glissez-déposez ou téléchargez n'importe quelle image contenant un code QR.
- **📋 Support du presse-papier** : Faites simplement une capture d'écran et collez (Ctrl+V / Cmd+V) pour décoder immédiatement.
- **🔒 Priorité à la confidentialité** : Tout le traitement est effectué localement à l'aide de `jsQR`. **Aucune image n'est téléchargée sur un serveur.**
- **🌍 Interface bilingue** : Basculez sans effort entre l'anglais et le chinois.
- **🎨 Design moderne** : Dispose d'une interface utilisateur élégante en verre (glassmorphism) avec des animations réactives.

## 🛠️ Stack Technique

- [React 19](https://react.dev/) - La bibliothèque pour les interfaces utilisateur web et natives
- [Vite](https://vitejs.dev/) - Outillage Frontend de Nouvelle Génération
- [jsQR](https://github.com/cozmo/jsQR) - Une bibliothèque de lecture de codes QR en pur JavaScript

## 🚀 Pour Commencer

Pour exécuter ce projet localement, suivez ces étapes :

### Prérequis

Assurez-vous d'avoir [Node.js](https://nodejs.org/) (version 16 ou ultérieure) installé sur votre machine.

### Installation

1. Clonez le dépôt :
   ```bash
   git clone https://github.com/baowenjin/qrcode2link.git
   cd qrcode2link
   ```

2. Installez les dépendances :
   ```bash
   npm install
   ```

3. Démarrez le serveur de développement :
   ```bash
   npm run dev
   ```

4. Ouvrez votre navigateur et visitez `http://localhost:5173`.

## 📦 Construction et Déploiement

Pour construire le projet pour la production :

```bash
npm run build
```

### Déployer sur Vercel

Ce projet est optimisé pour le déploiement sur Vercel.

1. Poussez votre code vers un dépôt GitHub.
2. Importez le projet dans Vercel.
3. Vercel détectera automatiquement les paramètres Vite et déploiera votre site.

## 📄 Licence

Ce projet est sous licence MIT. N'hésitez pas à l'utiliser et à le modifier pour vos propres projets.
