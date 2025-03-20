
console.log("hello world!");
console.log("Boa tarde alunos do Senai Cabo!");

function adicionarParagrafo(texto)
{
    //cria um elemento p dentro do documento HTML
    let p = document.createElement("p");
    //altera o conteudo do elemento p
    p.innerHTML = texto;
    //captura um elemento do documento HTML chamado "conteudo"
    let minhadiv = document.getElementById("conteudo");
    //adiciona o elemento cirado "p" ao elemento capturado "conteudo"
    minhadiv.appendChild(p);
}

// Função para calcular o quadrado da soma de quatro números
function quadradoDaSoma(a, b, c, d) {
const soma = a + b + c + d; // Soma os quatro números
return soma * soma; // Retorna o quadrado da soma
}

// Testar com os valores de (0,1,2,3) até (9,10,11,12)
for (let i = 0; i <= 9; i++) {
const resultado = quadradoDaSoma(i, i+1, i+2, i+3);
adicionarParagrafo(`Resultado para os números (${i}, ${i+1}, ${i+2}, ${i+3}): ${resultado}`);
}