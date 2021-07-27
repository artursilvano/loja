import espessura from "./espessura.js"

const res = document.querySelector("#res")

document.querySelector("#caixacomdobradicabtn").addEventListener("click", () => {
    let comp = Number(document.querySelector("#comp").value) // Comprimento
    let larg = Number(document.querySelector("#larg").value) // Largura
    let alt = Number(document.querySelector("#alt").value) // Altura
    let espeg = document.getElementsByName("espessura") // get Espessura
    let espec // preço dependendo da espessura
    let espe // Espessura
    let fechog = document.getElementsByName("fecho") // get Fecho
    let fechoc
    let fecho
    let quant = Number(document.querySelector("#quant").value) // Quantidade
    let quantc = 10// desconto dependendo da quantidade

    if (comp <= 0 || larg <= 0 || alt <= 0 || quant <= 0){ // Alerta caso o input estiver vazio ou <= 0
        alert("Preencha todas as entradas antes de calcular, usando apenas números maiores que 0 (zero).")
        res.innerHTML= 'Preencha todas as entradas.'
    } else {    
        for (let c in espeg){ // preço da madeira dependendo da espessura
        if (espeg[c].checked) {
            espe = Number(espeg[c].value)
            espec = espessura(espe)
        }}

        for (let c in fechog){
            if (fechog[c].checked) {
                fechoc = Number(fechog[c].value)
                switch (fechoc){
                    case 1:
                        fecho = 'simples'
                    case 1.75:
                        fecho = 'com cadeado'
                }

            }
        }

        if (quant > 9) {
            quantc = 8          // desconto a partir de 10 pecas
        } else if (quant > 50){
            quantc = 7          // desconto a partir de 50 pecas
        }
        
        let valor = quant * (((larg * comp * alt * espec + larg * comp * 2 * espec) + fechoc) * quantc)
        res.innerHTML = `${quant} Caixa(s) com dobradiça: ${comp}m x ${larg}m x ${alt}m de ${espe}mm<br>R$${valor.toFixed(2)}`
        }
})