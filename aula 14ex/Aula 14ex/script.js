function cal() {
 var ini = document.getElementById('Iini').value
 var ate = document.getElementById('Iate').value
 var sal = document.getElementById9('Isal').value
 var res = document.getElementById9('res')
 for (var i = ini; i <= ate; i += sal) {
    res.innerText += i + ' ';
 }
}