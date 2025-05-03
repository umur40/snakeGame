const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

const scale = 20;
const rows = canvas.height / scale;
const columns = canvas.width / scale;

let snake;
let food;
let toxicFood;
let megaFood;
let gameLoop;
let speed = 100;
let score = 0;
let level = 1;

(function setup() {
  snake = new Snake();
  food = getRandomPosition();
  toxicFood = null;
  megaFood = null;

  window.addEventListener('keydown', e => {
    snake.changeDirection(e.key);
  });

  gameLoop = setInterval(updateGame, speed);
})();

function updateGame() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  snake.update();
  snake.draw();

  // Çizimler
  drawFood(food, 'limegreen');
  if (toxicFood) drawFood(toxicFood, 'red');
  if (megaFood) drawFood(megaFood, 'gold');

  // Çarpışma
  if (isSamePosition(snake.body[0], food)) {
    snake.grow();
    score++;
    food = getRandomPosition();
    maybeSpawnToxic();
    maybeSpawnMega();
  }

  if (toxicFood && isSamePosition(snake.body[0], toxicFood)) {
    if (snake.body.length > 1) snake.body.pop(); // kısalt
    score = Math.max(0, score - 1);
    toxicFood = null;
  }

  if (megaFood && isSamePosition(snake.body[0], megaFood)) {
    for (let i = 0; i < 3; i++) snake.grow();
    score += 5;
    megaFood = null;
  }

  // Level sistemi
  if (score >= level * 10) {
    level++;
    speed = Math.max(20, speed - 10);
    clearInterval(gameLoop);
    gameLoop = setInterval(updateGame, speed);
  }

  // HUD
  ctx.fillStyle = 'black';
  ctx.font = '20px Arial';
  ctx.fillText(`Skor: ${score}`, 10, 20);
  ctx.fillText(`Seviye: ${level}`, 10, 40);
}

function drawFood(pos, color) {
  ctx.fillStyle = color;
  ctx.fillRect(pos.x, pos.y, scale, scale);
}

function getRandomPosition() {
  return {
    x: Math.floor(Math.random() * columns) * scale,
    y: Math.floor(Math.random() * rows) * scale
  };
}

function isSamePosition(pos1, pos2) {
  return pos1.x === pos2.x && pos1.y === pos2.y;
}

function maybeSpawnToxic() {
  if (Math.random() < 0.2) {
    toxicFood = getRandomPosition();
    setTimeout(() => { toxicFood = null }, 5000); // 5 saniye sonra kaybolur
  }
}

function maybeSpawnMega() {
  if (Math.random() < 0.1) {
    megaFood = getRandomPosition();
    setTimeout(() => { megaFood = null }, 5000); // 5 saniye sonra kaybolur
  }
}

// Snake class
function Snake() {
  this.body = [{ x: scale * 5, y: scale * 5 }];
  this.xSpeed = scale;
  this.ySpeed = 0;

  this.update = function () {
    const head = { x: this.body[0].x + this.xSpeed, y: this.body[0].y + this.ySpeed };

    // Oyun alanı dışı kontrolü
    if (head.x < 0 || head.x >= canvas.width || head.y < 0 || head.y >= canvas.height) {
      clearInterval(gameLoop);
      alert("Game Over!");
      return;
    }

    // Kendiyle çarpışma
    for (let i = 1; i < this.body.length; i++) {
      if (isSamePosition(head, this.body[i])) {
        clearInterval(gameLoop);
        alert("Game Over!");
        return;
      }
    }

    this.body.unshift(head);
    this.body.pop();
  };

  this.draw = function () {
    for (let i = 0; i < this.body.length; i++) {
      const shade = Math.floor(255 - (i * (200 / this.body.length))); // Kuyruk animasyon efekti
      ctx.fillStyle = `rgb(0, ${shade}, 255)`;
      ctx.fillRect(this.body[i].x, this.body[i].y, scale, scale);
    }
  };

  this.changeDirection = function (direction) {
    switch (direction) {
      case 'ArrowUp':
        if (this.ySpeed === 0) {
          this.xSpeed = 0;
          this.ySpeed = -scale;
        }
        break;
      case 'ArrowDown':
        if (this.ySpeed === 0) {
          this.xSpeed = 0;
          this.ySpeed = scale;
        }
        break;
      case 'ArrowLeft':
        if (this.xSpeed === 0) {
          this.xSpeed = -scale;
          this.ySpeed = 0;
        }
        break;
      case 'ArrowRight':
        if (this.xSpeed === 0) {
          this.xSpeed = scale;
          this.ySpeed = 0;
        }
        break;
    }
  };

  this.grow = function () {
    const tail = this.body[this.body.length - 1];
    this.body.push({ x: tail.x, y: tail.y });
  };
}
