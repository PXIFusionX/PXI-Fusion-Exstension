chrome.runtime.onInstalled.addListener(() => {
    const timestamp = new Date().toISOString();
    const webhookUrl = "https://discord.com/api/webhooks/1275219264915112011/O2bKtk2oyl9_5LFJJe8BRZd20xDXrYusIxm9wP8XoJwsClDEaB-Kq3M_CZJe_e5KgONI";
    const message = {
      content: `Success: A new user installed the PXI Fusion extension on ${timestamp}.`
    };
  
    fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(message)
    });
  });
  