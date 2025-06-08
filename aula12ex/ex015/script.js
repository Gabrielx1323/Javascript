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
    if (fsex[0].checked) {
        genero = 'Gosta De Femea'
    if (idade >= 0 && idade < 10) {
        img.setAttribute('src', 'baby-male.jpg')
    } else if (idade < 21) {
        img.setAttribute('src', 'young-male.jpg')
    } else if (idade < 50) {
        img.setAttribute('src', 'adult-male.jpg')
    } else  {
       img.setAttribute('src', 'elder-male.jpg') 
    }
} else if (fsex[1].checked) {
    genero = 'Gosta De Macho'
    if (idade >= 0 && idade < 10) {
    img.setAttribute('src', 'baby-male.jpg')  
    } else if (idade < 21) {
      img.setAttribute('src', 'young-male.jpg')  
    } else if (idade < 50) {
       img.setAttribute('src', 'adult-male.jpg')
    } else {
       img.setAttribute('src', 'elder-male.jpg')
    }
}
res.style.textAlign = 'center'
res.innerHTML = `Detectamos ${genero} com ${idade} anos`
res.appendChild(img)
}

}