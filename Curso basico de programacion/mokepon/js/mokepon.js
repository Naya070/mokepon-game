const sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque")
const sectionReiniciar = document.getElementById("reiniciar")
const botonMascotaJugador = document.getElementById('boton-mascota')
const botonReiniciar = document.getElementById("boton-reiniciar")

const spanMascotaJugador = document.getElementById("mascota-jugador")
const sectionSeleccionarMascota = document.getElementById("seleccionar-mascota")

const spanMascotaEnemigo = document.getElementById("mascota-enemigo")

const sectionMensajes = document.getElementById("resultado")
const sectionAtaquesDelJugador = document.getElementById("ataques-del-jugador")
const sectionAtaquesDelEnemigo = document.getElementById("ataques-del-enemigo")

const spanVidasJugador = document.getElementById("vidas-jugador")
const spanVidasEnemigo = document.getElementById("vidas-enemigo")

const contenedorTarjetas = document.getElementById("contenedor-tarjetas")

const contenedorAtaques = document.getElementById("contenedor-ataques")

const sectionVerMapa = document.getElementById('ver-mapa')
const mapa = document.getElementById('mapa')


let mokepones = []
let ataqueEnemigo = []
let opcionDeMokepones
let inputHipodoge
let inputCapipepo
let inputRatigueya
let mascotaJugador
let mascotaJugadorObjeto
let ataquesMokepon
let ataquesMokeponEnemigo
let botonFuego
let botonAgua
let botones = []
let indexAtaqueJugador
let indexAtaqueEnemigo
let ataqueJugador = []
let victoriasJugador = 0
let victoriasEnemigo = 0
let vidasJugador =3
let vidasEnemigo =3
let lienzo = mapa.getContext("2d")
let intervalo
let mapaBackground = new Image()
mapaBackground.src = "./img/mapaBackground.png"

let alturaQueBuscamos
let anchoDelMapa=window.innerWidth-20
const anchoMaximoDelMapa=350
if(anchoDelMapa>anchoMaximoDelMapa){anchoDelMapa=anchoMaximoDelMapa-20}
alturaQueBuscamos=anchoDelMapa*600/800
mapa.width=anchoDelMapa
mapa.height=alturaQueBuscamos

class Mokepon {
    constructor(nombre, foto, vidas, fotoMapa){
        this.nombre = nombre
        this.foto = foto
        this.vidas = vidas
        this.ataques = []
        this.ancho = 40
        this.alto = 40
        this.x = aleatorio(0,mapa.width-this.ancho)
        this.y = aleatorio(0,mapa.height-this.alto)
        this.mapaFoto = new Image()
        this.mapaFoto.src = fotoMapa
        this.velocidadX = 0
        this.velocidadY = 0
    }


    pintarMokepon() {
        lienzo.drawImage(
            this.mapaFoto,
            this.x,
            this.y,
            this.ancho,
            this.alto)
    }
} 

let hipodoge = new Mokepon ("Hipodoge", "./img/hipodoge.png", 5, "./img/hipodoge_cabeza.png")
let capipepo = new Mokepon ("Capipepo", "./img/capipepo.png", 5, "./img/capipepo_cabeza.png")
let ratigueya = new Mokepon ("Ratigueya", "./img/ratigueya.png", 5, "./img/ratigueya_cabeza.png")

let hipodogeEnemigo = new Mokepon ("Hipodoge", "./img/hipodoge.png", 5, "./img/hipodoge_cabeza.png")
let capipepoEnemigo = new Mokepon ("Capipepo", "./img/capipepo.png", 5, "./img/capipepo_cabeza.png")
let ratigueyaEnemigo = new Mokepon ("Ratigueya", "./img/ratigueya.png", 5, "./img/ratigueya_cabeza.png")

hipodoge.ataques.push(
    {nombre:'💧', id:'boton-agua'},
    {nombre:'💧', id:'boton-agua'},
    {nombre:'💧', id:'boton-agua'},
    {nombre:'🔥', id:'boton-fuego'},
    {nombre:'🌱', id:'boton-tierra'},
)

