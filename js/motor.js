let estadoLicuadora = "apagada";
const sonidoLicuadora = document.getElementById("blender-sound")
const botonLicuadora = document.getElementById("blender-button-sound")
const licuadora = document.getElementById("blender")

function hacerBrrBrr(){
    if ( sonidoLicuadora.paused ) {
        botonLicuadora.play();
        sonidoLicuadora.play();
    } else {
        botonLicuadora.play();
        sonidoLicuadora.pause();
        sonidoLicuadora.currentTime = 0;
    }
}

function controlarLicuadora() {
    if (estadoLicuadora == "apagada") {
        estadoLicuadora = "encendido";
        hacerBrrBrr();
        licuadora.classList.add("active");
        console.log("me prendiste") 
    } else {
        estadoLicuadora = "apagada"
        hacerBrrBrr();
        licuadora.classList.remove("active");
        console.log("me apagaste");
    }
}

