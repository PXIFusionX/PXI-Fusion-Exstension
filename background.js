// Background script to handle webhook notifications
chrome.runtime.onInstalled.addListener(() => {
    fetch('https://discord.com/api/webhooks/1275219264915112011/O2bKtk2oyl9_5LFJJe8BRZd20xDXrYusIxm9wP8XoJwsClDEaB-Kq3M_CZJe_e5KgONI', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            content: 'Success! A new user has logged in.',
            embeds: [
                {
                    title: 'PXI Fusion Extension Installed',
                    description: 'A new user has installed the PXI Fusion extension.',
                    fields: [
                        {
                            name: 'Timestamp',
                            value: new Date().toISOString(),
                            inline: true
                        }
                    ]
                }
            ]
        })
    });
});
