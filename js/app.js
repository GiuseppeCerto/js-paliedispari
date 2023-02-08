/***** PAROLA PALINDROMA *****/ 

/CHIEDERE ALL UTENTE UN NOME CON PROMPT/ 

const nameEnteredByUser = prompt('Inserisci un nome')

const nameUserSplitted = nameEnteredByUser.split()

console.log(nameEnteredByUser)

function plindromControl (userName){

    let reverseName = []

    for (let i = (nameEnteredByUser.length - 1); i > - 1; i--){

        reverseName.push(userName[i])

    }

    console.log(reverseName)

    if(userName === reverseName){
        window.alert("Il nome è palindromo")
    }else{
        window.alert("Il nome non è palindromo")
    }
}

plindromControl (nameEnteredByUser)