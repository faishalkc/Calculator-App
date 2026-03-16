const { app, BrowserWindow } = require('electron');
const path = require('path');

const isDev = !app.isPackaged;

let mainWindow;

/* Windows taskbar identification */
app.setAppUserModelId("com.calculator.app");

/* Single instance lock */
const gotTheLock = app.requestSingleInstanceLock();

if (!gotTheLock) {
  app.quit();
} else {

  app.on('second-instance', () => {
    if (mainWindow) {
      if (mainWindow.isMinimized()) mainWindow.restore();
      mainWindow.focus();
    }
  });

  function createWindow() {

    mainWindow = new BrowserWindow({

      width: 380,
      height: 560,
      useContentSize: true,

      resizable: false,
      autoHideMenuBar: true,

      show: false,

      title: "Calculator",

      icon: path.join(__dirname, 'app', 'favicon.ico'),

      webPreferences: {
        contextIsolation: true,
        nodeIntegration: false,
        devTools: isDev
      }

    });

    mainWindow.loadFile(
      path.join(__dirname, 'app', 'index.html')
    );

    /* Prevent navigation to external pages */
    mainWindow.webContents.on('will-navigate', (event) => {
      event.preventDefault();
    });

    /* Prevent redirect navigation */
    mainWindow.webContents.on('will-redirect', (event) => {
      event.preventDefault();
    });

    /* Disable new window creation */
    mainWindow.webContents.setWindowOpenHandler(() => {
      return { action: 'deny' };
    });

    /* Disable zoom */
    mainWindow.webContents.setZoomFactor(1);
    mainWindow.webContents.setVisualZoomLevelLimits(1, 1);

    /* Show window only when ready */
    mainWindow.once('ready-to-show', () => {
      mainWindow.show();
    });

  }

  app.whenReady().then(() => {

    createWindow();

    app.on('activate', () => {

      if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
      }

    });

  });

  app.on('window-all-closed', () => {

    if (process.platform !== 'darwin') {
      app.quit();
    }

  });

}