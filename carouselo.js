const indicadores = document.getElementsByClassName("destaques__indicador");
let indicadoresAtuais = document.getElementsByClassName("destaques__indicador--atual");


function mudarIndicadorAutomatico() {

    const indicadores = document.getElementsByClassName("destaques__indicador");
    let indicadorAtual = document.querySelector(".destaques__indicador--atual");
    let indicadoresAtuais = document.getElementsByClassName("destaques__indicador--atual");

    if (indicadores[0].classList.contains("destaques__indicador--atual")) {
        setTimeout(() => {
            indicadorAtual.nextElementSibling.classList.add("destaques__indicador--atual");
            indicadoresAtuais[0].classList.remove("destaques__indicador--atual");
            mudarSlideAutomatico();
        }, 5000);

    } else if (indicadores[4].classList.contains("destaques__indicador--atual")) {
        setTimeout(() => {
            indicadores[4].classList.remove("destaques__indicador--atual");
            indicadores[0].classList.add("destaques__indicador--atual");
            mudarSlideAutomatico();
        }, 5000);

    } else {
        setTimeout(() => {
            indicadorAtual.nextElementSibling.classList.add("destaques__indicador--atual");
            indicadoresAtuais[0].classList.remove("destaques__indicador--atual");
            mudarSlideAutomatico();
        }, 5000);
    }

    setTimeout(mudarIndicadorAutomatico, 5000);
}

function mudarSlideAutomatico() {

    const slides = document.querySelectorAll(".destaques__slide");
    const indicadores = document.getElementsByClassName("destaques__indicador");
    
    if (indicadores[0].classList.contains("destaques__indicador--atual")) {
        for (var i = 0; i < slides.length; i++) {
            slides[i].style.transform = "translateX(0vw)";
        }

    } else if (indicadores[1].classList.contains("destaques__indicador--atual")) {
        for (var i = 0; i < slides.length; i++) {
            slides[i].style.transform = "translateX(-100vw)";
        }

    } else if (indicadores[2].classList.contains("destaques__indicador--atual")) {
        for (var i = 0; i < slides.length; i++) {
            slides[i].style.transform = "translateX(-200vw)";
        }

    } else if (indicadores[3].classList.contains("destaques__indicador--atual")) {
        for (var i = 0; i < slides.length; i++) {
            slides[i].style.transform = "translateX(-300vw)";
        }

    } else if (indicadores[4].classList.contains("destaques__indicador--atual")) {
        for (var i = 0; i < slides.length; i++) {
            slides[i].style.transform = "translateX(-400vw)";
        }
    }
}

indicadores[0].addEventListener("click", function() {
    indicadoresAtuais[0].classList.remove("destaques__indicador--atual");
    indicadores[0].classList.add("destaques__indicador--atual");
    mudarSlideAutomatico();
});

indicadores[1].addEventListener("click", function() {
    indicadoresAtuais[0].classList.remove("destaques__indicador--atual");
    indicadores[1].classList.add("destaques__indicador--atual");
    mudarSlideAutomatico();
});

indicadores[2].addEventListener("click", function() {
    indicadoresAtuais[0].classList.remove("destaques__indicador--atual");
    indicadores[2].classList.add("destaques__indicador--atual");
    mudarSlideAutomatico();
});

indicadores[3].addEventListener("click", function() {
    indicadoresAtuais[0].classList.remove("destaques__indicador--atual");
    indicadores[3].classList.add("destaques__indicador--atual");
    mudarSlideAutomatico();
});

indicadores[4].addEventListener("click", function() {
    indicadoresAtuais[0].classList.remove("destaques__indicador--atual");
    indicadores[4].classList.add("destaques__indicador--atual");
    mudarSlideAutomatico();
});



mudarIndicadorAutomatico();