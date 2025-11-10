



//selecionar a sessao about
const aboutSection = document.querySelector('#about');

// selecionar o formulario de contato
const formulario = document.querySelector('#formulario');

//Expressão regular para validar email
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

//função para buscar dados no github
async function getApiGithub() {
    
    try{
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
                <p>Sou Jamila M. Cardoso, uma desenvolvedora Full Stack apaixonada por tecnologia e inovação. Com
                    experiência em diversas linguagens de programação e frameworks, estou sempre em busca de novos
                    desafios para aprimorar minhas habilidades e contribuir para projetos impactantes. Formada pela 
                    <a href="https://brazil.generation.org/" target="_blank">Generation Brazil</a></p>
                <p>Minha missão é transformar ideias em soluções digitais eficientes e acessíveis, proporcionando uma
                    experiência única aos usuários. Vamos trabalhar juntos para criar algo incrível!</p>

                <div class="about_stats">
                    <a href="${perfilJson.html_url}" target="_blank" class="botao">Ver GitHub</a>
                    <div class="stat-item">
                        <p class="stat-numer">${perfilJson.followers}</p>
                        <p class="stat-label">Seguidores</p>
                    </div>
                    <div class="stat-item">
                        <p class="stat-numer">${perfilJson.public_repos}</p>
                        <p class="stat-label">Repositórios</p>
                    </div>
                </div>

            </article>
            `
        //Passo 4: inserir o conteudo na sessao about
        aboutSection.innerHTML += conteudoAbout;

    }catch(error){
        console.error(error);
    }
}

// Função de envio e validação do formulário
formulario.addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio padrão do formulário
    //Validar campo nome
    const campoNome = document.querySelector('#nome');
    const txtNome = document.querySelector('#txtNome');
    if(campoNome.value.length < 3){
        txtNome.innerHTML = 'O nome deve ter pelo menos 3 caracteres.';
        campoNome.focus();
        return;
    }else{
        txtNome.innerHTML = '';
    }
    //Validar campo email
    const campoEmail = document.querySelector('#email');
    const txtEmail = document.querySelector('#txtEmail');
    //if(!campoEmail.value.match(emailRegex)){
    if(!emailRegex.test(campoEmail.value)){
        txtEmail.innerHTML = 'Email inválido.';
        campoEmail.focus();
        return;
    }else{
        txtEmail.innerHTML = '';
    }
    //Validar campo Assunto
    const campoAssunto = document.querySelector('#assunto');
    const txtAssunto = document.querySelector('#txtAssunto');
    if(campoAssunto.value.length < 5){
        txtAssunto.innerHTML = 'O assunto deve ter pelo menos 5 caracteres.';
        campoAssunto.focus();
        return;
    }else{
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
