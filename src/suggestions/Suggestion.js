import React, { PureComponent } from 'react'

class Suggestion extends PureComponent {
  handleClick = () => {
    this.props.onSelectSuggestion(this.props.suggestion)
  }

  render() {
    const { suggestion } = this.props

    return (
      <div className="Suggestion" onClick={this.handleClick}>
        {suggestion}
      </div>
    )
  }
}

export default Suggestion
