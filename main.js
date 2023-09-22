//Pega o ID canvas no HTML
let canvas = document.getElementById("canvas");
// Pegamos o contexto do desenho, esse é o método que retorna o tipo da "animação", usar o parametro "2d" significa que o objeto que será renderizado será bidimensional
let contexto = canvas.getContext("2d");
//variavel que vai identificar se estamos desenhando
let desenhando = false;

//pegamos o input da paleta de cor do HTML
let corInput = document.getElementById("cor");

// Define a cor inicial do contexto de desenho
contexto.strokeStyle = corInput.value;

// adiciona um ouvinte de evento para o evento de alteração de cor
corInput.addEventListener("change", function() {
    // atualiza a cor do contexto de desenho quando o usuário escolhe uma nova cor
    contexto.strokeStyle = corInput.value;
});

canvas.addEventListener("mousedown", function(event){
    //vamos usar o metodo addEventListener para ouvir nosso mouse, ele irá identificar quando clicarmos
    desenhando = true;
    //desenhando se torna verdade
    contexto.beginPath();
    //a variavel contexto junto com o metodo beginPath() indica que algo novo será criado
    contexto.moveTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
    //nesse metodo, vamos dizer como o contexto irá funcionar, o clientX vai fornecer as cordenadas horizontais do mouse e o offsetLeft irá converter esse valor em pixel (px), a mesma coisa acontece com o clientY na vertical.
})

canvas.addEventListener("mousemove", function(event){
    //função que identifica quando movemos o mouse
    if(desenhando) {
        //esse if vai identificar se estamos clicando enquanto movemos  o mouse
        contexto.lineTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
        //o lineTo vai juntar as cordenadas e identificar a linha que estamos traçando enquanto clicamos e movemos o mouse
        contexto.stroke();
        //traça a linha
    }
})

canvas.addEventListener("mouseup", function(event){
    //essa função identifica quando não estamos mais clicando no mouse
    desenhando = false;
})