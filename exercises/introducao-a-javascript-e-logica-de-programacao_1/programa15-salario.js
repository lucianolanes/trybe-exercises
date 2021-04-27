let salarioBruto = 3000;
let salarioBase = 0;
let aliquotaINSS = 0;
let aliquotaIR = 0;
let descontoIR = 0;
let impostoDeRenda = 0;
let salarioLiquido = 0;


switch (true) {
    case (salarioBruto <= 1556.94):
         aliquotaINSS = (salarioBruto * 0.08);
         salarioBase = (salarioBruto - aliquotaINSS);
        break;
    case (salarioBruto <= 2826.65):
         aliquotaINSS = (salarioBruto * 0.09);
         salarioBase = (salarioBruto - aliquotaINSS);
        break;
    case (salarioBruto <= 5189.82):
         aliquotaINSS = (salarioBruto * 0.11);
         salarioBase = (salarioBruto - aliquotaINSS);
        break;
    case (salarioBruto > 5189.82):
         aliquotaINSS = 570.88;
         salarioBase = (salarioBruto - aliquotaINSS);
        break;
}

switch (true) {
    case (salarioBase <= 1903.98):
         salarioLiquido = salarioBase;
         console.log(`Seu salário líquido é de R$ ${salarioLiquido}`);
        break;
    case (salarioBase <= 2826.65):
         aliquotaIR = (salarioBase * 0.075);
         descontoIR = (aliquotaIR - 142.80);
         salarioLiquido = (salarioBase - descontoIR);
         console.log(`Seu salário líquido é de R$ ${salarioLiquido}`);
        break;
    case (salarioBase <= 3751.05):
        aliquotaIR = (salarioBase * 0.15);
        descontoIR = (aliquotaIR - 354.80);
        salarioLiquido = (salarioBase - descontoIR);
        console.log(`Seu salário líquido é de R$ ${salarioLiquido}`);
        break;
    case (salarioBase <= 4664.68):
         aliquotaIR = (salarioBase * 0.225);
         descontoIR = (aliquotaIR - 636.13);
         salarioLiquido = (salarioBase - descontoIR);
         console.log(`Seu salário líquido é de R$ ${salarioLiquido}`);
        break;
    case (salarioBase > 4664.68):
         aliquotaIR = (salarioBase * 0.275);
         descontoIR = (aliquotaIR - 869.36);
         salarioLiquido = (salarioBase - descontoIR);
         console.log(`Seu salário líquido é de R$ ${salarioLiquido}`);
        break;        
}
