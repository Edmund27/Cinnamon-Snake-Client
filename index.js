const CANVAS_BORDER_COLOUR = 'black';
const CANVAS_BACKGROUND_COLOUR = "white";

let gameCanvas = document.getElementById("gameCanvas");
const ctx = gameCanvas.getContext("2d");

const playButton = document.getElementById('play-button');

const socket = io("http://localhost:3000")

let snake
let foodX
let foodY
let score = 0

let changingDirection = false
document.addEventListener("keydown", keyPressedHandler)


socket.on("connected", (message) => {
    console.log("From server:", message)
})

socket.on("gameState", (gameStateObject) => {
    console.log(gameStateObject)
    snake = gameStateObject.snake
    score = gameStateObject.score
    foodX = gameStateObject.food.X
    foodY = gameStateObject.food.Y

    document.getElementById('score').innerHTML = score;
    clearCanvas()
    drawFood()
    drawSnake()
})

playButton.onclick = () => {
    socket.emit('startGame',)
};

function drawFood() {
    ctx.fillStyle = 'red';
    ctx.fillRect(foodX, foodY, 10, 10);
    ctx.strokeRect(foodX, foodY, 10, 10);
}

function drawSnakePart(snakePart) {
    ctx.fillStyle = 'brown';
    ctx.strokestyle = 'black';
    ctx.fillRect(snakePart.x, snakePart.y, 10, 10);
    ctx.strokeRect(snakePart.x, snakePart.y, 10, 10);
}

function drawSnake() {
    snake.forEach(drawSnakePart);
}


function clearCanvas() {
    ctx.fillStyle = "white";
    ctx.strokestyle = "black";

    ctx.fillRect(0, 0, gameCanvas.width, gameCanvas.height);
    ctx.strokeRect(0, 0, gameCanvas.width, gameCanvas.height);
}

function keyPressedHandler(event) {
    console.log(event.keyCode)
    socket.emit('changeDirection', event.keyCode)
}
