let dignitasBatch5 = [
    { nama: "cecil", nilai: 90 },
    { nama: "Najwa", nilai: 80 },
    { nama: "Danar", nilai: 78 }
]
let totalNilai = 0
for (let i = 0; i < dignitasBatch5.length; i++) {
    switch (true) {
        case dignitasBatch5[i].nilai > 90:
            dignitasBatch5[i].predikat = "A"
            break;
        case dignitasBatch5[i].nilai <= 90 && dignitasBatch5[i].nilai >= 80:
            dignitasBatch5[i].predikat = "B"
            break;
        case dignitasBatch5[i].nilai < 80 && dignitasBatch5[i].nilai >= 70:
            dignitasBatch5[i].predikat = "C"
            break;
        case dignitasBatch5[i].nilai < 70 && dignitasBatch5[i].nilai >= 65:
            dignitasBatch5[i].predikat = "D"
            break;
        default:
            dignitasBatch5[i].predikat = "E"
            break;
    }
    totalNilai += dignitasBatch5[i].nilai
}
console.log(`Rata rata nilai siswa Dignitas Batch 5 adalah ${totalNilai/ dignitasBatch5.length}`);