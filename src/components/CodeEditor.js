import React, { Component } from 'react';

import 'react-dom';
import 'brace';
import AceEditor from 'react-ace';

import 'brace/mode/javascript';
import 'brace/mode/json';
import 'brace/theme/tomorrow_night';

class CodeEditor extends Component {

    state = {
        language: "javascript",
        code:"",
        editable: true
    };

    constructor(props) {
        super(props);
        this.editor = React.createRef();
    }

    onChange(newValue) {
        if (newValue && newValue.trim().length) {
            const lang = CodeEditor.guessLanguage(newValue);
            if (lang && lang !== this.state.language) {
                this.setState({language: lang, code: newValue});
            }
        }
    }

    static guessLanguage(code) {
        if (!(code && code.length)) return null;
        const firstChar = code.trim().charAt(0);
        if (firstChar !== "{" && firstChar !== "[") {
            return "javascript";
        }
        else {
            return "json";
        }
    }

    render() {

        return (
            <div>{this.state.language}
            <AceEditor
                mode={this.state.language}
                theme="tomorrow_night"
                onChange={this.onChange.bind(this)}
                name="UNIQUE_ID_OF_DIV"
                editorProps={{$blockScrolling: true}}
                fontSize={18}
                value={this.state.code}
                width={"100%"}
                setOptions={{
                    enableBasicAutocompletion: true,
                    enableLiveAutocompletion: true,
                    enableSnippets: false,
                    showLineNumbers: true,
                    tabSize: 2
                }}
            /></div>
        )

    }
}

CodeEditor.defaultProps = {
    language: "javascript",
    editable: true,
    code: ""
};

export default CodeEditor;
