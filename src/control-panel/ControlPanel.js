import React, { Component } from 'react';
import { WORD_STYLES } from '../consts'
import './ControlPanel.css';

const getActiveClass = (stylesApplied, styleTarget) =>
    (stylesApplied && stylesApplied.indexOf(styleTarget) > -1) ? 'style--active' : ''

class ControlPanel extends Component {
    getStyleHandler = (styleName) => () => {
        const { stylesApplied, onStylesChange } = this.props

        if (stylesApplied.indexOf(styleName) > -1) {
            onStylesChange(stylesApplied.filter(style => style !== styleName))
        } else {
            onStylesChange([...stylesApplied, styleName])
        }
    }

    render() {
        const { stylesApplied } = this.props

        return (
            <div id="control-panel">
                <div id="format-actions">
                    <button
                        disabled={!stylesApplied}
                        className={`format-action ${getActiveClass(stylesApplied, WORD_STYLES.BOLD)}`}
                        type="button"
                        onClick={this.getStyleHandler(WORD_STYLES.BOLD)}
                    >
                        <b>B</b>
                    </button>
                    <button
                        disabled={!stylesApplied}
                        className={`format-action ${getActiveClass(stylesApplied, WORD_STYLES.ITALIC)}`}
                        type="button"
                        onClick={this.getStyleHandler(WORD_STYLES.ITALIC)}
                    >
                        <i>I</i>
                    </button>
                    <button
                        disabled={!stylesApplied}
                        className={`format-action ${getActiveClass(stylesApplied, WORD_STYLES.UNDERLINE)}`}
                        type="button"
                        onClick={this.getStyleHandler(WORD_STYLES.UNDERLINE)}
                    >
                        <u>U</u>
                    </button>
                </div>
            </div>
        );
    }
}

export default ControlPanel;
