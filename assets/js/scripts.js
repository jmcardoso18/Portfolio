



//selecionar a sessao about
const aboutSection = document.querySelector('#about');

// selecionar o formulario de contato
const formulario = document.querySelector('#formulario');

//Expressão regular para validar email
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

//função para buscar dados no github
async function getApiGithub() {

    try {
        //Passo 1: buscar os dados da api do github
        const dadosPerfil = await fetch('https://api.github.com/users/jmcardoso18');
        //Passo 2: converter os dados para json
        const perfilJson = await dadosPerfil.json();
        //Passo 3: inserir os dados na sessao about
        let conteudoAbout = `
            <figure class="about_image">
                <img src="${perfilJson.avatar_url}" alt="Foto de Perfil do github - ${perfilJson.name}">
            </figure>

            <article class="about_content">
                <h2>Sobre Mim</h2>
                <p>
                    Sou  a Jamila mas pode me chamar de Mila, tecnóloga de Desenvolvimento de Software Multiplataforma em formação na <a href="https://fatecararas.cps.sp.gov.br/" target="_blank">Fatec Araras</a>,
                     uma curiosa incorrigível que transformou a paixão por descobrir "Como isso funciona?" em carreira.</b>
                </p>
                <p>
                    Minha jornada profissional começou longe dos códigos, meu maior desafio profissional foi como coordenadora na área Logística, 
                    onde liderei equipes por cinco anos e desenvolvi uma habilidade fundamental: transformar caos em estratégia e resolver 
                    problemas sob intensa pressão. Foi essa visão de organização e método que me levou à programação.
                </p>
                <p>
                    Hoje, aplico essa experiência estratégica no desenvolvimento Full Stack (Java/Spring Boot e React), com formação 
                    complementar pelo Bootcamp da <a href="https://brazil.generation.org/" target="_blank">Generation Brazil.</a>
                </p>
                <p>
                    Meu foco é criar soluções que são robustas e escaláveis, garantindo que cada linha de código tenha a precisão e o propósito 
                    de uma operação logística bem-sucedida.
                </p>
                <p>
                    Acredito que a tecnologia é a melhor ferramenta para simplificar a vida e inspirar inovação. Convido você a conhecer 
                    meus projetos e ver como a união de estratégia, método e criatividade pode construir algo incrível.
                </p>

                <div class="about_stats">
                    <a href="${perfilJson.html_url}" target="_blank" class="botao">Ver GitHub</a>
                    <!-- Faltou esta div para alinhar os cards -->
                    <div class="stats-wrapper">
                        <div class="stat-item">
                            <p class="stat-number">${perfilJson.followers}</p>
                            <p class="stat-label">Seguidores</p>
                        </div>
                        <div class="stat-item">
                            <p class="stat-number">${perfilJson.public_repos}</p>
                            <p class="stat-label">Repositórios</p>
                        </div>
                    </div>
 
                </div>

            </article>
            `
        //Passo 4: inserir o conteudo na sessao about
        aboutSection.innerHTML += conteudoAbout;

    } catch (error) {
        console.error(error);
    }
}

// Função de envio e validação do formulário
formulario.addEventListener('submit', function (event) {
    event.preventDefault(); // Evita o envio padrão do formulário
    //Validar campo nome
    const campoNome = document.querySelector('#nome');
    const txtNome = document.querySelector('#txtNome');
    if (campoNome.value.length < 3) {
        txtNome.innerHTML = 'O nome deve ter pelo menos 3 caracteres.';
        campoNome.focus();
        return;
    } else {
        txtNome.innerHTML = '';
    }
    //Validar campo email
    const campoEmail = document.querySelector('#email');
    const txtEmail = document.querySelector('#txtEmail');
    //if(!campoEmail.value.match(emailRegex)){
    if (!emailRegex.test(campoEmail.value)) {
        txtEmail.innerHTML = 'Email inválido.';
        campoEmail.focus();
        return;
    } else {
        txtEmail.innerHTML = '';
    }
    //Validar campo Assunto
    const campoAssunto = document.querySelector('#assunto');
    const txtAssunto = document.querySelector('#txtAssunto');
    if (campoAssunto.value.length < 5) {
        txtAssunto.innerHTML = 'O assunto deve ter pelo menos 5 caracteres.';
        campoAssunto.focus();
        return;
    } else {
        txtAssunto.innerHTML = '';
    }

    //Se todos os campos estiverem válidos, enviar o formulário
    formulario.submit();

});

// Inicializar o Swiper.js para o carrossel de projetos
document.addEventListener("DOMContentLoaded", () => {
    const swiper = new Swiper(".projetos_carrossel", {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: false,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
        }
    });
});


//chamar a funcao para buscar os dados no github
getApiGithub();
