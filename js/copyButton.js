
const copyButton = document.getElementById('copyButton');
const promptElement = document.getElementById('prompt');

copyButton.addEventListener('click', () => {
    const textToCopy = promptElement.innerText;
    navigator.clipboard.writeText(textToCopy)
        .then(() => {
            console.log('Text copied to clipboard!');
        })
        .catch(() => {
            console.error('Failed to copy text to clipboard!');
        });
});

