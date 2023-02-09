const read = require("readline-sync")



const array =  [1,2,3,4,5,6,7,8,9]

const number = Number(read.question("digite seu numero: "))

//Crie uma função que recebe um array e um número
function checkinVectorSize (array, number) {
    
    //Realize as seguintes validações
    
    //Utilize a declaração try...catch
    try {

        //Se os parâmetros não forem enviados, lance um erro do tipo ReferenceError
        if(!array && !number ) throw new ReferenceError("os paramentros nao foram enviado");
        if(!array) throw new ReferenceError("O array nao foi enviado");
        if(!number) throw new ReferenceError("O numero nao foi enviado");

        //Se o array não for do tipo 'object', lance um erro do tipo TypeError
        if (typeof array !== "object") throw new TypeError("o array nao e um objeto");

        //Se o número não for do tipo 'number', lance um erro do tipo TypeError
        if (typeof number !== "number") throw new TypeError("o numero nao e um number");

        //Se o tamanho do array for diferente do número enviado como parâmetro, lance um erro do tipo RangeError
        if(array.length !== number) throw new RangeError("o tamanho do vetor e o numero digitado sao diferentes"); 

        return array;

    } catch (e) {
        //Filtre as chamadas de catch por cada tipo de erro utilizando o operador instanceof
        console.log(e instanceof ReferenceError)
        console.log(e instanceof TypeError);
        console.log(e instanceof RangeError);

        console.log(e.message);

    }
}

console.log(checkinVectorSize(array, number)); 
