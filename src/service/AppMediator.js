import { ipcRenderer  } from "electron"

import { FILE_OPEN } from "../constants/Messages"

const onFileOpenCallbacks = [];

ipcRenderer.on(FILE_OPEN, (sender, filePath) => {
    onFileOpenCallbacks.forEach(callback => callback(filePath));
});


const Mediator =  {
    onFileOpen(callback) {
        onFileOpenCallbacks.push(callback);
    }
};

export default Mediator;