function calcular() {
    let campo1 = parseFloat(document.getElementById('campo1').value) || 0;
    let campo2 = parseFloat(document.getElementById('campo2').value) || 0;

    // Fórmula exemplo
    let resultado = campo1 + (campo1 * campo2 / 100);

    document.getElementById('resultado').innerHTML = `
        <strong>Resultado:</strong> R$ ${resultado.toFixed(2)}
    `;
}
