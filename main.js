// main.js
let turn = 'X'; // Player 'X' starts
let squares = Array(10).fill(''); // Array to store the values of each square, index 0 is unused

// Function to check the winner
function checkWinner() {
    const winPatterns = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
        [1, 4, 7],
        [2, 5, 8],
        [3, 6, 9],
        [1, 5, 9],
        [3, 5, 7]
    ];

    for (const [a, b, c] of winPatterns) {
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            // Update the title to indicate the winner
            document.querySelector('.title span').textContent = `Player ${squares[a]} Wins!`;
            return; // End function without resetting the game
        }
    }

    if (!squares.includes('')) {
        // No winner and no empty squares left, so it's a tie
        document.querySelector('.title span').textContent = "It's a Tie!";
    }
}

// Function to handle the game logic when a square is clicked
function game(id) {
    let element = document.getElementById(id);
    let index = parseInt(id.replace('item', ''));

    // Update squares array and UI based on the current turn
    if (turn === 'X' && element.innerHTML === '') {
        squares[index] = 'X';
        element.innerHTML = 'X';
        turn = 'O';
    } else if (turn === 'O' && element.innerHTML === '') {
        squares[index] = 'O';
        element.innerHTML = 'O';
        turn = 'X';
    }

    // Update the title to show whose turn it is
    document.querySelector('.title span').textContent = `Current Turn: ${turn}`;

    // Check for a winner or a tie
    checkWinner();
}

// Initialize the game
function initializeGame() {
    squares.fill('');
    for (let i = 1; i <= 9; i++) {
        document.getElementById('item' + i).innerHTML = '';
    }
    turn = 'X';
    document.querySelector('.title span').textContent = 'X O GAME'; // Reset the title
}

// Call initializeGame once when the page loads
initializeGame();

