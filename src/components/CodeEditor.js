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

        if (CodeTools.updateCodeElement(element, this.state.code)) {
            this.state.code = element.innerText;
            console.log("Code was updated");
        }
        else  {
            console.log("Code NOT updated yet");
        }
    }

    render() {
        return (
            <pre className={"language-"+CodeTools.getLanguage(this.props.code)}
                 onKeyUp={this.reHighlight.bind(this)}
                 onKeyPress={CodeTools.onKeyPress}
                 contentEditable={this.state.editable}
            >{""}</pre>
        );
    }
}

CodeEditor.defaultProps = {
    code: "const thing = Math.rand(100);",
    editable: true
};

export default CodeEditor;
