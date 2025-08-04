const prompt = require('prompt-sync')()

const analyzer = (input) => {

    let num = Number(input)
    let Isprime = false

    if (!isNaN(num)) { //pengkondisian apabila itu angka maka jalankan program ini
        console.log(`--- Hasil Analisis Angka ---\n`)
        console.log(`Panjang Karakter adalah: `+String(num).length)

        if (num%2 == 0) {
            console.log(`Jenis Angka adalah: Genap`)
        } else{
            console.log(`Jenis Angka adalah: Ganjil`)
        }

        
        if(num<=1) {
            console.log(`status angka: bukan prima`)
        } else {
            for(let i = 2; i<=Math.floor(Math.sqrt(num)); i++) {
                if(num % i === 0) {
                    Isprime = true
                    break;
                }
            } if(Isprime) {
                console.log(`status angka: bukan prima`)
            } else{
                console.log(`status angka: bilangan prima`)
            }
        }

    } else {
        console.log(`--- Hasil Analisis Kata ---\n`)

        let hasil = ""

        for(let i = input.length-1; i>=0; i--) {
            hasil = hasil + input[i]
        }
            console.log(`Balik kata: ${hasil}`)

        if(hasil === input) {
            console.log(`Palindrom: Ya`)
        } else{
            console.log(`Palindrom: Tidak`)
        }

        console.log('Jumlah kata: ' + input.length)
    }
}

const userInput = prompt(`masukan kata atau angka: `)
analyzer(userInput)
