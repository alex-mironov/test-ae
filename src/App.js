import React, {Component} from 'react';
import './App.css';
import ControlPanel from "./control-panel/ControlPanel";
import FileZone from "./file-zone/FileZone";
import getMockText from './text.service';
import Suggestions from './suggestions/Suggestions';

class App extends Component {
    state = {
        words: [],
        highlightedWordIndex: -1,
    }

    componentDidMount() {
        this.getText()
    }

    getText() {
        getMockText()
            .then((result) => {
                const wordsList = result.split(' ') // TODO handle the case if result is invalid
                this.setState({ words: wordsList.map(word => ({ word, styles: [] })) })
            });
    }

    handleWordHighlight = (highlightedWordIndex) => {
        this.setState({
            highlightedWordIndex, 
        })
    }

    updateSelectedWord = (wordData) => {
        const { highlightedWordIndex, words } = this.state
        const wordObj = words[highlightedWordIndex]
        this.setState({
            words: [
                ...words.slice(0, highlightedWordIndex),
                { ...wordObj, ...wordData },
                ...words.slice(highlightedWordIndex + 1),
            ]
        })
    }

    handleStylesChange = (newStyles) => {
        this.updateSelectedWord({ styles: newStyles })
    }

    handleSelectSuggestion = (suggestion) => {
        this.updateSelectedWord({ word: suggestion })
    }

    render() {
        const { words, highlightedWordIndex } = this.state
        const selectedWord = highlightedWordIndex > -1 ? words[highlightedWordIndex] : null

        return (
            <div className="App">
                <header>
                    <span>Simple Text Editor</span>
                </header>
                <main>
                    <ControlPanel
                        onStylesChange={this.handleStylesChange}
                        stylesApplied={selectedWord && selectedWord.styles}
                    />
                    <Suggestions
                        baseWord={selectedWord && selectedWord.word}
                        onSelectSuggestion={this.handleSelectSuggestion}
                    />
                    <FileZone
                        words={words}
                        onWordHighlight={this.handleWordHighlight}
                        highlightedWordIndex={highlightedWordIndex}
                    />
                </main>
            </div>
        );
    }
}

export default App;
