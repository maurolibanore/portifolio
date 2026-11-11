// api para buscar o numero de repositórios do github
async function numRepositorios() {  // async busca da internet
    try {
        const resposta = await fetch("https://api.github.com/users/maurolibanore");
        if (!resposta.ok) throw new Error(`Status: ${resposta.status}`); // erro
        const dados = await resposta.json();
        document.getElementById("num-repositorios").textContent = dados.public_repos; // joga o numero que pegou da api no html
    } catch (e) {
        console.error("Erro ao buscar repositórios:", e);
    }
}

numRepositorios();