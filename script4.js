const API_URL = 'https://api.breakingbadquotes.xyz/v1/quotes';

document.addEventListener('DOMContentLoaded', function(){
    const page4Button = document.querySelector('.agree');

    page4Button.addEventListener('click', function() {
        window.location.href = 'page5.html';
        console.log(hello)
    });

    setTimeout(function() {
        document.querySelector('.two').style.display = 'block';
            
            // Use setTimeout to make the fourth element appear after another 2 seconds
        setTimeout(function() {
            document.querySelector('.agree').style.display = 'block';
        }, 1000); // 2000 milliseconds = 2 seconds
    }, 1000); // 2000 milliseconds = 2 seconds
})

document.addEventListener('DOMContentLoaded', function(){
    const page5Button = document.querySelector('.really')
    const inputField = document.getElementById('inputField');
    const twoButton = document.querySelector('.two-five');

    page5Button.addEventListener('click', function() {
        window.location.href = 'page6.html';
        console.log(hello)
    });


    setTimeout(function() {
        document.getElementById('inputField').style.display = 'block';

        inputField.addEventListener('keydown', function(event) {
            const key = event.key; // Get the pressed key
    
            if (key === 'Enter') {
                const place = inputField.value.trim(); // Get the user inputted name
                twoButton.style.display = 'block';
                setTimeout(function() {
                    document.querySelector('.really').style.display = 'block';
                }, 1000); // 2000 milliseconds = 2 seconds
            }
        });
        
    }, 1000);
});

document.addEventListener('DOMContentLoaded', function(){
    const page6Button = document.querySelector('.user-input');

    page6Button.addEventListener('click', function() {
        window.location.href = 'page7.html';
        console.log(hello)
    });



});


document.addEventListener('DOMContentLoaded', function(){
    const page7Button = document.querySelector('.fine');
    const restartButton = document.querySelector('.no-way');

    document.querySelector('.anger').addEventListener('click', function(){
        document.querySelector('.one-seven').style.display = 'block';
        setTimeout(function() {
            document.querySelector('.two-seven').style.display = 'block';
            
            // Use setTimeout to make the fourth element appear after another 2 seconds
            setTimeout(function() {
                document.querySelector('.choices').style.display = 'block';
            }, 1000); // 2000 milliseconds = 2 seconds
        }, 1000); // 2000 milliseconds = 2 seconds
    })


    page7Button.addEventListener('click', function() {
        window.location.href = 'page8.html';
        console.log(hello)
    });

    restartButton.addEventListener('click', function() {
        window.location.href = 'page9.html';
        console.log(hello)
    });



});

document.addEventListener('DOMContentLoaded', function(){
    const getAllObjects = async ()=>{
        const response = await fetch(API_URL);
        const object = await response.json();
        return object
    }
    getAllObjects().then((data)=>{
        console.log(data);
        try {
            const quote = data[0].quote;
            const author = data[0].author;
    
            const quoteElement = document.createElement('p');
            quoteElement.textContent = `"${quote}" - ${author}`;
            document.querySelector('.four').appendChild(quoteElement);
        } catch (error) {
            console.error('Error appending quote to DOM:', error);
        }
    });
    const page8Button = document.querySelector('.sure');

    document.querySelector('.one').style.display = 'block';
    setTimeout(function() {
        document.querySelector('.two').style.display = 'block';
    }, 2000); // Display .two after 2 seconds

    setTimeout(function() {
        document.querySelector('.three').style.display = 'block';
    }, 4000); // Display .three after 4 seconds

    setTimeout(function() {
        document.querySelector('.four').style.display = 'block';
    }, 6000); // Display .four after 6 seconds

    setTimeout(function() {
        document.querySelector('.extra').style.display = 'block';
    }, 8000); // Display .extra after 8 seconds

    setTimeout(function() {
        document.querySelector('.sure').style.display = 'block';
    }, 10000); // Display .agree after 10 seconds



    page8Button.addEventListener('click', function() {
        window.location.href = 'page10.html';
        console.log(hello)
    });

});

document.addEventListener('DOMContentLoaded', function(){
    const page10Button = document.querySelector('.angry');

    page10Button.addEventListener('click', function() {
        window.location.href = 'page11.html';
        console.log(hello)
    });

});

document.addEventListener('DOMContentLoaded', function(){
    const page11Button = document.querySelector('.second-button');
    const firstButton = document.querySelector('.first-button');
    const body = document.body;

    document.querySelector('.first-anger').style.display = 'block';
    setTimeout(function() {
        document.querySelector('.first-button').style.display = 'block';
    }, 2000);
    firstButton.addEventListener('click', function(){
        document.querySelector('.second-anger').style.display = 'block';
        body.style.backgroundColor = '#D21515';
        setTimeout(function(){
            page11Button.style.display = 'block';
        }, 4000);
    });

    page11Button.addEventListener('click', function() {
        window.location.href = 'page12.html';
        console.log(hello)
    });

});

document.addEventListener('DOMContentLoaded', function(){
    document.querySelector('.one-twelve').style.display = 'block';
    setTimeout(function() {
        document.querySelector('.two-twelve').style.display = 'block';

        setTimeout(function(){
            document.querySelector('.three-twelve').style.display = 'block';

            setTimeout(function(){
                document.querySelector('.four-twelve').style.display = 'block';

                setTimeout(function(){
                    document.querySelector('.five-twelve').style.display = 'block';
                }, 3000);
            }, 2000);
        }, 2000);
    }, 2000);

});



