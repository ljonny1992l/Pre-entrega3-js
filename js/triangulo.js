class ResultadoT {
    constructor(r) {
        this.r = r;
    }
}

let resultadosT = [];

document.querySelector("#btnTriangulo").addEventListener("click", () => {
    
    const b = parseFloat(document.querySelector("#base").value);
    const a = parseFloat(document.querySelector("#altura").value);
    
    if (b != parseFloat(document.querySelector("#base").value) || a != parseFloat(document.querySelector("#altura").value)) {
        const mensaje = "Ingrese nros. que representen los metros de la base y/o la altura";
        document.querySelector("#pantalla").innerHTML = mensaje;
    } else {
        const r = (b * a) / 2;
        document.querySelector("#pantalla").innerHTML = r.toFixed(2);

        //Agrupo todos los resultados en un único array

        const unResultado = new ResultadoT(parseFloat(r.toFixed(2)));
        resultadosT.push(unResultado);
        console.log(resultadosT);

         //guardo el resultado en el localStorage
         localStorage.setItem("resultadosT", JSON.stringify(resultadosT));

         //recupero lo guardado en el localStorage
         
         const recuperadoT = localStorage.getItem("resultadosT");
         const convertidoT = JSON.parse(recuperadoT);
         
         console.log("Cálculos realizados----> ", {convertidoT});
         document.querySelector("#segundaPantalla").innerHTML = convertidoT.map((element) => new ResultadoT(element.r));
    }
})
  
document.querySelector("#borrarTriangulo").addEventListener("click", () => {
    const r = 0;
    const reset = "";
    document.querySelector("#pantalla").innerHTML = r;
    document.querySelector("#base").value = reset;
    document.querySelector("#altura").value = reset;
});