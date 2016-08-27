const {app, BrowserWindow} = require('electron')

let win

const installExtenstions = () => {
  const installer = require('electron-devtools-installer');

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
  installExtenstions()

  win = new BrowserWindow({width: 800, height: 600})

  win.loadURL(`http://localhost:3000/`)

  win.webContents.openDevTools()

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