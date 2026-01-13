# QRCode2Link

<div align="center">
  <h1>QRCode2Link</h1>
  <p>
    <strong>Décodez instantanément les codes QR en liens cliquables directement dans votre navigateur.</strong>
  </p>
  
  <p>
    <a href="https://qrcode2link.vercel.app">
      <img src="https://img.shields.io/badge/D%C3%A9mo_Live-Visiter-success?style=for-the-badge&logo=vercel&logoColor=white" alt="Live Demo" />
    </a>
  </p>

  <p>
    <a href="https://github.com/baowenjin/qrcode2link/blob/main/LICENSE">
      <img src="https://img.shields.io/badge/license-MIT-green?style=flat-square" alt="License" />
    </a>
    <img src="https://img.shields.io/badge/Confidentialit%C3%A9-Local_Uniquement-blue?style=flat-square" alt="Privacy First" />
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

**QRCode2Link** est un outil web léger et respectueux de la vie privée conçu pour résoudre un problème simple : extraire des liens à partir d'images de codes QR sur votre ordinateur sans avoir à prendre votre téléphone.

Contrairement à de nombreux outils en ligne qui téléchargent vos images sur un serveur distant pour les traiter, **QRCode2Link fonctionne à 100 % localement dans votre navigateur**. Vos images et données ne quittent jamais votre appareil, garantissant une confidentialité et une sécurité totales.

### Pourquoi utiliser QRCode2Link ?

- **🔒 Priorité à la confidentialité** : Construit avec `jsQR`, tout le décodage se fait dans la mémoire de votre navigateur. Pas de suivi, pas de téléchargement.
- **⚡️ Ultra Rapide** : Résultats instantanés sans latence serveur.
- **📋 Intégration du presse-papier** : Prise en charge du collage direct d'images (Ctrl+V) — parfait pour les captures d'écran.
- **🌍 Prêt pour le monde** : Entièrement localisé en anglais, chinois (simplifié), français et japonais.

## 🎯 Fonctionnalités Clés

| Fonctionnalité | Description |
| :--- | :--- |
| **Glisser-Déposer** | Glissez simplement n'importe quel fichier image contenant un code QR sur l'interface. |
| **Coller pour Décoder** | Faites une capture d'écran et collez-la directement. Pas besoin de sauvegarder les fichiers d'abord. |
| **Liens Instantanés** | Détecte automatiquement les URL et fournit un bouton "Ouvrir" ou "Copier" en un clic. |
| **UI Réactive** | Un design moderne en verre (glassmorphism) qui fonctionne sur ordinateur et mobile. |

## 🛠 Stack Technique

Ce projet est construit avec des technologies web modernes pour la performance et la maintenabilité :

- **[React 19](https://react.dev/)** : La dernière version de la bibliothèque pour les interfaces web et natives.
- **[Vite](https://vitejs.dev/)** : Outillage frontend de nouvelle génération pour des builds ultra-rapides.
- **[jsQR](https://github.com/cozmo/jsQR)** : Une bibliothèque de lecture de codes QR en JavaScript pur et robuste.

## 💻 Développement

Vous voulez exécuter ceci localement ou contribuer ?

### Prérequis
- Node.js (v16+)
- npm ou yarn

### Démarrage Rapide

1. **Cloner le dépôt**
   ```bash
   git clone https://github.com/baowenjin/qrcode2link.git
   cd qrcode2link
   ```

2. **Installer les dépendances**
   ```bash
   npm install
   ```

3. **Lancer le serveur de développement**
   ```bash
   npm run dev
   ```

4. Ouvrez `http://localhost:5173` pour voir l'application.

## 🚢 Déploiement

Le projet est optimisé pour le déploiement sur **Vercel**.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fbaowenjin%2Fqrcode2link)

Connectez simplement votre dépôt GitHub à Vercel, et il détectera automatiquement les paramètres.

## 📄 Licence

Ce projet est open-source sous la [Licence MIT](LICENSE).
