function generarCampos() {
    let numDatos = parseInt(document.getElementById("numDatos").value);
    let container = document.getElementById("datosContainer");
    container.innerHTML = "";

    if (isNaN(numDatos) || numDatos < 1) {
        alert("Por favor, ingresa un número válido de datos.");
        return;
    }

    for (let i = 0; i < numDatos; i++) {
        let divGroup = document.createElement("div");
        divGroup.classList.add("input-group");

        let inputReal = document.createElement("input");
        inputReal.type = "number";
        inputReal.placeholder = `Valor Real ${i + 1}`;
        inputReal.step = "any";
        inputReal.classList.add("valorReal");
        
        let inputAprox = document.createElement("input");
        inputAprox.type = "number";
        inputAprox.placeholder = `Valor Aproximado ${i + 1}`;
        inputAprox.step = "any";
        inputAprox.classList.add("valorAproximado");
        
        divGroup.appendChild(inputReal);
        divGroup.appendChild(inputAprox);
        container.appendChild(divGroup);
    }
    document.getElementById("calcularBtn").style.display = "block";
    document.getElementById("borrarBtn").style.display = "block";
}

function calcularErrores() {
    let valoresReales = document.querySelectorAll(".valorReal");
    let valoresAproximados = document.querySelectorAll(".valorAproximado");
    let erroresAbsolutos = [];
    let erroresRelativos = [];

    for (let i = 0; i < valoresReales.length; i++) {
        let valorReal = parseFloat(valoresReales[i].value);
        let valorAproximado = parseFloat(valoresAproximados[i].value);

        if (isNaN(valorReal) || isNaN(valorAproximado)) {
            alert("Por favor, ingresa valores numéricos válidos en todos los campos.");
            return;
        }

        let errorAbsoluto = Math.abs(valorReal - valorAproximado);
        let errorRelativo = errorAbsoluto / Math.abs(valorReal);

        erroresAbsolutos.push(`Error Absoluto ${i + 1}: ${errorAbsoluto.toFixed(4)}`);
        erroresRelativos.push(`Error Relativo ${i + 1}: ${errorRelativo.toFixed(4)}`);
    }

    document.getElementById("errorAbsoluto").innerText = erroresAbsolutos.join("\n");
    document.getElementById("errorRelativo").innerText = erroresRelativos.join("\n");
}

function borrarCampos() {
    document.getElementById("numDatos").value = "";
    document.getElementById("datosContainer").innerHTML = "";
    document.getElementById("errorAbsoluto").innerText = "";
    document.getElementById("errorRelativo").innerText = "";
    document.getElementById("calcularBtn").style.display = "none";
    document.getElementById("borrarBtn").style.display = "none";
}
