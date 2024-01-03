import html2pdf from 'html2pdf.js';

function Export({text}) {

  const exportPDF = () => {

    const element = document.getElementById('divToPrint');
    
    var opt = {
      margin: 1,
      filename: 'document.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };

    html2pdf().set(opt).from(element).save();

  }

  return (
    <div>
      <div id="divToPrint">
        {text}
      </div>

      <button onClick={exportPDF}>Export to PDF</button>
    </div>
  );
}

export default Export;