alert("Tabuada");

let valorUsuario = parseFloat(prompt("Insira o valor a ser calculado...").trim());
let valorUsuarioString = valorUsuario.toString();
let i = 0;

if (valorUsuarioString == "NaN") {
    alert("Insira um valor numérico!!");
}
else {
    while (i <= 10) {
        let resultado = valorUsuarioString * i;

        alert(i + " x " + valorUsuarioString + " = " + resultado);
        i++;
    }
}