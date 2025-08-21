import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Editor from './components/Editor';
import ExportOptions from './components/ExportOptions';
import useLocalStorage from './hooks/useLocalStorage';
import './styles/App.css'

const App = () => {
    const [notes, setNotes] = useLocalStorage('notes', '');

    const handleNotesChange = (newNotes) => {
        setNotes(newNotes);
    };

    return (
        <div className="App">
            <Header />
            <Editor notes={notes} onNotesChange={handleNotesChange} />
            <ExportOptions notes={notes} />
        </div>
    );
};

export default App;