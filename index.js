const CANVAS_BORDER_COLOUR = 'black';
const CANVAS_BACKGROUND_COLOUR = "white";

let gameCanvas = document.getElementById("gameCanvas");
const ctx = gameCanvas.getContext("2d");

const playButton = document.getElementById('play-button');

const socket = io("http://localhost:3000")

socket.on("connected", (message) => {
    console.log("From server:", message)
})

ctx.fillStyle = CANVAS_BACKGROUND_COLOUR;
ctx.strokestyle = CANVAS_BORDER_COLOUR;

ctx.fillRect(0, 0, gameCanvas.width, gameCanvas.height);
ctx.strokeRect(0, 0, gameCanvas.width, gameCanvas.height);



socket.on("gameState", (gameStateObject) => {
    console.log(gameStateObject)
    snake = gameStateObject.snake
    gameCanvas = gameStateObject.canvas

    drawSnake()
})


function drawSnakePart(snakePart) {
    ctx.fillStyle = 'brown';
    ctx.strokestyle = 'black';
    ctx.fillRect(snakePart.x, snakePart.y, 10, 10);
    ctx.strokeRect(snakePart.x, snakePart.y, 10, 10);
}

function drawSnake() {
    snake.forEach(drawSnakePart);
}