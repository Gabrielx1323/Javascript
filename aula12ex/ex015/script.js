function vrf() {
var data = new Date()
var ano = data.getFullYear()
var fano = document.getElementById('txtano')
var res = document.getElementById('res')
if (fano.value.legth == 0 || Number(fano.value) > ano) {
    window.alert('[ERRO] Verifique os dados e tente novamente!')
}  else {
    var fsex = document.getElementsByClassName('radsex')
    var idade = ano - Number(fano.value)
    var genero = ''
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if (idade >= 0 && idade < 10) {
        img.setAttribute('src', 'baby-male.jpg')
    } else if (2)
}
}