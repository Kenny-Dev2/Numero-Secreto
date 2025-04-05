const titulo = document.querySelector('h1');
const paragrafo = document.querySelector('.texto__paragrafo');
const btnChutar = document.querySelector('#chutar');
const inputValor = document.querySelector('.container__input');

function main() {
  let tentativa = 1;

  titulo.innerText = 'Jogo do numero secreto';
  paragrafo.innerText = 'Escolha um numero entre 1 e 10';
  const numeroSecreto = geraNumeroSecreto();

  btnChutar.addEventListener('click', () => {                  
    compararRespostaComONumeroSecreto(numeroSecreto, tentativa);
    tentativa++;
    inputValor.value = '';
  })
}

function mostraSeONumeroSecretoEstaProximo(numeroSecreto, resposta) {
  if(resposta > numeroSecreto) {
    titulo.innerText = 'Não foi dessa vez!';
    paragrafo.innerText =`O numero secreto é menor que ${resposta}.`;
    return;
  }

  if(resposta < numeroSecreto) {
    titulo.innerText = 'Não foi dessa vez!';
    paragrafo.innerText =`O numero secreto é maior que ${resposta}.`;
    return;
  }
}

function compararRespostaComONumeroSecreto(numeroSecreto, tentativa) {
  let resposta = Number(inputValor.value);

  if(numeroSecreto == resposta) {
    let correcaoTentativa= colocaTentativaNoPlural(tentativa)
    titulo.style.fontSize = '55px'
    titulo.innerText = `Parabens, você acertou o numero secreto!!!`
    paragrafo.innerText = `E realizou ${tentativa} ${correcaoTentativa}`;
  } else {
    mostraSeONumeroSecretoEstaProximo(numeroSecreto, resposta);
  }
}

function colocaTentativaNoPlural(numeroDeTentativas) {
  if (numeroDeTentativas === 0 || numeroDeTentativas === 1) {
    return 'tentativa.';
  } else return 'tentativas.'
}

function geraNumeroSecreto() {
  const numeroSecreto = 5 //Number((Math.random() * 10).toFixed(0));
  return numeroSecreto;
}

main();