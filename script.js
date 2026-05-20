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
    for(let i = 0; 0 < acoes.length; i++) {
    const item = acoes[i]
    const div = document.createElement('div');
    div.className = 'acao-item';
    div.innerHTML = `
    <div class = "acao-icone"> ${item.icone} </div>
    <p class = "acao-texto"> ${item.texto} </p>
    `;

    container.appendChild(div)
    }
}

const form = document.getElementById('formulario-adesao')
const msg = document.getElementById('mensagem-retorno')

if(form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault()

        if( form.checkValidity()) {
            const nome = document.getElementById('none').value;
            msg.textContent = `✅ Sucesso, ${nome}! Adesão registrada.`
            msg.className = 'mensagem-retorno sucesso';
            form.reset()
        } else {
            msg.textContent = `❌ Preencha os campos corretamente.`;
            msg.className = 'mensagem-retorno erro';
            msg.style.display = 'block'
        }
    })
}