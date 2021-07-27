import espessura from "./espessura.js"

const res = document.querySelector("#res")

document.querySelector("#letrabtn").addEventListener("click", () => {
    let palavra = document.querySelector("#quant").value // Palavra
    let letras = palavra.replace(/\s/g, '').length
    let alt = Number(document.querySelector("#alt").value) // Altura
    let espeg = document.getElementsByName("espessura") // get Espessura
    let espec // preço dependendo da espessura
    let espe // Espessura
    let quantc = 10 // desconto dependendo da quantidade

    if (alt <= 0 || palavra <= 0){ // Alerta caso o input estiver vazio ou <= 0
        alert("Preencha todas as entradas antes de calcular, usando apenas números maiores que 0 (zero).")
        res.innerHTML= 'Preencha todas as entradas.'
    } else {    
        for (let c in espeg){ // preço da madeira dependendo da espessura
        if (espeg[c].checked) {
            espe = Number(espeg[c].value)
            espec = espessura(espe)
        }}

        if (letras > 9) {
            quantc = 8          // desconto a partir de 10 letras
        } else if (letras > 50){
            quantc = 7          // desconto a partir de 50 letras
        }
        
        let valor =  letras * (alt * alt * espec * quantc)
        res.innerHTML = `${palavra} (${letras} letras):<br>${alt}m de altura e ${espe}mm de espessura<br>R$${valor.toFixed(2)}`
        }
})