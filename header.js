function abrirNavMenu() {
    const navMenu = document.querySelector(".nav-menu");
    if (navMenu.classList.contains("nav-menu--ativado")) {
        navMenu.classList.remove("nav-menu--ativado");
    } else {
        navMenu.classList.add("nav-menu--ativado");
    }
}

function abrirNavPesquisa() {
    const navPesquisa = document.querySelector(".nav-pesquisa");
    if (navPesquisa.classList.contains("nav-pesquisa--ativado")) {
        navPesquisa.classList.remove("nav-pesquisa--ativado");
    } else {
        navPesquisa.classList.add("nav-pesquisa--ativado");
    }
}
