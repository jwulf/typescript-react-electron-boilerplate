const {app, BrowserWindow} = require('electron')

// handle squirrel events:
// https://github.com/electron/grunt-electron-installer#handling-squirrel-events
if(require('electron-squirrel-startup')) return;

let win

const installExtenstions = () => {
  const installer = require('electron-devtools-installer');
  require('electron-debug')({showDevTools: true});

  const extensions = [
    'REACT_DEVELOPER_TOOLS',
    'REDUX_DEVTOOLS'
  ];
  for (const name of extensions) {
    try {
      installer.default(installer[name]);
    } catch (e) {}
  }
}

function createWindow () {

  win = new BrowserWindow({width: 800, height: 600})

  if (process.env.NODE_ENV === 'development') {
    installExtenstions()
    win.webContents.openDevTools()
    win.loadURL('http://localhost:3000/')
  } else {
    win.loadURL(`file://${__dirname}/index.html`)
  }


  win.on('closed', () => {
    win = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (win === null) {
    createWindow()
  }
})
