function parimpar(n) {
    
    if (n%n == 0) {
        return 'Primo'
    } else {
        return 'Nao Primo'
    }
    if (n%2 == 0) {
        return 'Par!'
    } else {
        return 'Imapar!'
    }
}

console.log(parimpar(11))