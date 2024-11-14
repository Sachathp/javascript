let userNumber = parseInt(prompt("De quel nombre veux-tu calculer la factorielle? : "));

function factorielle(i) {

    if (i === 0 || i === 1) {
        return 1;
    }
   return  i * factorielle(i-1);
}

console.log("La factorielle de " + userNumber + " est " + factorielle(userNumber))

