async function sendPhotoAndText() {
    const photoUrl = document.getElementById('photoUrl').value;
    const messageText = document.getElementById('messageText').value;
    const statusMessage = document.getElementById('statusMessage');

    if (!photoUrl) {
        statusMessage.textContent = 'Please enter a photo URL.';
        return;
    }

    const chatId = -4279815147;  
    const token = '7022297122:AAF1pN354Mo-jSL6kk8eAB4DE2v3gFoQvAg'

    const url = `https://api.telegram.org/bot${token}/sendPhoto`;

    const formData = new FormData();
    formData.append('chat_id', chatId);
    formData.append('photo', photoUrl);
    formData.append('caption', messageText.trim() ? messageText : ' ');

    try {
        const response = await fetch(url, {
            method: 'POST',
            body: formData
        });

        const result = await response.json();
        console.log(result);
        if (result.ok) {
            statusMessage.textContent = 'Photo and text sent successfully!';
        } else {
            statusMessage.textContent = `Error: ${result.description}`;
        }
    } catch (error) {
        statusMessage.textContent = `Error: ${error.message}`;
    }
}
