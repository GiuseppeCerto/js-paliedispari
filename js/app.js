/***** PAROLA PALINDROMA *****/ 

/CHIEDERE ALL UTENTE UN NOME CON PROMPT/ 

// const nameEnteredByUser = prompt('Inserisci un nome')

// const lowerNameUser = nameEnteredByUser.toLowerCase ('')

// function plindromControl (userName){

//     let reverseName = ''

//     for (let i = (userName.length - 1); i > - 1; i--){

//         reverseName = reverseName + userName[i]
//     }

//     console.log(reverseName)

//     if(userName === reverseName){
//         window.alert("Il nome è palindromo")
//     }else{
//         window.alert("Il nome non è palindromo")
//     }
// }

// plindromControl (lowerNameUser)


/***** PARI O DISPARI *****/ 

const numberUtent = prompt('Inserisci un numero da 1 a 5')

while (numberUtent >= 6 || numberUtent <= 0){

    numberUtent = prompt('Inserisci un numero da 1 a 5')
} 

let intNumberUtent = parseInt(numberUtent)

console.log(numberUtent)

let randomNumber 

randomNumber = Math.floor(Math.random() * 5 + 1);

console.log(randomNumber)

function evenOddVerifier (utentNumber, pcNumber){

    let sumNumbers = utentNumber + pcNumber

    console.log(sumNumbers)

    if ((sumNumbers % 2) === 0){
        window.alert("Il numero è pari")
    }else{
        window.alert("Il numero è dispari")
    }
}

evenOddVerifier (intNumberUtent,randomNumber)




