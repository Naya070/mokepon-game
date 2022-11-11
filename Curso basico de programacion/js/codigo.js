
                function aleatorio(min, max) { return Math.floor(Math.random()*((max-min+1)+min))}

            // 1 = piedra, 2 = papel, 3 = tijera    
            let jugador = 0
            let pc = 0
            let triunfos = 0
            let perdidas = 0

            function eleccion (jugada) {
                let resultado = ""
                if(jugada == 1) {
                    resultado = "Piedra ✊"
                } else if(jugada == 2) {
                    resultado = "Papel 📄"
                } else if(jugada == 3) {
                    resultado = "Tijera ✂️ "
                } else {
                    resultado = "MAL ELEGIDO"
                } 
                return resultado
            }

            while (triunfos < 3 && perdidas < 3 ) {
                jugador = prompt("Elije: 1 para piedra, 2 para papel, 3 para tijera")
                pc = aleatorio(1,3)
                //alert("elejiste " + jugador)
                alert("El PC elige: " + eleccion(pc))
                alert("Tu eliges: " + eleccion(jugador))

                    //COMBATE

                if(pc == jugador) {alert("EMPATE")}
                else if(jugador == 1 && pc == 3) {
                    alert("GANASTE") 
                    triunfos++}
                else if(jugador == 2 && pc == 1) {
                    alert("GANASTE")
                    triunfos++}
                else if(jugador == 3 && pc == 2) {
                    alert("GANASTE")
                    triunfos++}
                else{
                    alert("PERDISTE")
                    perdidas++}

                alert("Ganaste " + triunfos + " veces. Perdiste" + perdidas + "veces")

            }
