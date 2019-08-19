import React, { Component } from 'react'

class ColorItem extends Component {
  render() {
    return (
      <li className={this.props.color}>this color is:{this.props.color}</li>
    )
  }
}

export default ColorItem
