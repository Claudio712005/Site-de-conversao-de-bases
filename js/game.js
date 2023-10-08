function geraPerguntaComOperador() {
    const num1 = Math.floor(Math.random() * 1000);
    const num2 = Math.floor(Math.random() * 1000);

    const todasBases = ['binario', 'decimal', 'octadecimal', 'hexadecimal'];
    const indiceBase1 = Math.floor(Math.random() * todasBases.length);
    const indeceBase2 = Math.floor(Math.random() * todasBases.length);
    const base1 = todasBases[indiceBase1];
    const base2 = todasBases[indeceBase2];

    const todosOperadores = ['+', '-', 'x'];
    const indeceOperador = Math.floor(Math.random() * todosOperadores.length);
    const operador = todosOperadores[indeceOperador];

    let numero1, numero2, resposta = 0;

    if (base1 === 'binario') {
        numero1 = num1.toString(2);
    } else if (base1 === 'decimal') {
        numero1 = num1;
    } else if (base1 === 'octadecimal') {
        numero1 = num1.toString(8);
    } else {
        numero1 = num1.toString(16);
    }

    if (base2 === 'binario') {
        numero2 = num2.toString(2);
    } else if (base2 === 'decimal') {
        numero2 = num2;
    } else if (base2 === 'octadecimal') {
        numero2 = num2.toString(8);
    } else {
        numero2 = num2.toString(16);
    }

    if (operador === '+') resposta = num1 + num2;
    else if (operador === '-') resposta = num1 - num2;
    else if (operador === 'x') resposta = num1 * num2;

    if (resposta < 1) return geraPerguntaComOperador();

    const tipo = 'operacao';
    const textQuest = `Seu trabalho é solucionar a operação entre um número ${base1} e outro ${base2} respectivamente, faça o seguinte ${numero1} ${operador} ${numero2}, insira a resposta no campo abaixo`;

    return { textQuest, numero1, numero2, resposta, tipo };
}

function geraNovaPerguntaBinario() {
    const bases = ['decimal', 'octadecimal', 'hexadecimal'];
    const baseIndice = Math.floor(Math.random() * bases.length);
    const baseEscolhida = bases[baseIndice];

    const tamanhoNum = Math.floor(Math.random() * 20) + 1;
    let numero = '';
    for (let i = 0; i < tamanhoNum; i++) {
        const bit = Math.random() < 0.5 ? '0' : '1';
        numero += bit;
    }
    const decimal = parseInt(numero, 2);
    let respostaCerta;

    if (baseEscolhida === 'decimal') {
        respostaCerta = decimal;
    } else if (baseEscolhida === 'octadecimal') {
        respostaCerta = decimal.toString(8);
    } else {
        respostaCerta = decimal.toString(16);
    }

    const mostraPergunta = `Agora seu trabalho é converter o número <b style="color: aqua;"><u>${numero}</u></b> que está em binário(2) para a base ${baseEscolhida}, insira sua resposta no campo abaixo`;
    const tipo = 'conversao';

    return { numero, respostaCerta, mostraPergunta, baseEscolhida, tipo };
}

function geraNovaPerguntaDecimal() {
    const bases = ['binario', 'octadecimal', 'hexadecimal'];
    const baseIndice = Math.floor(Math.random() * bases.length);
    const baseEscolhida = bases[baseIndice];
    const numero = Math.ceil(Math.random() * 10000) + 1;
    let respostaCerta;

    if (baseEscolhida === 'binario') {
        respostaCerta = numero.toString(2);
    } else if (baseEscolhida === 'octadecimal') {
        respostaCerta = numero.toString(8);
    } else {
        respostaCerta = numero.toString(16);
    }

    const mostraPergunta = `Agora seu trabalho é converter o número <b style="color: aqua;"><u>${numero}</u></b> que está em decimal(10) para a base ${baseEscolhida}, insira sua resposta no campo abaixo`;

    const tipo = 'conversao';

    return { numero, respostaCerta, mostraPergunta, baseEscolhida, tipo };
}

function geraNovaPerguntaOctadecimal() {
    const bases = ['binario', 'decimal', 'hexadecimal'];
    const baseIndice = Math.floor(Math.random() * bases.length);
    const baseEscolhida = bases[baseIndice];
    const decimal = Math.ceil(Math.random() * 10000) + 1;
    const numero = decimal.toString(8);
    let respostaCerta;

    if (baseEscolhida === 'binario') {
        respostaCerta = decimal.toString(2);
    } else if (baseEscolhida === 'hexadecimal') {
        respostaCerta = decimal.toString(16);
    } else {
        respostaCerta = decimal;
    }

    const mostraPergunta = `Agora seu trabalho é converter o número <b style="color: aqua;"><u>${numero}</u></b> que está em octadecimal(8) para a base ${baseEscolhida}, insira sua resposta no campo abaixo`;
    const tipo = 'conversao';

    return { numero, respostaCerta, mostraPergunta, baseEscolhida, tipo };
}

