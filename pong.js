const jugador1 = document.getElementById("jugador1");
        const jugador2 = document.getElementById("jugador2");
        const pelota = document.getElementById("pelota");
        const puntuacion1Text = document.getElementById("puntuacion1");
        const puntuacion2Text = document.getElementById("puntuacion2");

        let pelotaX = 395;
        let pelotaY = 195;
        let velocidadPelotaX = 2;
        let velocidadPelotaY = 2;
        let radioPelota = 10;
        let jugador1Y = 150;
        let jugador2Y = 150;
        let puntuacion1 = 0;
        let puntuacion2 = 0;

        document.addEventListener("keydown", function (evento) {
            if (evento.key === "w" && jugador1Y > 0) {
                jugador1Y -= 10;
                jugador1.setAttribute("y", jugador1Y);
            } else if (evento.key === "s" && jugador1Y + 100 < 400) {
                jugador1Y += 10;
                jugador1.setAttribute("y", jugador1Y);
            }
        });

        document.addEventListener("keydown", function (evento) {
            if (evento.key === "ArrowUp" && jugador2Y > 0) {
                jugador2Y -= 10;
                jugador2.setAttribute("y", jugador2Y);
            } else if (evento.key === "ArrowDown" && jugador2Y + 100 < 400) {
                jugador2Y += 10;
                jugador2.setAttribute("y", jugador2Y);
            }
        });

        function MoverPelota() {
            pelotaX += velocidadPelotaX;
            pelotaY += velocidadPelotaY;

            pelota.setAttribute("cx", pelotaX);
            pelota.setAttribute("cy", pelotaY);

            if (pelotaY <= 0 || pelotaY >= 390) {
                velocidadPelotaY = -velocidadPelotaY;
            }

            if ((pelotaX - radioPelota) <= 20 && (pelotaY >= jugador1Y && pelotaY <= jugador1Y + 100)) {
                velocidadPelotaX = -velocidadPelotaX;
                puntuacion2++;
                puntuacion2Text.textContent = "Puntuación Jugador 2: " + puntuacion2;
                
            } else if ((pelotaX + radioPelota) >= 780 && (pelotaY >= jugador2Y && pelotaY <= jugador2Y + 100)) {
                velocidadPelotaX = -velocidadPelotaX;
                
                puntuacion1++;
                puntuacion1Text.textContent = "Puntuación Jugador 1: " + puntuacion1;
            }

            if (pelotaX <= 0 || pelotaX >= 790) {
                pelotaX = 400;
                pelotaY = 200;
                velocidadPelotaX = 2;
                velocidadPelotaY = 2;
            }

            requestAnimationFrame(Bucle);
        }

        function Bucle() {
            MoverPelota();
        }

        Bucle();