let angulo1 = 8;
let angulo2 = 17;
let angulo3 = -157;
let angulosvalidos = (angulo1 + angulo2 + angulo3);
let angulospositivos = (angulo1 > 0 && angulo2 > 0 && angulo3 > 0);

if (angulospositivos){
    if (angulosvalidos === 180){
        console.log("True");
    } else {
        console.log("False");
    }
} else {
    console.log("Dados inseridos incorretos");
}