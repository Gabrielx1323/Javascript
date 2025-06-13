var num = [6,77,887,32,1,89]
num.sort(function(a, b) {
    return a - b
})
for (var pos in num) {
    console.log(`na posiçao ${pos} tem o valor ${num[pos]}`)
}

/*var num = [5,98,2,43,56]
for (var pos=0;pos <= num.length;pos++) {
    console.log(`na posiçao ${pos} tem o valor ${num[pos]}`)
} */