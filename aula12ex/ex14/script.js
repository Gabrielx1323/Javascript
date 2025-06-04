function carregar() {
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('img')
var data = new Date()
var hora = data.getHours()
var min = new Date()
var mi = min.getMinutes()
msg.innerHTML = `Agora são ${hora}:${mi}`;
if (hora >= 0 && hora <= 5) {
    img.src = 'Imagens/noite.png'
    document.body.style.backgroundColor = '#515154'
} else if (hora >= 6 && hora <= 12) {
    img.src = 'Imagens/manha.png'
    document.body.style.backgroundColor = '#e2cd9f'
} else if (hora >= 13 && hora <= 18) {
    img.src = 'Imagens/tarde.png'
    document.body.style.backgroundColor = '#b9846f'
} else if (hora >= 19 && hora <= 23) {
    img.src = 'Imagens/noite.png'
    document.body.style.backgroundColor = '#515154'
}
}