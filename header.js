$(document).ready(function() {
    $(".nav-bar__ativador--menu").click(function() {
        $(".nav-menu").toggleClass("nav-menu--ativado");
    });

    $(".nav-bar__ativador--pesquisa").click(function() {
        $(".nav-pesquisa").slideToggle(125);
    });
});
