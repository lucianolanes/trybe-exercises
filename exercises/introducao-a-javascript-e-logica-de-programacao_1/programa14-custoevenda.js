let valorProduto = 10;
let valorVenda = 18;
let lucro = 0;


if ((valorProduto >= 0) && (valorVenda >= 0)) {
    valorProduto = (valorProduto * 1.20);
    lucro = (valorVenda - valorProduto);
    console.log(lucro);

} else {
    console.log("Valor inserido inválido");
}