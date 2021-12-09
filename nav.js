function fecharMenu() {
    let navMenu = document.querySelector(".nav-menu");
    navMenu.style.transform = "translateX(-100%)"
    $(".escurecer").fadeOut(150);
}

function abrirMenu() {
    let navMenu = document.querySelector(".nav-menu");
    navMenu.style.transform = "translateX(0)"
    $(".escurecer").fadeIn(150);
}

function clicarPesquisa() {
    let navPesquisa = document.querySelector(".nav-pesquisa");
    if (navPesquisa.classList.contains("nav-pesquisa--ativo")) {
        navPesquisa.classList.remove("nav-pesquisa--ativo");
    } else {
        navPesquisa.classList.add("nav-pesquisa--ativo");
    }
} 