hipodogeEnemigo.ataques.push(
    {nombre:'💧', id:'boton-agua'},
    {nombre:'💧', id:'boton-agua'},
    {nombre:'💧', id:'boton-agua'},
    {nombre:'🔥', id:'boton-fuego'},
    {nombre:'🌱', id:'boton-tierra'},
)

capipepo.ataques.push(
    {nombre:'🌱', id:'boton-tierra'},
    {nombre:'🌱', id:'boton-tierra'},
    {nombre:'🌱', id:'boton-tierra'},
    {nombre:'💧', id:'boton-agua'},
    {nombre:'🔥', id:'boton-fuego'},
)

capipepoEnemigo.ataques.push(
    {nombre:'🌱', id:'boton-tierra'},
    {nombre:'🌱', id:'boton-tierra'},
    {nombre:'🌱', id:'boton-tierra'},
    {nombre:'💧', id:'boton-agua'},
    {nombre:'🔥', id:'boton-fuego'},
)

ratigueya.ataques.push(
    {nombre:'🔥', id:'boton-fuego'},
    {nombre:'🔥', id:'boton-fuego'},
    {nombre:'🔥', id:'boton-fuego'},
    {nombre:'💧', id:'boton-agua'},
    {nombre:'🌱', id:'boton-tierra'},
)

ratigueyaEnemigo.ataques.push(
    {nombre:'🔥', id:'boton-fuego'},
    {nombre:'🔥', id:'boton-fuego'},
    {nombre:'🔥', id:'boton-fuego'},
    {nombre:'💧', id:'boton-agua'},
    {nombre:'🌱', id:'boton-tierra'},
)

mokepones.push(hipodoge,capipepo,ratigueya)

function iniciarJuego() {

    sectionSeleccionarAtaque.style.display = "none"
    sectionVerMapa.style.display = "none"

    mokepones.forEach((mokepon) => {
        opcionDeMokepones = ` 
        <input type="radio" name="mascota" id="${mokepon.nombre}"/>
        <label class="tarjeta-de-mokepon" for="${mokepon.nombre}">
            <p>${mokepon.nombre}</p>
            <img src="${mokepon.foto}" alt="${mokepon.nombre}">
        </label>`
    contenedorTarjetas.innerHTML += opcionDeMokepones

    inputHipodoge = document.getElementById("Hipodoge")
    inputCapipepo = document.getElementById("Capipepo")
    inputRatigueya = document.getElementById("Ratigueya")
    })


    sectionReiniciar.style.display = "none"

    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)

    botonReiniciar.addEventListener("click", reiniciarJuego)

}

function reiniciarJuego() {location.reload()}

function seleccionarMascotaJugador(){
    sectionSeleccionarMascota.style.display = "none"
    

    


    if ( inputHipodoge.checked) { spanMascotaJugador.innerHTML = inputHipodoge.id
    mascotaJugador= inputHipodoge.id}
    else if (inputCapipepo.checked) {spanMascotaJugador.innerHTML = inputCapipepo.id
    mascotaJugador=inputCapipepo.id}
    else if (inputRatigueya.checked) {spanMascotaJugador.innerHTML = inputRatigueya.id
    mascotaJugador = inputRatigueya.id}
    else {alert("Debe seleccionar una mascota")}
    
    extraerAtaques(mascotaJugador)

    sectionVerMapa.style.display = 'flex'
    iniciarMapa()
    
    }

function extraerAtaques(mascotaJugador) {
    let ataques
    for (let i = 0; i < mokepones.length; i++) {
        if (mascotaJugador === mokepones[i].nombre) {

            ataques = mokepones[i].ataques
        }
    }
    mostrarAtaques(ataques)
}

function mostrarAtaques(ataques) {
    ataques.forEach((ataque) => {

        ataquesMokepon = `
        <button id="${ataque.id}" class="boton-ataque BAtaque">${ataque.nombre}</button>
        `
        contenedorAtaques.innerHTML += ataquesMokepon
    })

    botonFuego = document.getElementById("boton-fuego")
    botonAgua = document.getElementById("boton-agua")
    botonTierra = document.getElementById("boton-tierra")

    botones = document.querySelectorAll('.BAtaque')

}

