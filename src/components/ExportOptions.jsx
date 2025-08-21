import React from 'react';
import { exportToDoc, exportToPdf, exportToTxt } from '../utils/exportUtils';

const ExportOptions = ({ content }) => {
    const handleDocExport = () => {
        exportToDoc(content);
    };

    const handlePdfExport = () => {
        exportToPdf(content);
    };

    const handleTxtExport = () => {
        exportToTxt(content);
    };

    return (
        <div className="export-options">
            <button onClick={handleDocExport}>Download as DOC</button>
            <button onClick={handlePdfExport}>Download as PDF</button>
            <button onClick={handleTxtExport}>Download as TXT</button>
        </div>
    );
};

export default ExportOptions;