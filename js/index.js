// api para buscar o numero de repositórios do github
async function numRepositorios() {
    try {
        const resposta = await fetch("https://api.github.com/users/maurolibanore");
        if (!resposta.ok) throw new Error(`Status: ${resposta.status}`);
        const dados = await resposta.json();
        document.getElementById("num-repositorios").textContent = dados.public_repos;
    } catch (e) {
        console.error("Erro ao buscar repositórios:", e);
    }
}

numRepositorios();