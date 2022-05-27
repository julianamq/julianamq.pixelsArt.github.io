function generateRGB() {
  const red = Math.random() * 255;
  const green = Math.random() * 255;
  const blue = Math.random() * 255;
  return `rgb(${red},${green},${blue})`;
}

function gerarCores() {
  const colors = document.querySelectorAll('.color');
  colors[1].style.backgroundColor = generateRGB();
  colors[2].style.backgroundColor = generateRGB();
  colors[3].style.backgroundColor = generateRGB();
}

function createPixelBoard(size) { // size linhas e size coluna 
  const pixelBoard = document.getElementById('pixel-board');
  pixelBoard.innerHTML = '';
  for (let linha = 0; linha < size; linha += 1) { // encapsular a linha dentro de uma div 
    const linhaElement = document.createElement('div');// quero add uma classe nessa div
    linhaElement.classList.add('linha');// para cada linha preciso fazer o tamanho de size. 
    for (let coluna = 0; coluna < size; coluna += 1) { // agora criar as 5 divs de pixel
      const pixelElement = document.createElement('div');
      pixelElement.classList.add('pixel'); // agora add o pixel element dentro da linha 
      linhaElement.appendChild(pixelElement); // pra cada element vou add o segundo for e ir add cada uma 

    }
    pixelBoard.appendChild(linhaElement);
  }
}
function escutadorPixel() { // target = alvo //quero selecionar a div pixelBoard
  const pixelBoard = document.getElementById('pixel-board');
  pixelBoard.addEventListener('click', (event) => { // arrow function//O EVENTO DE CLICK tem o evento que é muito importante a gente recebe como parametro
    const pixel = event.target;
    if (pixel.classList.contains('pixel')) {
      const selectedColor = document.querySelector('.selected');
      pixel.style.backgroundColor = selectedColor.style.backgroundColor;
    }
  });
}
function colorClickList() {
  const colorPalette = document.getElementById('color-palette');
  colorPalette.addEventListener('click', (event) => {
    const color = event.target;
    if (color.classList.contains('color')) {
      const selected = document.querySelector('.selected');
      selected.classList.remove('selected')// apagando
      color.classList.add('selected');

    }
  })
}
function clickClearListener() {
  const button = document.getElementById('clear-board');
  button.addEventListener('click', () => {
    const pixels = document.querySelectorAll('.pixel');
    for (const pixel of pixels) {
    pixel.style.backgroundColor = 'white';
  }
 });// toda função de escutador de evento já tem, porque não vamos usar. 
}
// gerar cores da paleta aleatório.

function createBoardListener() {
  const button = document.getElementById('generate-board');
  button.addEventListener('click', () => {
    const input = document.getElementById('board-size');
    if (!input.value) {
      alert('Board inválido!');
    } else if (input.value < 5) {
      createPixelBoard(5);
    } else if (input.value > 50) {
      createPixelBoard(50);

    } else {
      createPixelBoard(input.value);

    } // para nao gerar outro board tem que limpar 
  });
}


gerarCores()
createPixelBoard(5);
createBoardListener();
escutadorPixel();
colorClickList();
clickClearListener();
gerarCores();