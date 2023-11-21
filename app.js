const linkImagem = document.querySelector(".avatar");
const imagem = linkImagem.querySelector("img");
const nome = document.querySelector(".content h1");
const repositorios = document.querySelector('#repositorios');
const gists = document.querySelector('#gists');
const seguidores = document.querySelector('#seguidores');
const userBioElement = document.querySelector('#user-bio'); // Alterado para user-bio
const usuario = document.querySelector("#usuario-github");
const buscar = document.querySelector("#buscar-github");

buscar.addEventListener("click", e => {
    e.preventDefault();
    getGitHubInfo(usuario.value);
});

const getGitHubInfo = function (username) {

    var url = `https://api.github.com/users/${username}`;

    var ajax = new XMLHttpRequest();

    ajax.onreadystatechange = function () {

        if (this.readyState == 4 && this.status == 200) {
            let data = JSON.parse(this.responseText);
            imagem.src = data.avatar_url;
            linkImagem.href = data.html_url;
            nome.innerText = data.name;
            seguidores.innerText = data.followers;
            gists.innerText = data.public_gists;
            repositorios.innerText = data.public_repos;

            // Exibir a Bio em vez do URL
            userBioElement.innerText = data.bio;
        }

    };

    ajax.open('GET', url, true);
    ajax.send();
};