function geraNovaPerguntaHexadecimal() {
    const bases = ['binario', 'decimal', 'octadecimal'];
    const baseIndice = Math.floor(Math.random() * bases.length);
    const baseEscolhida = bases[baseIndice];
    const decimal = Math.ceil(Math.random() * 10000) + 1;
    const numero = decimal.toString(16);
    let respostaCerta;

    if (baseEscolhida === 'binario') {
        respostaCerta = decimal.toString(2);
    } else if (baseEscolhida === 'octadecimal') {
        respostaCerta = decimal.toString(8);
    } else {
        respostaCerta = decimal;
    }

    const mostraPergunta = `Agora seu trabalho é converter o número <b style="color: aqua;"><u>${numero}</u></b> que está em hexadecimal(16) para a base ${baseEscolhida}, insira sua resposta no campo abaixo`;
    const tipo = 'conversao';

    return { numero, respostaCerta, mostraPergunta, baseEscolhida, tipo };
}

const showQtdRange = document.getElementById('qtd_range');
const ranger = document.getElementById('qtd_perguntas');
const exibe = document.getElementById('section');
const btnInit = document.getElementById('btn_init');

const funcoesPerguntasConversao = [
    geraNovaPerguntaBinario,
    geraNovaPerguntaDecimal,
    geraNovaPerguntaHexadecimal,
    geraNovaPerguntaOctadecimal,
];

function escolheFuncaoConversao() {
    const indiceAleatorio = Math.floor(Math.random() * funcoesPerguntasConversao.length);
    const funcaoEscolhidaConversao = funcoesPerguntasConversao[indiceAleatorio];
    return funcaoEscolhidaConversao();
}

const funcoesPerguntas = [
    escolheFuncaoConversao,
    geraPerguntaComOperador,
];

function escolheFuncao() {
    const indiceAleatorio = Math.floor(Math.random() * funcoesPerguntas.length);
    const funcaoEscolhida = funcoesPerguntas[indiceAleatorio];
    return funcaoEscolhida();
}

ranger.addEventListener('input', (event) => {
    const rangeValue = document.getElementById('qtd_perguntas').value;
    showQtdRange.innerHTML = `${rangeValue}`;
});

