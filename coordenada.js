const prompt = require("prompt-sync")({ sigint: true });

var x = parseInt(prompt("Insira a coordenada X: "));
var y = parseInt(prompt("Insira a coordenada Y: "));

var op = parseInt(prompt(
  "Você deseja descobrir a coordenada de seus pontos ? 1 = SIM | 2 = NÃO "
));
op = parseInt(op);

while (op !== 2) {
  if (isNaN(x) || isNaN(y)) {
    console.log("Valor invalido!");
  } else if (x > 0 && y > 0) {
    console.log("Números de X e Y estão no primeiro quadrante!");
  } else if (x < 0 && y < 0) {
    console.log("Números de X e Y estão no terceiro quadrante!");
  } else if (x < 0 && y > 0) {
    console.log("Números de X e Y estão no segundo quadrante!");
  } else if (x > 0 && y < 0) {
    console.log("Números de X e Y estão no quarto quadrante!");
  } else if (x === 0 && y === 0) {
    console.log("Números de X e Y estão no ponto de origem!");
  } else if (x === 0 && y !== 0) {
    console.log(
      "Números de X e Y estão sobre o eixo Y, area neutra do plano cartesiano, não pertence a nenhum quadrante!"
    );
  } else if (x !== 0 && y === 0) {
    console.log(
      "Números de X e Y estão sobre o eixo X, area neutra do plano cartesiano, não pertence a nenhum quadrante!"
    );
  }
  op = parseInt(
    prompt("Você deseja calcular outra coordenada? 1 = SIM | 2 = NÃO ")
  );

  if (op === 1) {
    x = parseInt(prompt("Digite a coordenada X: "));
    y = parseInt(prompt("Digite a coordenada Y: "));
  }
}
