
function goHome() {
    document.getElementById('myWebview').loadURL('https://google.com')
}
function goBack() {
    document.getElementById('myWebview').goBack()
}
function goForward() {
    document.getElementById('myWebview').goForward()
}
// function goReload() {
    // document.getElementById('myWebview').goReload()
// }
function go() {
    document.getElementById('myWebview').loadURL("https://"+document.getElementById('url').value)
}
function goReload() {
    document.getElementById('myWebview').goReload()
}
