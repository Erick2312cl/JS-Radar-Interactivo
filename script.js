const caja = document.getElementById("cajaRoja");
const inputTop = document.getElementById("inputTop");
const inputLeft = document.getElementById("inputLeft");
const btnMover = document.getElementById("btnMover");

btnMover.addEventListener("click", function () {
   
    const valorTop = parseInt(inputTop.value);
    const valorLeft = parseInt(inputLeft.value);

    if(valorTop < 0 || valorTop > 100 || valorLeft < 0 || valorLeft > 400){

        console.log("Fuera de rango")
        caja.textContent = "Indices fuera de rango";

    }else{

        caja.innerHTML = `<p>Posición del div Top: ${valorTop} y Left: ${valorLeft}</p>`;

        caja.style.top = valorTop + "px";
        caja.style.left = valorLeft + "px";



    }

    
});