
console.log("hello world!");
console.log("Boa tarde alunos do Senai Cabo!");

function adicionarParagrafo(texto)
{
    //cria um elemento p dentro do documento HTML
    let p = document.createElement("p");
    //altera o conteudo do elemento p
    p.innerText = texto;
    //captura um elemento do documento HTML chamado "conteudo"
    let minhadiv = document.getElementById("conteudo");
    //adiciona o elemento cirado "p" ao elemento capturado "conteudo"
    minhadiv.appendChild(p);
}

function quadradoDaSoma(a, b, c, d) {
const soma = a + b + c + d; 
return soma * soma;
}

for (let i = 0; i <= 9; i++) {
const resultado = quadradoDaSoma(i, i+1, i+2, i+3);
adicionarParagrafo(`Resultado para os números (${i}, ${i+1}, ${i+2}, ${i+3}): ${resultado}`);
}

function calcularNumerosPrimos(quantidade) {
    const numerosPrimos = [];
    let numero = 2; 
    while (numerosPrimos.length < quantidade) {
        let primo = true;

        for (let i = 2; i <= Math.sqrt(numero); i++) {
            if (numero % i == 0) {
                primo = false;
                break;
            }
        }

        if (primo) {
            numerosPrimos.push(numero);
        }

        numero++;
    }

    return numerosPrimos;
}

const primeiros100Primos = calcularNumerosPrimos(100);
adicionarParagrafo(primeiros100Primos);
