import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Editor from './components/Editor';
import ExportOptions from './components/ExportOptions';
import useLocalStorage from './hooks/useLocalStorage';
import useDebounce from './hooks/useDebounce'; // Import the new hook
import './styles/App.css'

const App = () => {
    // We still use useLocalStorage to get the initial value and dark mode
    const [initialNotes] = useLocalStorage('notes', '');
    const [notes, setNotes] = useState(initialNotes);
    const [isDarkMode, setIsDarkMode] = useLocalStorage('darkMode', false);

    // Debounce the notes value. The debounced value will only update 500ms after `notes` stops changing.
    const debouncedNotes = useDebounce(notes, 500);

    // This effect now runs only when the debouncedNotes value changes
    useEffect(() => {
        localStorage.setItem('notes', JSON.stringify(debouncedNotes));
    }, [debouncedNotes]);

    useEffect(() => {
        document.body.classList.toggle('dark-mode', isDarkMode);
    }, [isDarkMode]);

    const handleNotesChange = (newNotes) => {
        setNotes(newNotes); // Update the UI state immediately for a responsive feel
    };

    const toggleDarkMode = () => {
        setIsDarkMode(prevMode => !prevMode);
    };

    return (
        <div className="App">
            <Header onToggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
            <Editor notes={notes} onNotesChange={handleNotesChange} />
            <ExportOptions notes={notes} />
        </div>
    );
};

export default App;