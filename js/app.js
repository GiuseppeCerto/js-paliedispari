/***** PAROLA PALINDROMA *****/ 

/CHIEDERE ALL UTENTE UN NOME CON PROMPT/ 

const nameEnteredByUser = prompt('Inserisci un nome')

console.log(nameEnteredByUser)

let reverseName = []

for (let i = (nameEnteredByUser.length - 1); i > - 1; i--){

    reverseName.push(nameEnteredByUser[i])

}

console.log(reverseName)

if(nameEnteredByUser === reverseName){
    window.alert("Il nome è palindromo")
}else{
    window.alert("Il nome non è palindromo")
}