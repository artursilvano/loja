const res = document.querySelector("#res")

document.querySelector("#acrilicobtn").addEventListener("click", () => {
    let comp = Number(document.querySelector("#comp").value) // Comprimento
    let larg = Number(document.querySelector("#larg").value) // Largura
    let quant = Number(document.querySelector("#quant").value) // Quantidade

    if (comp <= 0 || larg <= 0 || quant <= 0){ // Alerta caso o input estiver vazio ou <= 0
        alert("Preencha todas as entradas antes de calcular, usando apenas números maiores que 0 (zero).")
        res.innerHTML= 'Preencha todas as entradas.'
    } else {
        let valor = quant * comp * larg * 165
    res.innerHTML = `${quant} Placa(s) de acrílico: ${comp}m x ${larg}m<br>R$${valor.toFixed(2)}`
    }
})