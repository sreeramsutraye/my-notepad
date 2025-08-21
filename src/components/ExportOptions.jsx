import React from 'react';
import { exportToTxt, exportToPdf } from '../utils/exportUtils';
import '../styles/ExportOptions.css';

const ExportOptions = ({ notes, onClearNote }) => {
  const handleExportTxt = () => {
    exportToTxt(notes);
  };
  
  const handleExportPdf = () => {
    exportToPdf(notes);
  };
  
  return (
    <div className="export-options">
      <button className="export-btn txt-btn" onClick={handleExportTxt}>
        Export as TXT
      </button>
      <button className="export-btn pdf-btn" onClick={handleExportPdf}>
        Export as PDF
      </button>
    </div>
  );
};

export default ExportOptions;