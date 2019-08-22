import React, { Component } from 'react'
import Cell from './Cell'

export class GameBoard extends Component {
  state = {
    board: [['', '', ''], ['', '', ''], ['', '', '']],
    currentPlayer: 'X'
  }

  cellClicked = (x, y) => {
    console.log('clicked', x, y)

    if (!this.state.board[x][y]) {
      const _board = this.state.board
      _board[x][y] = this.state.currentPlayer
      const nextPlayer = this.state.currentPlayer === 'X' ? 'O' : 'X'
      this.setState({
        board: _board,
        currentPlayer: nextPlayer
      })
    }
  }

  reset = () => {
    this.setState({
      board: [['', '', ''], ['', '', ''], ['', '', '']],
      currentPlayer: 'X'
    })
  }

  render() {
    return (
      <>
        <h1>Tic Tac Toe!</h1>
        <button onClick={this.reset}>reset</button>
        <main>
          <table>
            <tbody>
              {this.state.board.map((col, i) => {
                return (
                  <tr key={i}>
                    {col.map((row, j) => {
                      return (
                        <Cell
                          key={j}
                          display={this.state.board[i][j]}
                          handleClick={() => this.cellClicked(i, j)}
                        />
                      )
                    })}
                  </tr>
                )
              })}
            </tbody>
          </table>
        </main>
      </>
    )
  }
}

export default GameBoard
