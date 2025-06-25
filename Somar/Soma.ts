function somar_array(numeros: number[]):number {
     let soma = 0;

     for (let i = 0; i < numeros.length; i++) {
          soma += numeros[i];
     }

     return soma;
}

const listaNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(somar_array(listaNumeros));