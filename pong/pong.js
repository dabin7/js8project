const canvas = document.getElementById('pingpong');
const ctx = canvas.getContext('2d');

let x = canvas.width / 2;
let y = canvas.height - 30;
let dx = 2;
let dy = -2;
let ballRadius = 10; //공의 반지름 변수 충돌감지에서 계산을 쉽게하기위해
let paddleHeight = 10;
let paddleWidth = 75;
let paddleX = (canvas.width - paddleWidth) / 2; //x좌표 중앙배치 변수
let rightPressed = false;
let leftPressed = false;

let brickRowCount = 3;
let brickColumnCount = 5;
let brickWidth = 75;
let brickHeight = 20;
let brickPadding = 10;
let brickOffsetTop = 30;
let brickOffsetLeft = 30;

function drawBall() {
  ctx.beginPath();
  ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
  ctx.fillStyle = '#0095DD';
  ctx.fill();
  ctx.closePath();
}

function drawPaddle() {
  ctx.beginPath();
  ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
  ctx.fillStyle = '#0095DD';
  ctx.fill();
  ctx.closePath();

  if (rightPressed && paddleX < canvas.width - paddleWidth) {
    paddleX += 7;
  }
  if (leftPressed && paddleX >= 0) {
    paddleX -= 7;
  }
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBall();
  drawPaddle();
  x += dx;
  y += dy;
  if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
    dx = -dx;
  } //닿자마자 튕겨야되기 떄문에 -ballRadius
  if (y + dy < ballRadius) {
    dy = -dy;
  } else if (y + dy > canvas.height - ballRadius) {
    if (x > paddleX && x < paddleX + paddleWidth) {
      dy = -dy;
    } else {
      alert('Game Over');
      document.location.reload();
    }
  }
}

function keyDownHandler(e) {
  if (e.keyCode === 39) {
    rightPressed = true;
  }
  if (e.keyCode === 37) {
    leftPressed = true;
  }
  //키보드버튼마다 고유 keyCode가 있음.
}

function keyUpHandler(e) {
  if (e.keyCode === 39) {
    rightPressed = false;
  }
  if (e.keyCode === 37) {
    leftPressed = false;
  }
}

document.addEventListener('keydown', keyDownHandler, false);
document.addEventListener('keyup', keyUpHandler, false);
//keydown 명령어는 document로 canvas x

setInterval(draw, 10);
