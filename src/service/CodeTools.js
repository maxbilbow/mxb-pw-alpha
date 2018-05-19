import Prism from "prismjs";

class CodeTools {
    static getLanguage(code = "{}") {
        const firstChar = code.trim();
        if (firstChar.length && firstChar !== "{" && firstChar !== "[") {
            return "javascript";
        }
        else {
            return "json";
        }
    }

    static highlight(code) {
        const lang = CodeTools.getLanguage();
        return Prism.highlight(code, Prism.languages[lang], lang);
    }

    static getCaretPosition(element) {
        function isChildOf(node, parent) {
            while (node !== null) {
                if (node === parent) {
                    return true;
                }
                node = node.parentNode;
            }
            return false;
        }


        let selection = window.getSelection(),
            charCount = -1,
            node;

        if (selection.focusNode) {
            if (isChildOf(selection.focusNode, element)) {
                node = selection.focusNode;
                charCount = selection.focusOffset;

                while (node) {
                    if (node === element) {
                        break;
                    }

                    if (node.previousSibling) {
                        node = node.previousSibling;
                        charCount += node.textContent.length;
                    } else {
                        node = node.parentNode;
                        if (node === null) {
                            break
                        }
                    }
                }
            }
        }

        return charCount;
    }

    static setCaretPosition(element, position) {
        if (!position || !element.innerText) return;
        console.log("SETTING CARET POSITION TO:", position);
        function createRange(node, chars, range) {
            if (!range) {
                range = document.createRange();
                range.selectNode(node);
                range.setStart(node, 0);
            }

            if (node.localName === "br") {
                console.log("br");
            }
            if (chars.count === 0) {
                range.setEnd(node, chars.count);
            } else if (node && chars.count > 0) {
                if (node.nodeType === Node.TEXT_NODE) {
                    if (node.textContent.length < chars.count) {
                        chars.count -= node.textContent.length;
                    } else {
                        range.setEnd(node, chars.count);
                        chars.count = 0;
                    }
                } else {
                    for (let lp = 0; lp < node.childNodes.length; lp++) {
                        range = createRange(node.childNodes[lp], chars, range);

                        if (chars.count === 0) {
                            break;
                        }
                    }
                }
            }

            return range;
        }

        const selection = window.getSelection();

        let range = createRange(element, {count: position});
        console.log(range);
        if (range) {
            range.collapse(false);
            selection.removeAllRanges();
            selection.addRange(range);
        }


    }

    static updateCodeElement(element, oldCode) {
        const newCode = element.innerText;
        if (oldCode && oldCode.trim() === newCode.trim()) {
            return false;
        }
        const caretPosition = this.getCaretPosition(element);
        element.innerHTML = CodeTools.highlight(newCode).replace(/\n/g,"<br/>");
        this.setCaretPosition(element, caretPosition);
        return true;
    }

    static onKeyPress(event) {

    }
}


export default CodeTools;

