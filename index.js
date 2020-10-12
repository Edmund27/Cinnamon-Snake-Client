const CANVAS_BORDER_COLOUR = 'black';
const CANVAS_BACKGROUND_COLOUR = "white";

const gameCanvas = document.getElementById("gameCanvas");
const ctx = gameCanvas.getContext("2d");

const playButton = document.getElementById('play-button');

ctx.fillStyle = CANVAS_BACKGROUND_COLOUR;
ctx.strokestyle = CANVAS_BORDER_COLOUR;

ctx.fillRect(0, 0, gameCanvas.width, gameCanvas.height);
ctx.strokeRect(0, 0, gameCanvas.width, gameCanvas.height);