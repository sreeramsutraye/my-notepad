import React, { useState, useEffect } from 'react';
import { saveNote, getNote } from '../utils/localStorage';

const Editor = () => {
    const [text, setText] = useState('');

    useEffect(() => {
        const savedText = getNote('note');
        if (savedText) {
            setText(savedText);
        }
    }, []);

    const handleChange = (event) => {
        const newText = event.target.value;
        setText(newText);
        saveNote('note', newText);
    };

    return (
        <div>
            <textarea
                value={text}
                onChange={handleChange}
                rows="20"
                cols="50"
                placeholder="Write your notes here..."
            />
        </div>
    );
};

export default Editor;