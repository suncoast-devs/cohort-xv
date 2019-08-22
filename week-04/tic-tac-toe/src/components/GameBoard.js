import React, { Component } from 'react'

export class GameBoard extends Component {
  state = {
    board: [['1', '2', '3'], ['4', '5', '6'], ['7', '8', '9']]
  }

  cellClicked = (x, y) => {
    console.log('clicked', x, y)
  }
  render() {
    return (
      <>
        <h1>Tic Tac Toe!</h1>
        <main>
          <table>
            <tbody>
              {this.state.board.map((col, i) => {
                return (
                  <tr key={i}>
                    {col.map((row, j) => {
                      return (
                        <td key={j} onClick={() => this.cellClicked(i, j)}>
                          {i}, {j}
                        </td>
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
