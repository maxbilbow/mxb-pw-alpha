const { app, BrowserWindow } = require('electron');

let win;

function createWindow () {
  // Create the browser window.
  win = new BrowserWindow({
    width: 600,
    height: 600,
    backgroundColor: '#ffffff',
    icon: `file://${__dirname}/dist/assets/logo.png`
  });


  win.loadURL(`file://${__dirname}/dist/mxb-pw-alpha/index.html`);

  //// uncomment below to open the DevTools.
  // win.webContents.openDevTools()

  // Event when the window is closed.
  win.on('closed', function () {
    win = null
  });
}

// Create window on electron intialization
app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', function () {

  // On macOS specific close process
  if (process.platform !== 'darwin') {
    app.quit()
  }
});

app.on('activate', function () {
  // macOS specific close process
  if (win === null) {
    createWindow()
  }
});


console.log("STUFF");

const {SharedThing} = require(`${__dirname}/dist/mxb-pw-alpha/main`);

let value;


(function rpt() {
  if (value !== SharedThing.value) {
    value = SharedThing.value;
    console.log(`SharedThing.value === ${value}`);
  }
  setTimeout(rpt, 1000);
}());

SharedThing.value = "POO";
