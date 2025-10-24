function hitungNilaiHuruf(nilai) {
    if(nilai > 85) {
        return "A"
    } else if(nilai > 70 && nilai <= 85) {
        return "B"
    } else {
        return "E"
    }
}

var nilaiArthur = 23
console.log("Nilai Arthur : "+hitungNilaiHuruf(nilaiArthur))