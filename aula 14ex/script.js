function calcular() {
 var ini = document.getElementById('Iini')
 var fim = document.getElementById('Iate')
 var sal = document.getElementById('Isal')
 var res = document.getElementById('res')
 
 if (ini.value.length == 0 || fim.value.length == 0 || sal.value.length == 0) {
     res.innerHTML = 'Imposivel contar!'

 } else {
   res.innerHTML = 'Contando:'
   var i = Number(ini.value)
   var f = Number(fim.value)
   var p = Number(sal.value)
   if (p <= 0) {
      window.alert('Passo Invalido! Considerando Salto 1')
      p = 1
   }
   if (i < f) {
      for (var c = i; c <= f; c += p) {
         res.innerHTML += `${c} `
      }
   } else  {
       for (var c = i; c >= f; c -= p) {
         res.innerHTML += `${c} `
       }
   }
   res.innerHTML += `\u{1F3C1}`
 }
}