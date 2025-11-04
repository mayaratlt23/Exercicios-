for (let contador = 1; contador <= 10; contador++) {
    console.log('Número atual:', contador)
}

for (let numero = 0; numero <= 15; numero++) {
    if (numero % 2 == 0) {
        console.log('Número par encontrado:', numero)
    }
}

for (let numero = 0; numero <= 15; numero++) {
    if (numero % 2 > 0) {
        console.log('Número ímpar encontrado:', numero)
    }
}


// palavra.length indica quantos caracteres uma string possui
// quandobfazemos palavra entre conchetes e um número --> [1], a gente pega a letra na posião indicada 
const palavra = 'papagaio'

for(let contador = 0; contador <= palavra.length; contador++) {
    console.log(palavra[contador])
}