function secuenciaAtaque() {
    botones.forEach((boton) => {
        boton.addEventListener('click', (e) => {
            console.log(e)
            if(e.target.textContent === '🔥') {
                ataqueJugador.push('FUEGO')
                console.log(ataqueJugador)
                boton.style.opacity = 0.4
                boton.disabled= true
            }
            else if(e.target.textContent === '💧') {
                ataqueJugador.push('AGUA')
                console.log(ataqueJugador)
                boton.style.opacity = 0.4
                boton.disabled= true
            }
            else if (e.target.textContent === '🌱') {
                ataqueJugador.push('TIERRA')
                console.log(ataqueJugador)
                boton.style.opacity = 0.4
                boton.disabled= true
            }
            else {alert("no  pasa nada :c")}

            ataqueAleatorioEnemigo()

        })
    })

}

function ataqueAleatorioEnemigo() {
    let ataqueAleatorio = aleatorio(1,  ataquesMokeponEnemigo.length -1)

    if (ataqueAleatorio == 0 || ataqueAleatorio ==1) {
        ataqueEnemigo.push("FUEGO")
    }
    else if (ataqueAleatorio == 3 || ataqueAleatorio ==4) {
        ataqueEnemigo.push("AGUA")
    }
    else {
        ataqueEnemigo.push("TIERRA")
    }
    console.log(ataqueEnemigo)
    iniciarPelea()

}

function iniciarPelea() {
    if (ataqueJugador.length === 5) {
        combate()
    }
}


function seleccionarMascotaEnemigo(enemigo) {

    spanMascotaEnemigo.innerHTML = enemigo.nombre
    ataquesMokeponEnemigo = enemigo.ataques

    secuenciaAtaque()

}

function aleatorio (min, max) {return Math.floor(Math.random() * (max - min + 1) + min)} 

function crearMensaje(resultado) {

    let nuevoAtaqueDelJugador = document.createElement('p')
    let nuevoAtaqueDelEnemigo = document.createElement('p')

    sectionMensajes.innerHTML = resultado
    nuevoAtaqueDelJugador.innerHTML = indexAtaqueJugador
    nuevoAtaqueDelEnemigo.innerHTML = indexAtaqueEnemigo

    sectionAtaquesDelJugador.appendChild(nuevoAtaqueDelJugador)
    sectionAtaquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)

    
}

function crearMensajeFinal(resultadoFinal) {
    sectionReiniciar.style.display ="block" 
    
    sectionMensajes.innerHTML = resultadoFinal

}

function indexAmbosOponente(jugador,enemigo) {
    indexAtaqueJugador = ataqueJugador[jugador]
    indexAtaqueEnemigo = ataqueEnemigo[enemigo]

}

//COMBATE
function combate() {

    for (let index = 0; index < ataqueJugador.length; index++) {
        if(ataqueJugador[index]===ataqueEnemigo[index]) {
            indexAmbosOponente(index,index)
            crearMensaje("EMPATE")}
            else if(ataqueJugador[index]==='FUEGO'&& 
            ataqueEnemigo[index]==='TIERRA'){indexAmbosOponente(index,index)
            crearMensaje("GANASTE")
            victoriasJugador++
            spanVidasJugador.innerHTML=victoriasJugador}
            else if(ataqueJugador[index]==='AGUA'&&
            ataqueEnemigo[index]==='FUEGO'){indexAmbosOponente(index,index)
            crearMensaje("GANASTE")
            victoriasJugador++
            spanVidasJugador.innerHTML=victoriasJugador}
            else if(ataqueJugador[index]==='TIERRA'&&
            ataqueEnemigo[index]==='AGUA'){indexAmbosOponente(index,index)
            crearMensaje("GANASTE")
            victoriasJugador++
            spanVidasJugador.innerHTML=victoriasJugador}
            else{indexAmbosOponente(index,index)
            crearMensaje("PERDISTE")
            victoriasEnemigo++
            spanVidasEnemigo.innerHTML=victoriasEnemigo

        }
        
    }

revisarVidas()
}

