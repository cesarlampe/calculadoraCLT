function calcular() {
  let bruto = parseFloat(document.getElementById("salario").value);
  if (isNaN(bruto)) {
    document.getElementById("resultado").innerText = "Digite um valor válido.";
    return;
  }

  // Exemplo simplificado: desconta 11% INSS
  let liquido = bruto * 0.89;

  document.getElementById("resultado").innerText =
    "Salário líquido aproximado: R$ " + liquido.toFixed(2);
}
