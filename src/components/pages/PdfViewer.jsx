import React from 'react';
import { useParams } from 'react-router-dom';
import { Document, Page } from 'react-pdf';

export default function PdfViewer() {
  const { pdfName } = useParams();

  return (
    <div className="h-screen">

      <embed src={`/pdfs/${pdfName}`} className="h-full w-full" type="application/pdf" />

    </div>
  );
}
