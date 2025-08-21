function downloadFile(content, fileName, mimeType) {
    const blob = new Blob([content], { type: mimeType });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

export function exportToDoc(content) {
    downloadFile(content, 'note.doc', 'application/msword');
}

export function exportToPdf(content) {
    // For simplicity, we will use a plain text file for PDF export.
    // In a real application, you would use a library like jsPDF to create a PDF.
    downloadFile(content, 'note.pdf', 'application/pdf');
}

export function exportToTxt(content) {
    downloadFile(content, 'note.txt', 'text/plain');
}