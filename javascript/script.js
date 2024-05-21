// Seleciona todos os elementos com a classe 'marquee' e transforma-os num array
const marquees = [...document.querySelectorAll('.marquee')];

// Itera sobre cada elemento 'marquee' definido no HTML
marquees.forEach((marquee) => {
    // Adiciona 1 espaço ao conteúdo HTML do 'marquee' e multiplica por 5 para criar um espaçamento entre os textos
    marquee.innerHTML = marquee.innerHTML + '&nbsp;'.repeat(10);
    
    // Inicializa a propriedade 'i' do 'marquee' com 0, que será usada para controlar a posição de Marquee
    marquee.i = 0;

    // Define a velocidade de Marquee inicial
    marquee.step = .2;

    // Calcula e armazena a largura do 'marquee'
    marquee.width = marquee.clientWidth + 1;

    // Repetidamente adiciona o conteúdo do 'marquee' para criar um efeito de loop contínuo
    marquee.innerHTML = `${marquee.innerHTML}&nbsp;`.repeat(50);

    // Adiciona um evento para parar o efeito Marquee quando o rato estiver no elemento
    marquee.addEventListener('mouseenter', () => (marquee.step = 0), false);

    // Adiciona um evento para reiniciar o efeito Marquee quando o rato sair do elemento
    marquee.addEventListener('mouseleave', () => (marquee.step = .2), false);
});

// Função recursiva que movimenta os elementos 'marquee'
requestAnimationFrame(move);

function move() {
    // Itera sobre cada 'marquee' e atualiza a sua posição
    marquees.forEach((marquee) => {
        // Define a margem esquerda do 'marquee' para criar o efeito de movimento
        marquee.style.marginLeft = `-${marquee.i}px`;

        // Atualiza a posição 'i' do 'marquee'. Se atingir a largura total, volta para 1
        marquee.i = marquee.i < marquee.width ? marquee.i + marquee.step : 1;
    });

    // Chama a função 'move' novamente no próximo frame
    requestAnimationFrame(move);
}
