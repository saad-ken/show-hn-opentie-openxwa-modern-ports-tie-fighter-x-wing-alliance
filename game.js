document.addEventListener('DOMContentLoaded', () => {
    const gameContainer = document.querySelector('.game-container');
    const tieFighter = new Image();
    const xWing = new Image();
    tieFighter.src = 'assets/tie-fighter.png';
    xWing.src = 'assets/x-wing.png';

    function renderGame() {
        gameContainer.innerHTML = `
            <img src="${tieFighter.src}" alt="Tie Fighter" class="spaceship tie-fighter">
            <img src="${xWing.src}" alt="X-Wing" class="spaceship x-wing">
        `;
    }

    renderGame();
});
