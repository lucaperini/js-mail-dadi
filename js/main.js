//Accesso via email
let registeredUsers = ["luigi@mail.it", "pippo@fastmail.it", "giacomo@miamail.it", "maria@mail.it", "carmine@fastmail.it", "pierluigi@miamail.it", "nazzareno@mail.it","giovanni@fastmail.it", "rita@miamail.it", "gianna@gaetano.it"];
const accessButton = document.querySelector('#login-btn');
accessButton.addEventListener('click', function() {
const userEmail=document.getElementById('email-address').value;
let emailFound = false;
for (let i = 0; i < registeredUsers.length; i++){
    if (userEmail.value == registeredUsers[i].value){
        emailFound == true;
    } 
}
if (emailFound == true){
    document.getElementById('welcomePass').innerHTML="Benvenuto nel Fight Club!";
}
else {
    document.getElementById('welcomePass').innerHTML="Mi dispiace, non risulti iscritto al nostro club"; 
}
});

//Gioca a dadi con il computer
let playerOne = Math.round(Math.random()*5 + 1);
    document.getElementById('player-one').innerHTML=playerOne;
    let playerPc = Math.round(Math.random()*5 + 1);
    document.getElementById('player-pc').innerHTML=playerPc;
    if (playerOne > playerPc){
        document.getElementById('result').innerHTML="Hai vinto tu!";
    } else if (playerOne < playerPc) {
        document.getElementById('result').innerHTML="Ha vinto il computer!";
    }else {
        document.getElementById('result').innerHTML="Siete pari!";
}
// const playButton = document.getElementById('play-btn');
// playButton.addEventListener('Click', function () {
    
    
// });





