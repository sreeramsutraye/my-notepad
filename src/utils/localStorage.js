export const saveNote = (note) => {
    localStorage.setItem('note', note);
};

export const getNote = () => {
    return localStorage.getItem('note') || '';
};

export const clearNote = () => {
    localStorage.removeItem('note');
};