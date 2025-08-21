import { jsPDF } from 'jspdf';
import { saveAs } from 'file-saver';

// Export as plain text file
export const exportToTxt = (text) => {
  try {
    const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
    saveAs(blob, 'notepad-export.txt');
  } catch (error) {
    console.error('Error exporting as TXT:', error);
    alert('Failed to export as TXT. Please try again.');
  }
};

// Export as PDF file
export const exportToPdf = (text) => {
  try {
    const doc = new jsPDF();
    
    // Set font size and calculate dimensions
    doc.setFontSize(12);
    const pageWidth = doc.internal.pageSize.getWidth() - 20;
    
    // Split text into lines that fit the page width
    const splitText = doc.splitTextToSize(text, pageWidth);
    
    // Add text to document
    doc.text(splitText, 10, 10);
    doc.save('notepad-export.pdf');
  } catch (error) {
    console.error('Error exporting as PDF:', error);
    alert('Failed to export as PDF. Please make sure jsPDF is installed: npm install jspdf');
  }
};

// Export as Word document
export const exportToDoc = (text) => {
  try {
    // For DOC format, we create an HTML approach since docx library might be causing issues
    const html = `<html xmlns:o='urn:schemas-microsoft-com:office:office' 
      xmlns:w='urn:schemas-microsoft-com:office:word' 
      xmlns='http://www.w3.org/TR/REC-html40'>
      <head>
        <meta charset="utf-8">
        <title>Notepad Export</title>
      </head>
      <body>
        ${text.replace(/\n/g, '<br>')}
      </body>
    </html>`;
    
    const blob = new Blob([html], {type: 'application/msword;charset=utf-8'});
    saveAs(blob, 'notepad-export.doc');
  } catch (error) {
    console.error('Error exporting as DOC:', error);
    alert('Failed to export as DOC. Please try again.');
  }
};