let userNumber = parseInt(prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?"));

for (let i = 1; i <= userNumber; i++) {
    console.log(" ".repeat(userNumber - i) + "#".repeat(i));
}