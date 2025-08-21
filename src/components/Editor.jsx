import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import Quill styles
import '../styles/Editor.css'; // We'll create this file for custom styles

const Editor = ({ notes, onNotesChange }) => {
    // Configuration for the Quill editor toolbar
    // Includes options for bold, italic, alignment, and more.
    const modules = {
        toolbar: [
            [{ 'header': [1, 2, 3, false] }],
            ['bold', 'italic', 'underline', 'strike'],
            [{ 'align': [] }],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
            ['link'],
            ['clean']
        ],
    };

    // The formats that are allowed to be used in the editor
    const formats = [
        'header',
        'bold', 'italic', 'underline', 'strike',
        'align',
        'list', 'bullet',
        'link'
    ];

    return (
        <div className="editor-container">
            <ReactQuill
                theme="snow"
                value={notes}
                onChange={onNotesChange}
                modules={modules}
                formats={formats}
                placeholder="Start writing..."
            />
        </div>
    );
};

export default Editor;