# Calculator App

![Electron](https://img.shields.io/badge/Electron-Desktop_App-47848F?logo=electron)
![Node.js](https://img.shields.io/badge/Node.js-JavaScript_Runtime-339933?logo=node.js)
![Platform](https://img.shields.io/badge/Platform-Windows-blue)
![License](https://img.shields.io/badge/License-ISC-green)

A lightweight **desktop calculator application** built with **Electron**, using a web interface powered by **HTML, CSS, and JavaScript**.

This project demonstrates how a simple web application can be packaged into a desktop application using Electron.

---

## Screenshot

<img width="723" height="406" alt="Calculator Screenshot" src="https://github.com/user-attachments/assets/2c04223d-2cce-4584-ba2c-5a5540e05da5" />


---

## Features

* Basic arithmetic operations
* Desktop application built with Electron
* Keyboard input support
* Single instance application
* Navigation protection
* Disabled external window creation
* Zoom disabled for consistent UI
* Clean and lightweight interface

---

## Tech Stack

* **Electron**
* **HTML**
* **CSS**
* **JavaScript**
* **Bootstrap**

---

## Project Structure

```
calculator-app
│
├─ main.js
├─ package.json
│
├─ app
│   ├─ index.html
│   ├─ style.css
│   ├─ app.js
│   ├─ favicon.ico
│   │
│   ├─ css
│   │   └─ bootstrap.min.css
│   │
│   ├─ js
│   │   └─ bootstrap.bundle.min.js
│   │
│   └─ assets
│       └─ screenshot.png
│
├─ node_modules
└─ dist
```

---

## Installation

Clone the repository:

```
git clone https://github.com/yourusername/calculator-app.git
cd calculator-app
```

Install dependencies:

```
npm install
```

Run the application:

```
npm start
```

---

## Build Executable

To build the application executable:

```
npm run build
```

Build results will appear in:

```
dist/
```

Example:

```
dist/
├─ Calculator Setup.exe
└─ win-unpacked/
   └─ Calculator.exe
```

---

## Download Release

You can download the latest compiled version from the **Releases** page:

https://github.com/yourusername/calculator-app/releases

After downloading:

1. Run the installer `Calculator Setup.exe`
2. Follow the installation steps
3. Launch **Calculator** from your system

---

## Security Configuration

This application applies several Electron security best practices:

* `contextIsolation: true`
* `nodeIntegration: false`
* Single instance lock
* Navigation blocked
* Redirect blocked
* External window creation disabled
* Zoom disabled for UI stability

---

## License

This project is licensed under the **ISC License**.
