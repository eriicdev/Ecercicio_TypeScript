//função de Multiplicação

function Multiplicacao (valorA: number, valorB:number): number {
    const multiplicacao = valorA * valorB;
    return multiplicacao;
}

let valorA = 400;
let valorB = 2;

const resultado = Multiplicacao(valorA, valorB);

console.log(`A multiplicação entre ${valorA} e ${valorB} é igual a : ${resultado}!`);



//função de saudação
function dizOi(nome:string): string{
    return `Olá Sr.(a) ${nome}`;
}

let seuNome = "Erik";
const cumprimetaVoce = dizOi(seuNome);
console.log(cumprimetaVoce);