function revisarVidas() {
    if (victoriasJugador === victoriasEnemigo) {crearMensajeFinal("Esto es un empate!!")}
    else if(victoriasJugador > victoriasEnemigo) {crearMensajeFinal("FELICITACIONES! ganaste :D")}
    else if (vidasJugador < victoriasEnemigo) {crearMensajeFinal("Lo siento, perdiste :(")}

}

function pintarCanvas(){
    mascotaJugadorObjeto.x = mascotaJugadorObjeto.x + mascotaJugadorObjeto.velocidadX
    mascotaJugadorObjeto.y = mascotaJugadorObjeto.y + mascotaJugadorObjeto.velocidadY
    lienzo.clearRect(0,0, mapa.width, mapa.height)
    lienzo.drawImage(
        mapaBackground,
        0,
        0,
        mapa.width,
        mapa.height
    )
    mascotaJugadorObjeto.pintarMokepon()
    hipodogeEnemigo.pintarMokepon()
    capipepoEnemigo.pintarMokepon()
    ratigueyaEnemigo.pintarMokepon()
    if(mascotaJugadorObjeto.velocidadX !== 0 || spanMascotaJugador.velocidadY !==0) {
        revisarColision(hipodogeEnemigo)
        revisarColision(capipepoEnemigo)
        revisarColision(ratigueyaEnemigo)
    }

}

function moverDerecha(){
mascotaJugadorObjeto.velocidadX = 5
}

function moverIzquierda(){
mascotaJugadorObjeto.velocidadX = -5
}

function moverArriba(){
mascotaJugadorObjeto.velocidadY = -5
}

function moverAbajo(){
mascotaJugadorObjeto.velocidadY = 5
}
        
function detenerMovimiento() {
mascotaJugadorObjeto.velocidadX = 0
mascotaJugadorObjeto.velocidadY = 0
} 

function sePresionaUnaTecla(event) {
    switch (event.key) {
        case "ArrowUp":
            moverArriba()
            break;
        case "ArrowDown":
            moverAbajo()
            break;
        case "ArrowRight":
            moverDerecha()
            break;
        case "ArrowLeft":
        moverIzquierda()
        break;
    
        default:
            break;
    }
}

function iniciarMapa() {
    mapa.width = 600
    mapa.height = 370
    mascotaJugadorObjeto = obtenerObjetoMascota(mascotaJugador)
    intervalo = setInterval(pintarCanvas,50)

    window.addEventListener("keydown", sePresionaUnaTecla)
    window.addEventListener("keyup", detenerMovimiento)
}

function obtenerObjetoMascota() {
    for (let i = 0; i < mokepones.length; i++) {
        if (mascotaJugador === mokepones[i].nombre) {

            return mokepones[i]
        }}
}

function revisarColision(enemigo) {
    const arribaEnemigo = enemigo.y
    const abajoEnemigo = enemigo.y + enemigo.alto
    const derechaEnemigo = enemigo.x + enemigo.ancho
    const izquierdaEnemigo = enemigo.x

    const arribaMascota = mascotaJugadorObjeto.y
    const abajoMascota = mascotaJugadorObjeto.y + mascotaJugadorObjeto.alto
    const derechaMascota = mascotaJugadorObjeto.x + mascotaJugadorObjeto.ancho
    const izquierdaMascota = mascotaJugadorObjeto-mascotaJugadorObjeto.x

    if(
        abajoMascota < arribaEnemigo ||
        arribaMascota > abajoEnemigo ||
        derechaMascota < izquierdaEnemigo ||
        izquierdaMascota > derechaEnemigo
    ) {
        return
    }
    detenerMovimiento()
    clearInterval(intervalo)
    //alert("hay colision" + enemigo.nombre)
    sectionSeleccionarAtaque.style.display = "flex"
    sectionVerMapa.style.display = "none"
    seleccionarMascotaEnemigo(enemigo)

}

window.addEventListener("load", iniciarJuego)