var dataKendaraan = ["Udin",24,"Avanza","B 1234 AGG",600000,false]

var dataSTNKUdin = {
    "nama" : "Udin",
    "usia" : 24,
    "tipe" : "Avanza",
    "plat" : "B 1243 AGG",
    "biaya" : 600000,
    "isBayar" : false
}

console.log("object")
console.log(JSON.stringify(dataSTNKUdin))

var dataSTNK = [
    {
    "nama" : "Udin",
    "usia" : 24,
    "tipe" : "Avanza",
    "plat" : "B 1243 AGG",
    "biaya" : 600000,
    "isBayar" : false
    },
    {
        "nama" : "Indah",
        "usia" : 30,
        "tipe" : "Avanza",
        "plat" : "B 12392 AGG",
        "biaya" : 600000,
        "isBayar" : true
    },
    {
        "nama" : "Budi",
        "usia" : 20,
        "tipe" : "Avanza",
        "plat" : "B 1323 AGG",
        "biaya" : 600000,
        "isBayar" : false
    }
]

console.log(JSON.stringify(dataSTNK[2].biaya))