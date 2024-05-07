

document.addEventListener('DOMContentLoaded', function(){
    const page2Button = document.getElementById('page2-button');

    page2Button.addEventListener('click', function() {
        window.location.href = 'page2.html';
        console.log(hello)
    });

});

    const inputField = document.getElementById('inputField');

    inputField.addEventListener('keydown', function(event) {
        const key = event.key; // Get the pressed key

        if (key === 'Enter') {
            const name = inputField.value.trim(); // Get the user inputted name

            if (name) {
            // Navigate to the next page with the name as a query parameter
                localStorage.setItem('userName', name);
                window.location.href = 'page3.html' 
            } else {
                alert('Please enter a name.'); // Notify user to enter a name
            }
        }
});

// });



