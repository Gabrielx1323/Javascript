function tabuada() {
   var num = document.getElementById('Inum')
   var tab = document.getElementById('seltab')
   if (num.value.length == 0) {
      window.alert('Por Favor, Digite um Numero!')
   } else {
      var n = Number(num.value)
      tab.innerHTML = ''
      for (var c = 1; c <= 20; c++) {
      var item = document.createElement('option')
      item.text = `${n} x ${c} = ${n*c}`
      tab.appendChild(item)
      }
   }
}

function tabuada() {
   var num = document.getElementById('Inum')
   var tab = document.getElementById('seltab')
   if (num.value.length == 0) {
      window.alert('Por Favor, Digite um Numero!')
   } else {
      var n = Number(num.value)
      tab.innerHTML = ''
      for (var c = 1; c <= 20; c++) {
         var item = document.createElement('option')
         item.text = `${n} x ${c} = ${n*c}`
         tab.appendChild(item)
      }
   }
}
 