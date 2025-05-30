var agora = new Date()
var hora = agora.getHours()
console.log (`Agora sao ${hora} horas.`)
  if (hora <= 5) {
    console.log(`Boa Madrugada`)
} else if (hora >= 6 && hora < 12) {
    console.log('Bom Dia!')
} else if (hora <= 18) {
    console.log(`Boa Tarde!`)
} else if (hora >= 17 && 24){
    console.log(`Boa Noite!`)
}