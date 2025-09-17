 function calcularCLTPJ() {
        let salario = parseFloat(document.getElementById('salario1').value) || 0;
        let beneficios = parseFloat(document.getElementById('beneficios1').value) || 0;
        let inss = parseFloat(document.getElementById('inss1').value) / 100 || 0;
        let fgts = parseFloat(document.getElementById('fgts1').value) / 100 || 0;
        let pj = parseFloat(document.getElementById('pj1').value) || 0;

        let custo_clt = salario + beneficios + (salario * inss) + (salario * fgts);
        let diferenca = custo_clt - pj;
        let percentual = (diferenca / custo_clt) * 100;

        document.getElementById('resultado1').innerHTML = `
            <strong>Custo CLT:</strong> R$ ${custo_clt.toFixed(2)}<br>
            <strong>Custo PJ:</strong> R$ ${pj.toFixed(2)}<br>
            <strong>Diferença:</strong> R$ ${diferenca.toFixed(2)} (${percentual.toFixed(2)}%)
        `;
    }

    function calcularCustoCLT() {
        let salario = parseFloat(document.getElementById('salario2').value) || 0;
        let beneficios = parseFloat(document.getElementById('beneficios2').value) || 0;
        let inss = parseFloat(document.getElementById('inss2').value) / 100 || 0;
        let fgts = parseFloat(document.getElementById('fgts2').value) / 100 || 0;

        let custo_mensal = salario + beneficios + (salario * inss) + (salario * fgts);
        let decimo_terceiro = salario;
        let ferias = salario + (salario / 3);
        let custo_anual_total = (custo_mensal * 12) + decimo_terceiro + ferias;
        let custo_mensal_real = custo_anual_total / 12;

        document.getElementById('resultado2').innerHTML = `
            <strong>Custo mensal (sem extras):</strong> R$ ${custo_mensal.toFixed(2)}<br>
            <strong>13º Salário:</strong> R$ ${decimo_terceiro.toFixed(2)}<br>
            <strong>Férias + 1/3:</strong> R$ ${ferias.toFixed(2)}<br>
            <strong>Custo anual total:</strong> R$ ${custo_anual_total.toFixed(2)}<br>
            <strong>Custo mensal real (com extras):</strong> R$ ${custo_mensal_real.toFixed(2)}
        `;
    }
