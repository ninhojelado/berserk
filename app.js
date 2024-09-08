function Avançar() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("personagens-principais");

    let campoPesquisa = document.getElementById("campo-pesquisa").value

    // se campoPesquisa for uma string sem nada
    if (!campoPesquisa) {
        section.innerHTML = "<p>Nada foi encontrado.</p>"
        return 
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";
    let nome = ""; 
    let historia = "";
    let tags = "";

    // Itera sobre cada dado da lista de dados
    for (let personagem of personagensP) {
        nome = personagem.nome.toLowerCase()
        historia = personagem.historia.toLowerCase()
        link = personagem.link.toLowerCase()
        tags = personagem.tags.toLowerCase()
        // se titulo includes campoPesquisa
        if (nome.includes(campoPesquisa) || historia.includes(campoPesquisa) || link.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            // cria um novo elemento
            resultados += `
            <div class="personagem" data-personagem="griffith">
                      <h4> 
                          <a href="${link}" target="_blank">${nome}</a> 
                      </h4>
                          <p>${historia}</p>
                      </div> 
        `;
        }
    }

    if (!resultados) {
        resultados = "<p>Nada foi encontrado</p>"
    }

    // Atribui os resultados gerados à seção HTML
    section.innerHTML = resultados;
}