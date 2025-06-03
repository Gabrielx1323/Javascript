function carregar() {
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('img')
var data = new Date()
var hora = data.getHours()
var min = new Date()
var mi = min.getMinutes()
var hora = 5
msg.innerHTML = `Agora são ${hora}:${minutos < 10 ? '0' + minutos : minutos}`;
if (hora >= 0 && hora <= 5) {
    img.src = 'Noite-removebg-preview.png'
} else if (hora >= 6 && hora <= 12) {
    img.src = 'manha-removebg-preview.png'
} else if (hora >= 13 && hora <= 18) {
    img.src = 'tarde-removebg-preview.png'
} else if (hora >= 19 && hora <= 23) {
    img.src = 'Noite-removebg-preview.png'
}
}