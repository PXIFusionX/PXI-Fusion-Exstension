document.getElementById('open-prodigy').addEventListener('click', () => {
    chrome.tabs.create({ url: 'https://math.prodigygame.com/?launcher=true&code=*' });
  });
  
  document.getElementById('copy-code').addEventListener('click', () => {
    const code = document.getElementById('code');
    code.select();
    document.execCommand('copy');
    alert('Code copied to clipboard!');
  });
  