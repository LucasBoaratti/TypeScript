function verificar_par_ou_impar(numero: number): string {
     if (numero % 2 === 0) {
          return "O número é par 🥳";
     }
     else {
          return "O número é ímpar 😉";
     }
}

console.log(verificar_par_ou_impar(10));