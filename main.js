'use strict';
// process.env['ELECTRON_DISABLE_SECURITY_WARNINGS']=true

const { app, BrowserWindow } = require('electron')
const url = require('url');
const path = require('path');

// const env = process.env.NODE_ENV || 'development';
  
// if (env === 'development') {
//     try {
//         require('electron-reloader')(module, {
//             debug: true,
//             watchRenderer: true
//         });
//     } catch (_) { console.log('Error'); }    
// }



let window = null;
function createWindow() {
    // creating window
    window = new BrowserWindow({
        title: "Electron App",
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    });
    

    // https://github.com/yan-foto/electron-reload#api
    // https://github.com/maximegris/angular-electron/blob/master/app/main.ts
    
    window.loadURL(
        url.format(__dirname,{
            pathname: path.join('dist/electronProj/index.html'),
            protocol: "file:",
            slashes: true
        })
    );


    window.loadFile('dist/electronProj/index.html'); // use loadURL instead
    
    // to open developer tools while project is run
    window.webContents.openDevTools();

    window.on('closed', function() {
        window = null
    });



    
}

app.on('ready', createWindow);
app.on('window-all-closed', () => {
    window = null;
    if (process.platform !== 'darwin') {
    app.quit();
  }
});