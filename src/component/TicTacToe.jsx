import React, { useState } from 'react'

const TicTacToe = () => {

    let [board, setBoard] = useState(Array(9).fill(null))
    // console.log(board);
    const [isXNext, setIsXNext] = useState(true)

    const winner = calculateWinner(board)

    let status = winner ? `Winner is ${winner }` : `Next player: ${isXNext ? 'X' : 'O'} turn`
    
    let handleClick = (index) => {
        if(board[index] || winner) return
        const newBoard = [...board]
        newBoard[index] = isXNext ? 'X' : 'O'
        setBoard(newBoard)
        setIsXNext(!isXNext)
    }

    




  return (
    <div>
      <div className='game-container'>
        <h1 className='game-title'>Tic Tac Toe</h1>
        <div className='game-status'>{status}</div>
        <div className="game-board">
            {
                board.map((value, index) => (
                    <button key={index} className="items" onClick={() => handleClick(index)}>
                       {value}
                    </button>
                ))
            }
        </div>
<<<<<<< Updated upstream
      <button className='items' onClick={() => handeleClick()}>Reset Game</button>
=======
        
>>>>>>> Stashed changes
      </div>
    </div>
  )
}

function calculateWinner(items) {
    const winnerCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]

    for (let i = 0; i < winnerCombinations.length; i++) {
        const [a, b, c] = winnerCombinations[i]
        if (items[a] && items[a] === items[b] && items[a] === items[c]) {
            return items[a]
        }
    }
    return null
}




export default TicTacToe
