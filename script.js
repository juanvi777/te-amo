function respuestaSi() {
    document.body.innerHTML = `
        <div style="text-align:center; margin-top:100px;">
            <h1>💍 ¡Vamos a casarnos! 💖</h1>
            <p>Eres el amor de mi vida 😍</p>
        </div>
    `;
}

function respuestaNo() {
    const botonNo = document.getElementById("no");

    const ancho = window.innerWidth;
    const alto = window.innerHeight;

    const nuevaX = Math.random() * (ancho - 100);
    const nuevaY = Math.random() * (alto - 50);

    botonNo.style.position = "absolute";
    botonNo.style.left = nuevaX + "px";
    botonNo.style.top = nuevaY + "px";
}

setInterval(() => {
    const corazon = document.createElement("div");
    corazon.classList.add("corazon");
    corazon.innerHTML = "💖😍";

    corazon.style.left = Math.random() * window.innerWidth + "px";
    corazon.style.bottom = "0px";

    document.body.appendChild(corazon);

    setTimeout(() => {
        corazon.remove();
    }, 5000);
}, 300);