btnInit.addEventListener('click', () => {
    const entradaValida = /^[a-zA-Z]+$/;
    const inputNome = document.getElementById('input_nome');
    const nome = inputNome.value;

    if (nome === '' || /[0-9]/.test(nome) || !entradaValida.test(nome)) {
        inputNome.value = '';
        inputNome.placeholder = 'Insira um nome válido';
    } else {
        let qtdTotalCertas = 0;
        let qtdTotalErradas = 0;
        let qtdTotalErradasConversao = 0;
        let qtdTotalCertasConversao = 0;
        let qtdTotalErradasOperacao = 0;
        let qtdTotalCertasOperacao = 0;
        let numDaPergunta = 1;
     
        function geraPerguntaNova() {
            const pergunta = escolheFuncao();
            const resp = pergunta.resposta;
            const estruturaPergunta = pergunta.textQuest;
            if (pergunta.tipo === 'operacao') {
                exibe.innerHTML = `
                    <div class="div-pergunta">
                        <div class="div-info-pergunta">
                            <h1 class="num-pergunta">QUESTAO: ${numDaPergunta}</h1>
                            <h4 class="txt-pergunta">
                                ${estruturaPergunta}
                            </h4>
                            <div class="alternativas">
                                <input type="text" id="input_resposta" placeholder="Digite sua resposta">
                            </div>
                            <button id='btn_prox'>Próxima pergunta</button>
                        </div>
                        <div class="img-div-init">
                        </div>
                    </div>
                `;

                const btnProxPerg = document.getElementById('btn_prox').addEventListener('click', () => {
                    const suaResposta = document.getElementById('input_resposta').value;
                    if (suaResposta == resp) {
                        qtdTotalCertas++;
                        qtdTotalCertasOperacao++;
                    } else {
                        qtdTotalErradas++;
                        qtdTotalErradasOperacao++;
                    }
                    if (numDaPergunta < ranger.value) {
                        numDaPergunta++;
                        geraPerguntaNova();
                    } else {
                        geraResultado(
                            ranger.value,
                            qtdTotalCertas,
                            qtdTotalErradas,
                            qtdTotalCertasOperacao,
                            qtdTotalErradasOperacao,
                            qtdTotalCertasConversao,
                            qtdTotalErradasConversao
                        );
                    }
                });
            } else {
                const num = pergunta.numero;
                const resposta = pergunta.respostaCerta;
                const estruturaPergunta = pergunta.mostraPergunta;
                exibe.innerHTML = `
                    <div class="div-pergunta">
                        <div class="div-info-pergunta">
                            <h1 class="num-pergunta">QUESTAO: ${numDaPergunta}</h1>
                            <h4 class="txt-pergunta">
                                ${estruturaPergunta}
                            </h4>
                            <div class="alternativas">
                                <input type="text" id="input_resposta" placeholder="Digite sua resposta">
                            </div>
                            <button id='btn_prox'>Próxima pergunta</button>
                        </div>
                        <div class="img-div-init">
                        </div>
                    </div>
                `;
                const btnProxPerg = document.getElementById('btn_prox').addEventListener('click', () => {
                    const suaResposta = document.getElementById('input_resposta').value;
                    if (suaResposta == resposta) {
                        qtdTotalCertas++;
                        qtdTotalCertasConversao++;
                    } else {
                        qtdTotalErradas++;
                        qtdTotalErradasConversao++;
                    }
                    if (numDaPergunta < ranger.value) {
                        numDaPergunta++;
                        geraPerguntaNova();
                    } else {
                        geraResultado(
                            ranger.value,
                            qtdTotalCertas,
                            qtdTotalErradas,
                            qtdTotalCertasOperacao,
                            qtdTotalErradasOperacao,
                            qtdTotalCertasConversao,
                            qtdTotalErradasConversao
                        );
                    }
                });
            }
        }
        function geraResultado(r, tc, te, tco, teo, tcc, tec) {
            exibe.innerHTML = `
                <div class='div-resultado'>
                    <div class='div-dados'>
                        <div class="img-icon">
                            <img class="img-planet" src="https://cdn-icons-png.flaticon.com/512/5219/5219855.png" alt="logo de planeta">
                        </div>
                        <span class="u-name">${nome}</span>
                        <div class="div-qtd-quest">
                            <details>
                                <summary class="div-qtd-title">Total de questões</summary>
                                <span class="qtd-total">Total de questões: ${r}</span><br>
                                <span class="qtd-total-certas">Acertos: ${tc}</span><br>
                                <span class="qtd-total-erradas">Erros: ${te}</span>
                            </details>
                        </div>
                        <div class="div-qtd-quest">
                            <details>
                                <summary class="div-qtd-title">Operação</summary>
                                <span class="qtd-total-op">Total de questões: ${tco + teo}</span><br>
                                <span class="qtd-total-certas-op">Acertos: ${tco}</span><br>
                                <span class="qtd-total-erradas-op">Erros: ${teo}</span>
                            </details>
                        </div>
                        <div class="div-qtd-quest">
                            <details>
                                <summary class="div-qtd-title">Conversão</summary>
                                <span class="qtd-total-con">Total de questões: ${tcc + tec}</span><br>
                                <span class="qtd-total-certas-con">Acertos: ${tcc}</span><br>
                                <span class="qtd-total-erradas-con">Erros: ${tec}</span>
                            </details>
                        </div>
                        <button class="btn-refaz" id="btn_refaz">REFAZER GAME!!!</button>
                    </div>
                    <div class="div-chart">
                        <div class="chart">
                            <canvas id="myChart"></canvas>
                        </div>
                        <div class="div-chart-p">
                            <canvas id="myChart2"></canvas>
                        </div>
                    </div>
                </div>
            `;

            const btnRefaz = document.getElementById('btn_refaz').addEventListener('click', () => {
                window.location.href = 'game.html';
            });

            const ctx = document.getElementById('myChart').getContext('2d');

            new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: ['CERTAS', 'ERRADAS'],
                    datasets: [{
                        label: 'QUESTÕES',
                        data: [tc, te],
                        borderWidth: 1,
                        backgroundColor: [
                            'rgba(34, 255, 0, 0.507)',
                            'rgba(182, 4, 4, 0.605)',
                        ],
                    }],
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: true,
                        },
                    },
                },
            });

            const ctx2 = document.getElementById('myChart2').getContext('2d');

            new Chart(ctx2, {
                type: 'doughnut',
                data: {
                    labels: [
                        'CERTAS DE OPERAÇÃO',
                        'ERRADAS DE OPERAÇÃO',
                        'CERTAS DE CONVERSÃO',
                        'ERRADAS DE CONVERSÃO',
                    ],
                    datasets: [{
                        label: 'TIPO DE QUESTÃO',
                        data: [tco, teo, tcc, tec],
                        backgroundColor: [
                            'rgb(54, 162, 235)',
                            'rgb(255, 99, 132)',
                            'rgba(34, 255, 0, 0.507)',
                            'rgb(255, 205, 86)',
                        ],
                        hoverOffset: 4,
                    }],
                },
            });
        }

        geraPerguntaNova();
    }
});
