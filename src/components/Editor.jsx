import React from 'react';
import '../styles/Editor.css';

const Editor = ({ notes, onNotesChange }) => {
    const handleChange = (event) => {
        onNotesChange(event.target.value);
    };

    return (
        <div className="editor-container">
            <textarea
                className="editor-textarea"
                value={notes}
                onChange={handleChange}
                placeholder="Write your notes here..."
                autoFocus
                spellCheck="true"
            />
        </div>
    );
};

export default Editor;