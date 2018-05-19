import React, { Component } from 'react';
import ReactDOM  from 'react-dom';

import CodeTools from "../service/CodeTools";

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
        this.getCodeElement().innerHTML = CodeTools.highlight(this.props.code);
    }

    getCodeElement() {
        return ReactDOM.findDOMNode(this);//.childNodes.values().next().value;
    }

    reHighlight() {
        const element = this.getCodeElement();
        const newCode = element.innerText.trim();
        if ( this.state.code !== newCode) {

            this.state.code = newCode;
            // this.setState(this.state);
            CodeTools.updateCodeElement(element, newCode);
        }
    }

    render() {
        return (
            <pre className={"language-"+CodeTools.getLanguage(this.props.code)} onKeyUp={this.reHighlight.bind(this)}
                 contentEditable={this.state.editable}
            ></pre>
        );
    }
}

CodeEditor.defaultProps = {
    code: "const thing = Math.rand(100);",
    editable: true
};

export default CodeEditor;
