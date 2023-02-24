function formatReport() {
  const report = document.getElementById('report-text').value;
  console.log(document.getElementById('format-button'))

  // Format the report here (replace this with your actual formatting logic)
  const formattedReport = report.toUpperCase();

  navigator.clipboard.writeText(formattedReport);
}

document.getElementById('format-button').addEventListener('click', formatReport);
