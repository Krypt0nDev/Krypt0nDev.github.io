document.addEventListener('DOMContentLoaded', function () {
  const girl = document.getElementById('girl');
  const scoreValue = document.getElementById('score-value');
  const message = document.getElementById('message');
  const gameContainer = document.getElementById('game-container');

  let score = 0;

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function createItem(type) {
    const item = document.createElement('div');
    item.classList.add('item');
    item.style.left = `${getRandomInt(0, window.innerWidth - 50)}px`;
    item.style.top = `${getRandomInt(0, window.innerHeight - 50)}px`;

    if (type === 'cheddar') {
      item.id = 'cheddar';
    } else if (type === 'heart') {
      item.id = 'heart';
    }

    item.addEventListener('mousedown', () => {
      if (score < 20) {
        score++;
        scoreValue.textContent = score;
        item.remove();
      }
      if (score === 20) {
        endGame();
      }
    });

    gameContainer.appendChild(item);
  }

  function endGame() {
    message.textContent = 'YOU WON';
    message.style.display = 'block';
    girl.style.display = 'none';
  }

  setInterval(() => {
    if (score < 20) {
      const randomType = Math.random() < 0.5 ? 'cheddar' : 'heart';
      createItem(randomType);
    }
  }, 1500);

  document.addEventListener('mousemove', moveGirl);

  function moveGirl(event) {
    const mouseX = event.clientX;
    const mouseY = event.clientY;
    const girlWidth = girl.offsetWidth;
    const girlHeight = girl.offsetHeight;

    const newX = mouseX - girlWidth / 2;
    const newY = mouseY - girlHeight / 2;

    girl.style.left = `${newX}px`;
    girl.style.top = `${newY}px`;
  }
});
