function carregar() {
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('img')
var data = new Date()
//var hora = data.getHours()
var min = new Date()
//var mi = min.getMinutes()
var hora = 4
var mi = 10
msg.innerHTML = `Agora são ${hora}:${mi}`;
if (hora >= 0 && hora <= 5) {
    img.src = 'noite.png'
} else if (hora >= 6 && hora <= 12) {
    img.src = 'manha.png'
} else if (hora >= 13 && hora <= 18) {
    img.src = 'tarde.png'
} else if (hora >= 19 && hora <= 23) {
    img.src = 'noite.png'
}
}