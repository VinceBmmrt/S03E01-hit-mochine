// Ajouter ici le ou les require() pour importer les modules dont vous aurez besoin.
const readline = require('readline');


// On créé notre interface
const hitMochine = readline.createInterface(
    {
        input: process.stdin,
        output: process.stdout,
    }
)

// Hit parade, classé du premier au dernier.
const hitParade = [
    `Jain - Come`,
    `Matt Simons - Catch & Realease`,
    `Twety One Pilots - Stressed Out`,
    `Justin Bieber - Love Yourself`,
    `Kids United - On écrit sur les murs`,
    `Rihanna - Work`,
    `Julian Perretta - Miracle`,
    `Yall - Hundred Miles`,
    `Kendji Girac - No Me Mirès Màs`,
    `Feder - Blind (feat. Emmi)`
];

// Nos fonctions

const askForUserInteraction = () => { console.log("Que souhaitez-vous ?"); }

const singJingle = () => {
    console.log("Je m'appelle Charlu, je m'appelle Lili, vous êtes chez O'Clock !");
    askForUserInteraction();
}

const sendClassement = () => {
    let counter = 1;
    for (const song of hitParade) {
        console.log(`${counter} - ${song}`);
        counter++;
    }

    askForUserInteraction();
}

const quitProgram = () => {
    console.log("Au revoir !");
    hitMochine.close();
}

// Votre code va ici
console.table(hitParade);

// processus initial
askForUserInteraction();

hitMochine.on("line", (answer) => {
    switch (answer) {
        case "chante":
            singJingle();
            break;
        
        case "classement":
            sendClassement();
            break;

        case "quitter":
            quitProgram();
            break;
    
        default:
            break;
    }
})

