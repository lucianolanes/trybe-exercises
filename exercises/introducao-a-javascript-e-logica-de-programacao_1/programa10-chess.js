let playchess = "CaVaLo"


switch (playchess.toLowerCase()){
    case"torre":
    console.log("Movimenta-se na Vertical e Horizontal");
    break;

    case"cavalo":
    console.log("Movimenta-se em 'L'");
    break;

    case"bispo":
    console.log("Movimenta-se em Diagonal.");
    break;

    case"rainha":
    console.log("Todas as direções");
    break;

    case"rei":
    console.log("Todas as direções, porém uma casa por vez");
    break;

    case"peão":
    console.log("Para frente ao movimentar-se, diagonal para eliminar");
    break;

    default:
        console.log("Peça inválida");

}