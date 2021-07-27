import espessura from "./espessura.js"

const res = document.querySelector("#res")

document.querySelector("#placabtn").addEventListener("click", () => {
    let comp = Number(document.querySelector("#comp").value) // Comprimento
    let larg = Number(document.querySelector("#larg").value) // Largura
    let espeg = document.getElementsByName("espessura") // get Espessura
    let espec // preço dependendo da espessura
    let espe // Espessura
    let quant = Number(document.querySelector("#quant").value) // Quantidade
    let quantc = 7// desconto dependendo da quantidade

    if (comp <= 0 || larg <= 0 || quant <= 0){ // Alerta caso o input estiver vazio ou <= 0
        alert("Preencha todas as entradas antes de calcular, usando apenas números maiores que 0 (zero).")
        res.innerHTML= 'Preencha todas as entradas.'
    } else {    
        for (let c in espeg){ // preço da madeira dependendo da espessura
        if (espeg[c].checked) {
            espe = Number(espeg[c].value)
            espec = espessura(espe)
        }}

        if (quant > 20) {
            quantc = 6          // desconto a partir de 21 pecas
        } else if (quant > 99){
            quantc = 5          // desconto a partir de 100 pecas
        }
        
        let valor =  quant * (comp * larg * espec * quantc)
        res.innerHTML = `${quant} Placa(s): ${comp}m x ${larg}m de ${espe}mm<br>R$${valor.toFixed(2)}`
        }
})
