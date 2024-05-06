document.addEventListener('DOMContentLoaded', function() {
    loadGames();

    document.getElementById('game-form').addEventListener('submit', function(event) {
        event.preventDefault();
        const gameId = document.getElementById('game-id').value;
        if (gameId) {
            editGame(gameId);
        } else {
            addGame();
        }
    });
});

async function loadGames() {
    try {
        const response = await fetch('/api/games');
        const games = await response.json();
        const gamesList = document.getElementById('games-list');
        gamesList.innerHTML = '';
        games.forEach(game => {
            gamesList.innerHTML += `<li>${game.name} - ${game.genre} <button onclick="editGameInit('${game.id}')">Edit</button><button onclick="deleteGame('${game.id}')">Delete</button></li>`;
        });
    } catch (error) {
        console.error('Failed to load games:', error);
    }
}

async function addGame() {
    const gameData = {
        name: document.getElementById('game-name').value,
        genre: document.getElementById('game-genre').value
    };

    try {
        await fetch('/api/games', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(gameData)
        });
        loadGames();
    } catch (error) {
        console.error('Failed to add game:', error);
    }
}

function editGameInit(id) {
    const gameLi = document.querySelector(`#games-list li[id='game-${id}']`);
    document.getElementById('game-name').value = gameLi.getAttribute('data-name');
    document.getElementById('game-genre').value = gameLi.getAttribute('data-genre');
    document.getElementById('game-id').value = id;
}

async function editGame(id) {
    const gameData = {
        name: document.getElementById('game-name').value,
        genre: document.getElementById('game-genre').value
    };

    try {
        await fetch(`/api/games/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(gameData)
        });
        clearForm();
        loadGames();
    } catch (error) {
        console.error('Failed to update game:', error);
    }
}

async function deleteGame(id) {
    try {
        await fetch(`/api/games/${id}`, {
            method: 'DELETE'
        });
        loadGames();
    } catch (error) {
        console.error('Failed to delete game:', error);
    }
}

function clearForm() {
    document.getElementById('game-form').reset();
    document.getElementById('game-id').value = ''; // Clear the hidden ID field
}
