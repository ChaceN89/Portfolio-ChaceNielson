/**
 * Function to open a PDF file located in the 'pdfs' folder within the 'public' folder.
 * @param {string} pdfName - The name of the PDF file to open.
 */
const openPdf = (pdfName) => {
    const fileUrl = `${process.env.PUBLIC_URL}/pdfs/${pdfName}`;
    window.open(fileUrl, '_blank');
};

export default openPdf;