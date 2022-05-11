function imc(peso, altura) {
    r = peso / (altura * altura);
    console.log(r)
    if (r < 18.5) {
        console.log("abaixo do peso");
    }
    else if (r >= 18.5 && r < 25) {
        console.log("normal");
    }
    else if (r >= 25 && r < 30) {
        console.log("acima do peso");
    }
    else {
        console.log("gordo");
    }
}
//imc(105, 1.75)

function trocaL(palavra) {
    var sp = palavra.split(" ");
    var reversedstr = "";

    for (var i = 0; i < sp.length; i++) {
        var newword = sp[i]

        for (var j = newword.length - 1; j >= 0; j--) {
            var letter = newword[j];
            reversedstr += letter;
        }
        reversedstr += " ";
    }
    return console.log(reversedstr);
}

//trocaL("hoje é domingo");

function contavogais(palavrai) {
    var num = 0;
    var vogais = ["a", "e", "i", "o", "u"]
    for (var i = 0; i < palavrai.length; i++) {
        var letras = palavrai[i];
        for (j = 0; j < vogais.length; j++) {
            var vog = vogais[j];
            var vogais2 = letras == vog;
            
        if (vogais2 == true){
            
            num += 1 ;
            
        }

        }
    }
    console.log(num);
}
contavogais("ola mundo")