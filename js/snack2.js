// recupero elementi dal dom
const nameInput = document.getElementById('name');
const notice = document.getElementById('notice');
const button = document.getElementById('button')

// lista invitati
const nameInvited = ['antonio', 'marco', 'giovanni', 'lorenzo', 'luca'];

button.addEventListener ('click', function() {

    // raccolgo il valore dell'input
    const nameValue = nameInput.value.trim().toLowerCase();
    
    // validazione
    if (!nameValue) {
        notice.innerText = 'Non hai inserito nessun nome';
        return;
    }
    
    let isAllowed = false;
    
    // controllo se il nome è presente nella lista
    for (let i = 0; !isAllowed && i < nameInvited.length; i++) {
        const item = nameInvited[i];
        
        if (nameValue === item) {
            isAllowed = true;
        }
    }
    // Dico all'utente se il suo nome è nella lista o no
    notice.innerText = isAllowed ? "Sei in lista puoi entrare" : "Non sei in lista non puoi entrare";
})