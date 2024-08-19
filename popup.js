document.getElementById('open-prodigy').addEventListener('click', () => {
    chrome.tabs.create({ url: 'https://math.prodigygame.com/?launcher=true&code=*' });
  });
  
  document.getElementById('copy-console-code').addEventListener('click', () => {
    const code = document.getElementById('console-code');
    code.select();
    document.execCommand('copy');
    alert('Console code copied to clipboard!');
  });
  
  document.getElementById('copy-bookmark-code').addEventListener('click', () => {
    const code = document.getElementById('bookmark-code');
    code.select();
    document.execCommand('copy');
    alert('Bookmark code copied to clipboard!');
  });
  