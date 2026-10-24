import path from "node:path";

import { BrowserWindow } from "electron";

import { windowTargets } from "./windowTargets";

/** Create a Window using options. */
export function createWindow(params: {
  browserwindow?: Electron.BrowserWindowConstructorOptions;
  options: {
    windowTarget: keyof typeof windowTargets;
    openDevTools?: boolean;
  };
}) {
  const {
    browserwindow,
    options: { windowTarget, openDevTools },
  } = params;

  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    // webPreferences: {
    //   preload: path.join(import.meta.dirname, "preload.cjs"),
    // },
    ...browserwindow,
  });

  // and load the index.html of the app.
  if (windowTargets[windowTarget].devUrl) {
    mainWindow.loadURL(windowTargets[windowTarget].devUrl);
  } else {
    mainWindow.loadFile(
      path.join(
        __dirname,
        `../renderer/${windowTargets[windowTarget].viteName}/index.html`,
      ),
    );
  }

  // Open the DevTools.
  if (openDevTools) {
    mainWindow.webContents.openDevTools();
  }
  return mainWindow;
}
