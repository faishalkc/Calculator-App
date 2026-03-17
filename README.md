# Calculator App

![Electron](https://img.shields.io/badge/Electron-Desktop_App-47848F?logo=electron)
![Flutter](https://img.shields.io/badge/Flutter-Mobile_App-02569B?logo=flutter)
![Platform](https://img.shields.io/badge/Platform-Windows%20%7C%20Android-blue)
![License](https://img.shields.io/badge/License-ISC-green)

A lightweight **cross-platform calculator application** built using a shared **web-based interface (HTML, CSS, JavaScript)**, packaged into:

* 🖥 **Desktop App** using **Electron**
* 📱 **Mobile App** using **Flutter WebView**

The user interface is styled using **Pico.css**, a minimal and semantic CSS framework, ensuring a clean, consistent, and lightweight experience across platforms.

---

## Screenshot

<img width="482" height="271" alt="Calculator Screenshot" src="https://github.com/user-attachments/assets/2c04223d-2cce-4584-ba2c-5a5540e05da5" />

---

## Features

* Basic arithmetic operations
* Cross-platform support (Desktop & Android)
* Shared web-based UI (single logic across platforms)
* Keyboard input support (desktop)
* Responsive calculator layout
* Clean and lightweight interface
* Native-like experience on mobile (WebView + haptic feedback)
* Dark mode support (system preference)

### Desktop (Electron)

* Single instance application
* Navigation protection
* Disabled external window creation
* Zoom disabled for consistent UI
* Secure Electron configuration

### Mobile (Flutter)

* WebView-based rendering
* Native haptic feedback integration
* Orientation locked to portrait
* Edge-to-edge UI
* System-aware status bar & navigation bar

---

## Security Configuration (Electron)

* `contextIsolation: true`
* `nodeIntegration: false`
* Navigation blocked
* External window creation disabled
* Zoom disabled

---

## Download Release

You can download compiled versions from the <a href="https://github.com/faishalkc/Calculator-App/releases">**Releases**</a> page.

---

## Tech Stack

### Core

* **HTML**
* **CSS**
* **JavaScript**
* **Pico.css**

### Desktop

* **Electron**
* **Node.js**

### Mobile

* **Flutter**
* **WebView**

---

## Project Structure

```
calculator-app
│
├─ desktop/                # Electron (Desktop wrapper)
│   ├─ main.js
│   ├─ package.json
│   └─ app/                # Web UI (HTML, CSS, JS)
│
├─ mobile/                 # Flutter (Mobile wrapper)
│   ├─ lib/
│   │   └─ main.dart       
│   │
│   └─ app/                # Web UI (HTML, CSS, JS)
│
└─ README.md
```

---

## Installation

Clone the repository:

```
git clone https://github.com/faishalkc/Calculator-App.git
cd Calculator-App
```

---

## Run Desktop App (Electron)

```
cd desktop
npm install
npm start
```

---

## Run Mobile App (Flutter)

```
cd mobile
flutter pub get
flutter run
```

---

## Build

### Desktop (Electron)

```
npm run build
```

Output:

```
desktop/dist/
```

---

### Mobile (Flutter)

```
flutter build apk --release
```

Output:

```
build/app/outputs/flutter-apk/
```

---

## License

This project is licensed under the **ISC License**.
