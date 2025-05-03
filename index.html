<!DOCTYPE html>
<html lang="tr">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Gelişmiş Yılan Oyunu</title>
  <style>
    body {
      background-color: #111;
      color: #eee;
      font-family: 'Arial', sans-serif;
      text-align: center;
      margin: 0;
      padding: 20px;
      overflow-x: hidden;
      user-select: none;
    }

    h1 {
      margin-top: 10px;
      font-size: 2.5rem;
      background: linear-gradient(90deg, #00ff00, #00aa00);
      -webkit-background-clip: text;
      background-clip: text;
      color: transparent;
      text-shadow: 0 0 10px rgba(0, 255, 0, 0.3);
    }

    .game-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 15px;
    }

    canvas {
      background-color: #000;
      border: 4px solid #00aa00;
      border-radius: 8px;
      box-shadow: 0 0 20px rgba(0, 255, 0, 0.2);
      display: block;
      margin: 0 auto;
    }

    .score-container {
      display: flex;
      justify-content: space-between;
      width: 400px;
      max-width: 100%;
      margin: 0 auto;
    }

    .score-box {
      background-color: #222;
      padding: 10px 20px;
      border-radius: 5px;
      font-size: 1.1rem;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    }

    #current-score {
      color: #00ff00;
    }

    #high-score {
      color: #ffcc00;
    }

    .controls {
      display: flex;
      gap: 15px;
      margin-top: 10px;
      flex-wrap: wrap;
      justify-content: center;
    }

    button {
      padding: 12px 25px;
      font-size: 1rem;
      cursor: pointer;
      background-color: #00aa00;
      color: white;
      border: none;
      border-radius: 5px;
      transition: all 0.3s;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      font-weight: bold;
    }

    button:hover {
      background-color: #009900;
      transform: translateY(-2px);
      box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
    }

    button:active {
      transform: translateY(0);
    }

    #difficulty {
      padding: 12px;
      border-radius: 5px;
      background-color: #222;
      color: white;
      border: 1px solid #00aa00;
      font-size: 1rem;
    }

    .mobile-controls {
      display: none;
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: repeat(2, 1fr);
      gap: 10px;
      margin-top: 20px;
      width: 250px;
    }

    .mobile-btn {
      background-color: #333;
      color: white;
      border: none;
      border-radius: 5px;
      padding: 15px;
      font-size: 1.5rem;
      cursor: pointer;
    }

    .mobile-btn:active {
      background-color: #00aa00;
    }

    #up-btn {
      grid-column: 2;
      grid-row: 1;
    }

    #left-btn {
      grid-column: 1;
      grid-row: 2;
    }

    #right-btn {
      grid-column: 3;
      grid-row: 2;
    }

    #down-btn {
      grid-column: 2;
      grid-row: 2;
    }

    #pause-btn {
      grid-column: 1 / span 3;
      grid-row: 3;
    }

    @media (max-width: 600px) {
      canvas {
        width: 300px;
        height: 300px;
      }
      
      .score-container {
        width: 300px;
      }
      
      .mobile-controls {
        display: grid;
      }
    }

    .food-effect {
      position: absolute;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      pointer-events: none;
      animation: pop 0.5s forwards;
    }

    @keyframes pop {
      0% { transform: scale(1); opacity: 1; }
      100% { transform: scale(3); opacity: 0; }
    }

    .game-over {
      animation: shake 0.5s;
    }

    @keyframes shake {
      0%, 100% { transform: translateX(0); }
      10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
      20%, 40%, 60%, 80% { transform: translateX(5px); }
    }
  </style>
