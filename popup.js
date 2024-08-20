document.getElementById('openProdigy').addEventListener('click', () => {
    chrome.tabs.create({ url: 'https://math.prodigygame.com/?launcher=true&code=*' });
});

document.getElementById('copyConsoleCode').addEventListener('click', () => {
    const code = document.getElementById('consoleCode').value;
    navigator.clipboard.writeText(code).then(() => {
        alert('Console code copied to clipboard!');
    });
});
