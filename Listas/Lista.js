function procurar_nome(lista, nomeProcurado) {
    if (lista.includes(nomeProcurado)) {
        return "".concat(nomeProcurado, " est\u00E1 na lista! \uD83D\uDE0D\uD83E\uDD73");
    }
    else {
        return "".concat(nomeProcurado, " n\u00E3o est\u00E1 na lista! \uD83D\uDE2D\uD83D\uDE22");
    }
}
var listaNomes = ["Lucas", "Vini", "Yngrid", "Lívia", "Talita", "Joyce", "Ariane", "Gê", "Gabs", "Thifs", "Nico", "Duda", "Evellyn", "Pedro", "Adegas"];
console.log(procurar_nome(listaNomes, "Lucas"));
