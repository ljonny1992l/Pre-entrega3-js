
class ResultadoC {
    constructor(r) {
        this.r = r;
    }
}

let resultadosC = [];



document.querySelector("#btnCirculo").addEventListener("click", () => {
    
    const radio = parseFloat(document.querySelector("#radio").value);
    
    if (radio != parseFloat(document.querySelector("#radio").value)) {
        const mensaje = "Ingrese un nro. que represente los metros del radio del circulo";
        document.querySelector("#pantallaCirculo").innerHTML = mensaje;
    } else {
        const resultado = Math.PI * Math.pow(radio, 2);
        document.querySelector("#pantallaCirculo").innerHTML = resultado.toFixed(2);


        //Agrupo todos los resultados en un único array

        const unResultado = new ResultadoC(parseFloat(resultado.toFixed(2)));
        resultadosC.push(unResultado);
        console.log(resultadosC);

        //guardo el resultado en el localSorage
        localStorage.setItem("resultadosC", JSON.stringify(resultadosC));

        //recupero lo guardado en el localStorage
        
        const recuperado = localStorage.getItem("resultadosC");
        const convertido = JSON.parse(recuperado);
        
        console.log("Cálculos realizados----> ", {convertido});
        document.querySelector("#segundaPantallaCirculo").innerHTML = convertido.map((element) => new ResultadoC(element.r));
    }  
})

document.querySelector("#borrarCirculo").addEventListener("click", () => {
    
    const r = 0;
    const reset = "";
    document.querySelector("#pantallaCirculo").innerHTML = r;
    document.querySelector("#radio").value = reset;
});