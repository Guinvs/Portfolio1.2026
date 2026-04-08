function toggleTheme() {
    document.body.classList.toggle("light");

    if (document.body.classList.contains("light")) {
        localStorage.setItem("theme", "light");
    } else {
        localStorage.setItem("theme", "dark");
    }
}

window.onload = function () {
    const theme = localStorage.getItem("theme");
    if (theme === "light") {
        document.body.classList.add("light");
    }
}

let lastScroll = 0;
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > lastScroll && currentScroll > 50) {
        // scroll para baixo → esconder
        header.style.top = '-100px'; // ajusta conforme altura do header
    } else {
        // scroll para cima → mostrar
        header.style.top = '0';
    }

    lastScroll = currentScroll;
});

// index.js
function sendEmail(e) {
    e.preventDefault(); // evita reload da página

    emailjs.sendForm('service_id', 'template_id', e.target, 'user_id')
        .then(() => alert('Email enviado com sucesso!'))
        .catch(err => alert('Erro ao enviar: ' + err));
}