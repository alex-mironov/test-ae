import React, { Component } from 'react';
import Word from './Word'
import './FileZone.css';

class FileZone extends Component {

    render() {
        const { words, onWordHighlight, highlightedWordIndex } = this.props
        return (
            <div id="file-zone">
                <div id="file">
                    {words.map(({ word, styles }, index) => (
                        <Word
                            key={index}
                            index={index}
                            onHighlight={onWordHighlight}
                            styles={styles}
                            word={`${word} `}
                            isHighlighted={highlightedWordIndex === index}
                        />
                    ))}
                </div>
            </div>
        );
    }
}

export default FileZone;
