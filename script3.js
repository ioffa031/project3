document.addEventListener('DOMContentLoaded', function() {
    // Retrieve the name from local storage
    const name = localStorage.getItem('userName');
    const page3Button = document.querySelector('.user-input')

    // Display the name on the page
    if (name) {
        document.getElementById('userName').textContent = name;
    }

    page3Button.addEventListener('click', function() {
        window.location.href = 'page4.html';
    })
    

});

    