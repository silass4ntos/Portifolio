

//altera a navbar de transparent para blur
window.addEventListener('scroll', function () {
    var nav = document.getElementById('header');
    if (window.scrollY > nav.offsetTop) {
        // Verifica se a rolagem da página ultrapassou o topo da navegação
        if (!nav.classList.contains('blur')) {
            // Adiciona a classe e força o reflow antes de iniciar a transição
            nav.classList.add('blur');
            // Força o reflow (repintura) para garantir que a transição seja aplicada
            void nav.offsetWidth;
            // Inicia a transição
            nav.style.transition = 'all 0.3s ease';
        }
    } else {
        // Remove a classe quando a navegação volta ao topo
        if (nav.classList.contains('blur')) {
            // Remove a classe e força o reflow antes de iniciar a transição
            nav.classList.remove('blur');
            // Força o reflow (repintura) para garantir que a transição seja aplicada
            void nav.offsetWidth;
            // Inicia a transição
            nav.style.transition = 'all 0.3s ease';
        }
    }
});


