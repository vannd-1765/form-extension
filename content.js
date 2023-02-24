function formatDailyReport() {
  // Get the current date and time
  const today = new Date();
  const date = today.toLocaleDateString();
  const time = today.toLocaleTimeString();

  // Get the report message from the user
  const report = prompt("Enter your daily report:");

  // Format the report message
  const formattedReport = `Daily Report - ${date} ${time}\n\n${report}`;

  // Copy the formatted report to the clipboard
  navigator.clipboard.writeText(formattedReport);
}

// Call the formatDailyReport function when the user clicks the extension icon
chrome.browserAction.onClicked.addListener(formatDailyReport);
