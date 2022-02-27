//Accesso via email

//Creo un array che contiene l'elenco delle email degli iscritti e lo assegno ad una variabile
let registeredUsers = ["luigi@mail.it", "pippo@fastmail.it", "giacomo@miamail.it", "maria@mail.it", "carmine@fastmail.it", "pierluigi@miamail.it", "nazzareno@mail.it", "giovanni@fastmail.it", "rita@miamail.it", "gianna@gaetano.it"];
//Recupero il bottone che al click avvierà la funzione anonima di verifica
const accessButton = document.querySelector('#login-btn');
accessButton.addEventListener('click', function() {
//Recupero l'email inserita dall'utente e la assegno ad una costante   
    const userEmail=document.getElementById("email-address").value;
//Creo una variabile booleana che imposto su false
    let emailFound = false;
//Avvio un ciclo di verifica di tutti gli indirizzi presenti nell'array (0-9) 
    for (let i = 0; i < registeredUsers.length; i++){
//Confronto se la mail inserita dall'utente sia presente nell'elenco e nel caso lo fosse assegno alla variabile emailFound il valore di true che verifica la seconda condizione e quindi stampa il messaggio di benvenuto e il ciclo si interrompe
        if (userEmail == registeredUsers[i]){
            emailFound = true;
        }
        if (emailFound == true){
            
            document.getElementById("welcomePass").innerHTML="Benvenuto/a nel Fight Club!" + ` ${userEmail}`;
        }
//Se la verifica continua a dare esito negativo il ciclo prosegue fino all'ultimo elemento dell'array e restituisce il messaggio di accesso negato
        else {
            document.getElementById("welcomePass").innerHTML="Mi dispiace, non risulti iscritto/a al nostro club" + ` ${userEmail}`; 
        }
        
    }
});

//Gioca a dadi contro il computer

//Recupero il bottone che al click avvierà la funzione del gioco
const playButton = document.querySelector('#play-btn');
playButton.addEventListener('click', function() {
//Estraggo un numero da 1 a 6 per il giocatore umano
    const playerOne = Math.round(Math.random()*5 + 1);
//Estraggo un nmero da 1 a 6 per il computer
    const playerPc = Math.round(Math.random()*5 + 1);
//Recupero gli elementi html e stampo su entrambi il risultato dell'estrazione
    document.getElementById("player-one").innerHTML=playerOne;
    document.getElementById("player-pc").innerHTML=playerPc;
//Verifico quale giocatore abbia ottenuto il punteggio maggiore, minore o se entrambi abbiano ottenuto lo stesso risultato e a seconda dei casi stampo il messaggio relativo nel campo html result che recupero tramite id
    if (playerOne > playerPc){
        document.getElementById("result").innerHTML="Hai vinto tu!";
    } else if (playerOne < playerPc) {
        document.getElementById("result").innerHTML="Ha vinto il computer!";
    }else {
        document.getElementById("result").innerHTML="Siete pari!";
    }
});





