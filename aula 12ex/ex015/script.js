function vrf() {
var data = new Date()
var ano = data.getFullYear()
var fano = document.getElementById('txtano')
var res = document.getElementById('res')
if (fano.value.length == 0 || Number(fano.value) > ano) {
    window.alert('[ERRO] Verifique os dados e tente novamente!')
}  else {
    var fsex = document.getElementsByClassName('radsex')
    var idade = ano - Number(fano.value)
    var genero = ''
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if (fsex[0].checked) {
        genero = 'macho'
    if (idade >= 0 && idade < 10) {
        img.setAttribute('src', 'Imagens/baby-male.jpg')
    } else if (idade < 21) {
        img.setAttribute('src', 'Imagens/young-male.jpg')
    } else if (idade < 50) {
        img.setAttribute('src', 'Imagens/adult-male.jpg')
    } else  {
       img.setAttribute('src', 'Imagens/elder-male.jpg') 
    }
} else if (fsex[1].checked) {
    genero = 'femea'
    if (idade >= 0 && idade < 10) {
    img.setAttribute('src', 'Imagens/baby-female.jpg')  
    } else if (idade < 21) {
      img.setAttribute('src', 'Imagens/young-female.jpg')  
    } else if (idade < 50) {
       img.setAttribute('src', 'Imagens/adult-female.jpg')
    } else {
       img.setAttribute('src', 'Imagens/elder-female.jpg')
    }
}
res.style.textAlign = 'center'
res.innerHTML = `Detectamos ${genero} com ${idade} anos`
res.appendChild(img)
}

}