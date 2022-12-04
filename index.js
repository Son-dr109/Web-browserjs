function goBack() {
    document.getElementById('myWebview').goBack()
}
function goForward() {
    document.getElementById('myWebview').goForward()
}
function go() {
    document.getElementById('myWebview').loadURL("https://"+document.getElementById('url').value)
}
document.getElementById('homebtn').onclick = function() {
    document.getElementById('url').value = 'google.com';
    document.getElementById('myWebview').loadURL('https://google.com')
}
