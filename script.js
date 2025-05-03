const canvas = document.getElementById("gameCanvas");
    const ctx = canvas.getContext("2d");

    const box = 20;
    const canvasSize = 400;
    let score = 0;
    let snake;
    let food;
    let direction;
    let gameLoop;

    function initGame() {
      snake = [{ x: 200, y: 200 }];
      direction = "RIGHT";
      score = 0;
      food = randomFood();
      clearInterval(gameLoop);
      gameLoop = setInterval(updateGame, 150); // 150 ms — yavaşlatılmış
      document.getElementById("score").innerText = "Puan: 0";
    }

    function randomFood() {
      return {
        x: Math.floor(Math.random() * (canvasSize / box)) * box,
        y: Math.floor(Math.random() * (canvasSize / box)) * box
      };
    }

    document.addEventListener("keydown", (e) => {
      if (e.key === "ArrowLeft" && direction !== "RIGHT") direction = "LEFT";
      if (e.key === "ArrowRight" && direction !== "LEFT") direction = "RIGHT";
      if (e.key === "ArrowUp" && direction !== "DOWN") direction = "UP";
      if (e.key === "ArrowDown" && direction !== "UP") direction = "DOWN";
    });

    function updateGame() {
      const head = { ...snake[0] };

      if (direction === "LEFT") head.x -= box;
      if (direction === "RIGHT") head.x += box;
      if (direction === "UP") head.y -= box;
      if (direction === "DOWN") head.y += box;

      // Duvara veya kendine çarpma kontrolü
      if (
        head.x < 0 || head.y < 0 ||
        head.x >= canvasSize || head.y >= canvasSize ||
        snake.some((segment, i) => i !== 0 && segment.x === head.x && segment.y === head.y)
      ) {
        clearInterval(gameLoop);
        alert("Oyun Bitti! Skor: " + score);
        return;
      }

      snake.unshift(head);

      // Yem yeme kontrolü
      if (head.x === food.x && head.y === food.y) {
        score++;
        document.getElementById("score").innerText = "Puan: " + score;
        food = randomFood();
      } else {
        snake.pop();
      }

      drawGame();
    }

    function drawGame() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Yılan çizimi
      snake.forEach((segment, index) => {
        ctx.fillStyle = index === 0 ? "#00ff00" : "#007700";
        ctx.fillRect(segment.x, segment.y, box, box);
      });

      // Yem çizimi
      ctx.fillStyle = "red";
      ctx.fillRect(food.x, food.y, box, box);
    }

    function restartGame() {
      initGame();
    }

    initGame();
