import { app, BrowserWindow, Menu } from "electron";
import path from "path";
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

console.log("__dirname", __dirname);
console.log("__filename", __filename);

function createWindow() {
    const mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, "preload.js"),
        },
    });

    const indexPath = path.join(__dirname, "..", "dist", "index.html");
    console.log("Loading index.html from:", indexPath);

    mainWindow.loadFile(indexPath);
}

// Create a custom menu
const menuTemplate = [
    {
        label: 'File',
        submenu: [
            {
                label: 'Exit',
                click: () => {
                    app.quit();
                }
            }
        ]
    }
];

const menu = Menu.buildFromTemplate(menuTemplate);
Menu.setApplicationMenu(menu);

app.on("ready", createWindow);

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit();
    }
});

app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});