</head>
<body>
  <div class="game-container">
    <h1>Gelişmiş Yılan Oyunu</h1>
    
    <div class="score-container">
      <div class="score-box">Puan: <span id="current-score">0</span></div>
      <div class="score-box">Rekor: <span id="high-score">0</span></div>
    </div>
    
    <canvas id="gameCanvas" width="400" height="400"></canvas>
    
    <div class="controls">
      <select id="difficulty">
        <option value="100">Kolay</option>
        <option value="80" selected>Normal</option>
        <option value="60">Zor</option>
        <option value="40">Çok Zor</option>
      </select>
      <button onclick="startGame()">Başlat</button>
      <button onclick="pauseGame()">Duraklat</button>
      <button onclick="restartGame()">Yeniden Başla</button>
    </div>
    
    <div class="mobile-controls">
      <button class="mobile-btn" id="up-btn" ontouchstart="moveUp()">↑</button>
      <button class="mobile-btn" id="left-btn" ontouchstart="moveLeft()">←</button>
      <button class="mobile-btn" id="right-btn" ontouchstart="moveRight()">→</button>
      <button class="mobile-btn" id="down-btn" ontouchstart="moveDown()">↓</button>
      <button class="mobile-btn" id="pause-btn" ontouchstart="pauseGame()">II</button>
    </div>
  </div>

  <script>
    const canvas = document.getElementById("gameCanvas");
    const ctx = canvas.getContext("2d");
    const currentScoreElement = document.getElementById("current-score");
    const highScoreElement = document.getElementById("high-score");
    const difficultySelect = document.getElementById("difficulty");

    // Oyun ayarları
    const box = 20;
    const canvasSize = 400;
    let score = 0;
    let highScore = localStorage.getItem('snakeHighScore') || 0;
    let snake;
    let foods = [];
    let direction;
    let nextDirection;
    let gameLoop;
    let isPaused = false;
    let gameStarted = false;
    let speed;
    let foodTypes = [
      { color: '#ff0000', points: 1 },    // Normal (kırmızı)
      { color: '#ff9900', points: 3 },    // Turuncu (daha fazla puan)
      { color: '#00ffff', points: 5 },    // Cyan (en fazla puan)
      { color: '#ff00ff', points: -2 }    // Mor (puan azaltır)
    ];

    // Yüksek skoru göster
    highScoreElement.textContent = highScore;

    function initGame() {
      snake = [
        { x: 200, y: 200 },
        { x: 180, y: 200 },
        { x: 160, y: 200 }
      ];
      direction = "RIGHT";
      nextDirection = "RIGHT";
      score = 0;
      currentScoreElement.textContent = score;
      foods = [];
      speed = parseInt(difficultySelect.value);
      isPaused = false;
      gameStarted = false;
      
      // Başlangıçta 3 yem oluştur
      for (let i = 0; i < 3; i++) {
        spawnFood();
      }
      
      drawGame();
    }

    function startGame() {
      if (!gameStarted) {
        gameStarted = true;
        clearInterval(gameLoop);
        gameLoop = setInterval(updateGame, speed);
      } else if (isPaused) {
        pauseGame(); // Duraklatılmışsa devam ettir
      }
    }

    function pauseGame() {
      if (!gameStarted) return;
      
      isPaused = !isPaused;
      if (isPaused) {
        clearInterval(gameLoop);
        drawPauseScreen();
      } else {
        gameLoop = setInterval(updateGame, speed);
      }
    }

    function drawPauseScreen() {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      ctx.fillStyle = '#00ff00';
      ctx.font = '30px Arial';
      ctx.textAlign = 'center';
      ctx.fillText('DURAKLATILDI', canvas.width/2, canvas.height/2);
      
      ctx.font = '16px Arial';
      ctx.fillText('Devam etmek için "Duraklat" butonuna basın', canvas.width/2, canvas.height/2 + 40);
    }

    function spawnFood() {
      let newFood;
      let overlapping;
      
      do {
        overlapping = false;
        newFood = {
          x: Math.floor(Math.random() * (canvasSize / box)) * box,
          y: Math.floor(Math.random() * (canvasSize / box)) * box,
          type: Math.floor(Math.random() * foodTypes.length)
        };
        
        // Yılanın üzerinde olmamasını kontrol et
        for (const segment of snake) {
          if (segment.x === newFood.x && segment.y === newFood.y) {
            overlapping = true;
            break;
          }
        }
        
        // Diğer yemlerle çakışmamasını kontrol et
        for (const food of foods) {
          if (food.x === newFood.x && food.y === newFood.y) {
            overlapping = true;
            break;
          }
        }
      } while (overlapping);
      
      foods.push(newFood);
    }

    // Kontroller
    document.addEventListener("keydown", (e) => {
      if (!gameStarted && (e.key === "ArrowLeft" || e.key === "ArrowRight" || 
          e.key === "ArrowUp" || e.key === "ArrowDown")) {
        startGame();
      }
      
      if (e.key === " " || e.key === "p") {
        pauseGame();
        return;
      }
      
      if (isPaused) return;
      
      if (e.key === "ArrowLeft" && direction !== "RIGHT") nextDirection = "LEFT";
      if (e.key === "ArrowRight" && direction !== "LEFT") nextDirection = "RIGHT";
      if (e.key === "ArrowUp" && direction !== "DOWN") nextDirection = "UP";
      if (e.key === "ArrowDown" && direction !== "UP") nextDirection = "DOWN";
    });

    // Mobil kontroller
    function moveLeft() { if (direction !== "RIGHT") nextDirection = "LEFT"; startGame(); }
    function moveRight() { if (direction !== "LEFT") nextDirection = "RIGHT"; startGame(); }
    function moveUp() { if (direction !== "DOWN") nextDirection = "UP"; startGame(); }
    function moveDown() { if (direction !== "UP") nextDirection = "DOWN"; startGame(); }

    function updateGame() {
      if (isPaused) return;
      
      direction = nextDirection;
      const head = { ...snake[0] };

      // Yönüne göre başı hareket ettir
      if (direction === "LEFT") head.x -= box;
      if (direction === "RIGHT") head.x += box;
      if (direction === "UP") head.y -= box;
      if (direction === "DOWN") head.y += box;

      // Oyun bitti mi kontrol et
      if (checkCollision(head)) {
        gameOver();
        return;
      }

      snake.unshift(head);

      // Yem yendi mi kontrol et
      let foodEaten = false;
      for (let i = 0; i < foods.length; i++) {
        if (head.x === foods[i].x && head.y === foods[i].y) {
          // Yem efektini göster
          createFoodEffect(foods[i].x, foods[i].y, foodTypes[foods[i].type].color);
          
          // Puanı güncelle
          score += foodTypes[foods[i].type].points;
          if (score < 0) score = 0; // Puan negatif olmasın
          currentScoreElement.textContent = score;
          
          // Yüksek skoru güncelle
          if (score > highScore) {
            highScore = score;
            highScoreElement.textContent = highScore;
            localStorage.setItem('snakeHighScore', highScore);
          }
          
          // Yemi kaldır ve yenisini ekle
          foods.splice(i, 1);
          spawnFood();
          foodEaten = true;
          
          // Özel yemler için farklı etkiler
          if (foodTypes[foods[i]?.type].points === 5) {
            // Cyan yem: hız artışı
            clearInterval(gameLoop);
            speed = Math.max(20, speed - 10);
            gameLoop = setInterval(updateGame, speed);
          }
          break;
        }
      }

      // Yem yenmediyse kuyruğu kısalt
      if (!foodEaten) {
        snake.pop();
      }

      drawGame();
    }

    function createFoodEffect(x, y, color) {
      const effect = document.createElement('div');
      effect.className = 'food-effect';
      effect.style.left = `${x + canvas.offsetLeft}px`;
      effect.style.top = `${y + canvas.offsetTop}px`;
      effect.style.backgroundColor = color;
      document.body.appendChild(effect);
      
      // Efekti animasyon bitince sil
      effect.addEventListener('animationend', () => {
        effect.remove();
      });
    }

    function checkCollision(head) {
      // Duvara çarpma
      if (head.x < 0 || head.y < 0 || head.x >= canvasSize || head.y >= canvasSize) {
        return true;
      }
      
      // Kendine çarpma
      for (let i = 1; i < snake.length; i++) {
        if (snake[i].x === head.x && snake[i].y === head.y) {
          return true;
        }
      }
      
      return false;
    }

    function gameOver() {
      clearInterval(gameLoop);
      canvas.classList.add('game-over');
      
      setTimeout(() => {
        canvas.classList.remove('game-over');
        alert(`Oyun Bitti! Skor: ${score}\nYüksek Skor: ${highScore}`);
      }, 500);
    }

    function drawGame() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Yılanı çiz
      snake.forEach((segment, index) => {
        // Baş için farklı renk
        if (index === 0) {
          ctx.fillStyle = '#00ff00';
          ctx.fillRect(segment.x, segment.y, box, box);
          
          // Gözler
          ctx.fillStyle = 'white';
          const eyeSize = box / 5;
          const eyeOffset = box / 4;
          
          if (direction === "RIGHT") {
            ctx.fillRect(segment.x + box - eyeOffset, segment.y + eyeOffset, eyeSize, eyeSize);
            ctx.fillRect(segment.x + box - eyeOffset, segment.y + box - eyeOffset * 2, eyeSize, eyeSize);
          } else if (direction === "LEFT") {
            ctx.fillRect(segment.x + eyeOffset - eyeSize, segment.y + eyeOffset, eyeSize, eyeSize);
            ctx.fillRect(segment.x + eyeOffset - eyeSize, segment.y + box - eyeOffset * 2, eyeSize, eyeSize);
          } else if (direction === "UP") {
            ctx.fillRect(segment.x + eyeOffset, segment.y + eyeOffset - eyeSize, eyeSize, eyeSize);
            ctx.fillRect(segment.x + box - eyeOffset * 2, segment.y + eyeOffset - eyeSize, eyeSize, eyeSize);
          } else if (direction === "DOWN") {
            ctx.fillRect(segment.x + eyeOffset, segment.y + box - eyeOffset, eyeSize, eyeSize);
            ctx.fillRect(segment.x + box - eyeOffset * 2, segment.y + box - eyeOffset, eyeSize, eyeSize);
          }
        } else {
          // Vücut için degrade renk
          const colorValue = Math.floor(150 - (index % 10) * 5);
          ctx.fillStyle = `rgb(0, ${colorValue}, 0)`;
          ctx.fillRect(segment.x, segment.y, box, box);
          
          // Vücut deseni
          ctx.fillStyle = `rgba(0, ${colorValue + 50}, 0, 0.3)`;
          ctx.fillRect(segment.x + 2, segment.y + 2, box - 4, box - 4);
        }
      });
      
      // Yemleri çiz
      foods.forEach(food => {
        const foodType = foodTypes[food.type];
        ctx.fillStyle = foodType.color;
        ctx.beginPath();
        ctx.arc(food.x + box/2, food.y + box/2, box/2 - 2, 0, Math.PI * 2);
        ctx.fill();
        
        // Özel yemler için iç çizgi
        if (foodType.points !== 1) {
          ctx.fillStyle = 'white';
          ctx.beginPath();
          ctx.arc(food.x + box/2, food.y + box/2, box/4, 0, Math.PI * 2);
          ctx.fill();
        }
      });
      
      // Oyun başlamadıysa başlatma mesajı göster
      if (!gameStarted) {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        ctx.fillStyle = '#00ff00';
        ctx.font = '24px Arial';
        ctx.textAlign = 'center';
        ctx.fillText('OYUNA BAŞLAMAK İÇİN', canvas.width/2, canvas.height/2 - 30);
        ctx.fillText('YÖN TUŞLARINA BASIN', canvas.width/2, canvas.height/2 + 10);
        
        ctx.font = '16px Arial';
        ctx.fillText('veya', canvas.width/2, canvas.height/2 + 40);
        ctx.fillText('"Başlat" butonuna tıklayın', canvas.width/2, canvas.height/2 + 70);
      }
    }

    function restartGame() {
      clearInterval(gameLoop);
      initGame();
    }

    // Sayfa yüklendiğinde oyunu başlat
    window.onload = initGame;
  </script>
</body>
</html>
