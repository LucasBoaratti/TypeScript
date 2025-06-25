function procurar_nome(lista: string[], nomeProcurado: string):string {
     if (lista.includes(nomeProcurado)) {
          return `${nomeProcurado} está na lista! 😍🥳`;
     }
     else {
          return `${nomeProcurado} não está na lista! 😭😢`;
     }
}

const listaNomes = ["Lucas", "Vini", "Yngrid", "Lívia", "Talita", "Joyce", "Ariane", "Gê", "Gabs", "Thifs", "Nico", "Duda", "Evellyn", "Pedro", "Adegas"];

console.log(procurar_nome(listaNomes, "Lucas"));  