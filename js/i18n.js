const traducoes = {
    pt: {
        nav_inicio: "Início",
        nav_projetos: "Projetos",
        nav_habilidades: "Habilidades",
        nav_educacao: "Educação",
        nav_experiencia: "Experiência",
        nav_contato: "Contato",

        hero_p1: "Olá! Meu nome é Mauro, sou Estudante de Engenharia de Software no IFPR Paranavaí, movido pela vontade de entender como a tecnologia funciona por dentro. Ainda descobrindo meu caminho na programação, mas com um objetivo claro: empreender e transformar ideias em produtos reais.",

        proj_sicape_desc: "Sistema de controle de apenados para o fórum de Terra Rica.",
        proj_sicape_ling: "Projeto Integrador",
        proj_sicape_btn: "Ver Projeto",
        proj_mem_desc: "Jogo da memória implementado em aula, primeiro contato com web.",
        proj_mem_ling: "HTML, CSS, JavaScript",
        proj_mem_btn: "Ver no GitHub",
        proj_sgop_desc: "Sistema Gestao de Orçamentos e Propostas.",
        proj_sgop_ling: "Java, Banco de Dados",
        proj_sgop_btn: "Ver no GitHub",
        proj_repos: "Repositórios públicos no GitHub: ",

        edu_ifpr_ano: "Ensino Superior - 2024",
        edu_ifpr_curso: "Engenharia de Software",
        edu_ifpr_desc: "Curso superior com foco em desenvolvimento de software, algoritmos, engenharia de sistemas e boas práticas de programação.",
        edu_dom_ano: "Ensino Médio - 2021",
        edu_dom_curso: "Ensino Médio",
        edu_dom_desc: "Bolsista integral (100%) durante todo o ensino médio.",
        edu_sab_ano: "Ensino Fund. - 2008",
        edu_sab_curso: "Ensino Fundamental",

        exp_ano: "2022 — atualmente",
        exp_cargo: "Administrativo e Financeiro",
        exp_desc: "Responsável por toda a área administrativa e financeira da empresa, incluindo controle de contas, compras/vendas e gestão de RH.",

        form_nome: "Nome",
        form_email: "Email",
        form_msg: "Mensagem",
        form_btn: "Enviar Mensagem"
    },
    en: {
        nav_inicio: "Home",
        nav_projetos: "Projects",
        nav_habilidades: "Skills",
        nav_educacao: "Education",
        nav_experiencia: "Experience",
        nav_contato: "Contact",

        nav_inicio: "Home",
        hero_p1: "Hi! My name is Mauro, I'm a Software Engineering student at IFPR Paranavaí, driven by the desire to understand how technology works from the inside. Still discovering my path in programming, but with a clear goal: to entrepreneur and transform ideas into real products.",

        proj_sicape_desc: "Inmate control system for the Terra Rica courthouse.",
        proj_sicape_ling: "Integrative Project",
        proj_sicape_btn: "Open Project",
        proj_mem_desc: "Memory game implemented in class, first contact with web development.",
        proj_mem_ling: "HTML, CSS, JavaScript",
        proj_mem_btn: "Show in GitHub",
        proj_sgop_desc: "Budget and Proposal Management System.",
        proj_sgop_ling: "Java, Database",
        proj_sgop_btn: "Show in GitHub",
        proj_repos: "Public GitHub repositories: ",

        edu_ifpr_ano: "Higher Education - 2024",
        edu_ifpr_curso: "Software Engineering",
        edu_ifpr_desc: "Undergraduate degree focusing on software development, algorithms, systems engineering, and coding best practices.",
        edu_dom_ano: "High School - 2021",
        edu_dom_curso: "High School",
        edu_dom_desc: "Full scholarship student (100%) throughout high school.",
        edu_sab_ano: "Elementary School - 2008",
        edu_sab_curso: "Elementary School",

        exp_ano: "2022 — present",
        exp_cargo: "Administrative and Financial",
        exp_desc: "Responsible for the entire administrative and financial area of the company, including accounts control, purchasing/sales, and HR management.",

        form_nome: "Name",
        form_email: "Email",
        form_msg: "Message",
        form_btn: "Send Message"
    }
};

let idiomaAtual = "pt";

function alternarIdioma() {
    idiomaAtual = (idiomaAtual === "pt") ? "en" : "pt";

    // atualiza o texto do btn
    document.getElementById("lang-btn").innerText = (idiomaAtual === "pt") ? "EN" : "PT";

    // busca todos os elementos que têm o data-i18n
    const elementos = document.querySelectorAll("[data-i18n]");

    // faz o loop e substitui o texto
    elementos.forEach(el => {
        const chave = el.getAttribute("data-i18n");
        
        // verifica se a chave existe no dicionario
        if (traducoes[idiomaAtual][chave]) {
            el.innerText = traducoes[idiomaAtual][chave];
        }
    });
}

// configura o clique do btn assim que a pagina carregar
document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("lang-btn");
    if (btn) {
        btn.addEventListener("click", alternarIdioma);
    }
});