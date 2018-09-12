import React, { PureComponent } from 'react'
import { checkSynonyms } from '../text.service';
import Suggestion from './Suggestion'
import './Suggestion.css'

class Suggestions extends PureComponent {
  state = {
    suggestions: [],
  }

  componentDidMount() {
    this.checkSynonyms(this.props.baseWord)
  }

  componentDidUpdate(prevProps) {
    if (this.props.baseWord !== prevProps.baseWord) {
      this.checkSynonyms(this.props.baseWord)      
    }
  }

  checkSynonyms(word) {
    if (word) {
      checkSynonyms(word)
        .then(suggestions => this.setState({ suggestions }))
    } else {
      this.setState({
        suggestions: [],
      })
    }
  }

  render() {
    const { onSelectSuggestion } = this.props
    const { suggestions } = this.state

    if (!suggestions.length) {
      return null
    }

    return (
      <div className="Suggestions-container">
        <h5>You can also chose:</h5>
        
        <div className="Suggestion-container">        
          {suggestions.map(suggestion => (
            <Suggestion
              key={suggestion.word}
              suggestion={suggestion.word}
              onSelectSuggestion={onSelectSuggestion}
            />
          ))}
        </div>
      </div>
    )
  }
}

export default Suggestions
