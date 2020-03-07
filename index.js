const app  = require('electron').remote.app;

const exitButton  = document.getElementById('exitButton');
exitButton.addEventListener('click', function(event){
    app.quit();
});