import React, { Component } from 'react';

import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
class CodeEditor extends Component {

    state = {
        code: "",
        editable: true
    };

    constructor(props) {
        super(props);
        this.editor = React.createRef();
    }

    componentWillUpdate(nextProps, nextState) {
        console.log("componentWillUpdate", nextProps, nextState);
    }

    componentDidUpdate(nextProps, nextState) {
        console.log("componentDidUpdate", nextProps, nextState);
    }

    componentDidMount(...args) {
        console.log("componentDidMount", args);
        this.setState(this.props);
    }

    getLanguage() {
        const firstChar = this.state.code.trim();
        if (firstChar.length && firstChar !== "{" && firstChar !== "[") {
            return "javascript";
        }
        else {
            return "json";
        }
    }

    reHighlight() {
        console.log("reHighlight", this.state.code);
        // Prism.highlightElement(this.editor);
    }
    render() {
        return (
            <pre ref={this.editor} className={"language-" + this.getLanguage()}><code
                onKeyUp={this.reHighlight()}
                contentEditable={this.state.editable}
            >{this.state.code}</code></pre>
        );
    }
}

CodeEditor.defaultProps = {
    code: "const thing = Math.rand(100);",
    editable: true
};

export default CodeEditor;
