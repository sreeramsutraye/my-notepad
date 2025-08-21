import { jsPDF } from 'jspdf';
import { saveAs } from 'file-saver';

// Export as plain text file
export const exportToTxt = (htmlContent) => {
  try {
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = htmlContent;
    const text = tempDiv.innerText || '';
    const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
    saveAs(blob, 'notepad-export.txt');
  } catch (error) {
    console.error('Error exporting as TXT:', error);
    alert('Failed to export as TXT. Please try again.');
  }
};

// Export as PDF file
export const exportToPdf = (htmlContent) => {
  try {
    const doc = new jsPDF({
      orientation: 'p',
      unit: 'mm',
      format: 'a4',
    });

    const tempDiv = document.createElement('div');
    // Set a width that matches the PDF page width for rendering
    tempDiv.style.width = '210mm'; 
    tempDiv.innerHTML = htmlContent;

    doc.html(tempDiv, {
      callback: function (doc) {
        doc.save('notepad-export.pdf');
      },
      x: 10,
      y: 10,
      width: 190, // The content width in the PDF (A4 width 210mm - 20mm margins)
      windowWidth: 900, // The width of the browser window to render the HTML (in px)
      autoPaging: 'text', // Automatically add new pages
    });
  } catch (error) {
    console.error('Error exporting as PDF:', error);
    alert('Failed to export as PDF. Please try again.');
  }
};

// Export as Word document
export const exportToDoc = (htmlContent) => {
  try {
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = htmlContent;
    const text = tempDiv.innerText || '';

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