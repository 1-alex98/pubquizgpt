function removeNonLatin1Chars(str) {
    return str.replace(/[^\x00-\xFF]/g, '');
}
const form = document.getElementById('jsonForm');
form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent default form submission

    const jsonData = document.getElementById('jsonData').value;

    // Check if JSON data is valid (optional)
    try {
        JSON.parse(jsonData);
    } catch (error) {
        alert("Invalid JSON data! Please enter valid JSON format.");
        return; // Don't proceed if JSON is invalid
    }

    // Set cookie with JSON data
    document.cookie = `jsonData=${btoa(removeNonLatin1Chars(jsonData))}; path=/;`;

    // Redirect to /slides.html
    window.location.href = "/slides.html";
});
