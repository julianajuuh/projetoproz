const acoes = [
    {icone: '🚰', texto: 'Feche bem a torneira enquanto não estiver usando' },
    {icone: '🔔', texto: 'Avise logo se perceber um vazamento' },
    {icone: '♻️', texto: 'Reutilize agua de limpeza quando possivel' },
    {icone: '🥤', texto: 'Use copo ou garrafa reutilizavel' },
    {icone: '💬', texto: 'Conte para seus colegas essas dicas' },
    {icone: '🌍', texto: 'Multiplique - cada pessoa influencia outtras 5' }
]

const container = document.getElementById('container-acoes');
if (container) {
    for(let i = 0; 0< acoes.length; i++) {
    const item = acoes[i]
    const div = document.createElement('div');
    div.className = 'acao-item';
    div.innerHTML = `
    <div class = "acao-icone"> ${item-icone} </div
    <p class = "acao-texto"> ${item-texto} </p>
    `;

    container.appendChild(div)
    }

}
