let sonuc = 0;

binaryToDecimal("1011");
function binaryToDecimal(binary) {

    for (let j = 0; j <= binary.length - 1; j++) {
        sonuc += (2 ** (binary.length - 1 - j) * Number(binary[j]));


    }
    console.log("Sonuç: " + sonuc);
    return sonuc;
}




