document.getElementById('copyConsoleCode').addEventListener('click', function() {
    const code = document.getElementById('consoleCode').value;
    navigator.clipboard.writeText(code).then(() => {
        alert('Console code copied to clipboard!');
    }, (err) => {
        console.error('Failed to copy console code: ', err);
    });
});
