import React, { PureComponent } from 'react'

// TODO doublecheck it, copied from StackOverflow
function selectElementContents(el) {
  var range = document.createRange();
  range.selectNodeContents(el);
  var sel = window.getSelection();
  sel.removeAllRanges();
  sel.addRange(range);
}

class Word extends PureComponent {
  handleWordHighlight = () => {
    this.props.onHighlight(this.props.index)
  }

  handleRender = (el) => {
    this.$el = el
  }

  componentDidUpdate() {
    if (this.props.isHighlighted && this.$el) {
      selectElementContents(this.$el)
    }
  }

  render() {
    const { word, styles } = this.props

    return (
      <span onDoubleClick={this.handleWordHighlight} ref={this.handleRender}>
        {styles.reduce((acc, StyleComponent) => (<StyleComponent>{acc}</StyleComponent>), word)}
      </span>
    )
  }
}

export default Word
