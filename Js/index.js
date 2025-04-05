

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
            nav.style.transition = 'all 0.5s ease';
        }
    } else {
        // Remove a classe quando a navegação volta ao topo
        if (nav.classList.contains('blur')) {
            // Remove a classe e força o reflow antes de iniciar a transição
            nav.classList.remove('blur');
            // Força o reflow (repintura) para garantir que a transição seja aplicada
            void nav.offsetWidth;
            // Inicia a transição
            nav.style.transition = 'all 0.5s ease';
        }
    }
});


//slow scroll
document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault(); // Evita o comportamento padrão do link
        const targetId = this.getAttribute('href').substring(1); // Pega o ID sem o "#"
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    });
});

// Destacar link ativo ao rolar a página
const sections = document.querySelectorAll('section[id]');
const scrollActive = () => {
    const scrollY = window.scrollY;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 58;
        const sectionId = current.getAttribute('id');
        const sectionLink = document.querySelector('.navbar a[href="#' + sectionId + '"]');

        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            sectionLink.classList.add('active-link');
        } else {
            sectionLink.classList.remove('active-link');
        }
    });
};

window.addEventListener('scroll', scrollActive);
