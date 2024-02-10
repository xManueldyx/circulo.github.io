let circulo = document.getElementById("circle");

function agrandarAltura() {
    const actualAltura = parseFloat(getComputedStyle(circulo).height);
    circulo.style.height = `${actualAltura + 15}px`;
}

function disminuirAltura() {
    const actualAltura = parseFloat(getComputedStyle(circulo).height);
    circulo.style.height = `${actualAltura - 15}px`;
}

function agrandarAnchura() {
    const actualAnchura = parseFloat(getComputedStyle(circulo).width);
    circulo.style.width = `${actualAnchura + 15}px`;
}

function disminuirAnchura() {
    const actualAnchura = parseFloat(getComputedStyle(circulo).width);
    circulo.style.width = `${actualAnchura - 15}px`;
}

function cambioColor(NuevoColor) {
    circulo.style.background = NuevoColor;
}

function visibilidad() {
    if (circulo.style.display === "none") {
        circulo.style.display = "block";
    } else {
        circulo.style.display = "none";
    }
}