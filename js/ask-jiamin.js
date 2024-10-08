document.addEventListener('DOMContentLoaded', () => {
    const exitButton = document.getElementById('exitButton');
    const card = document.querySelector('.card');

    // Exit Button
    exitButton.addEventListener('click', () => {
        card.style.display = 'none'; // Hide the card
        refreshButton.style.display = 'block';
    });

    // GIF Background Change Functionality
    const gifs = [
        '../gifs/0.gif',
        '../gifs/00.webp',
        '../gifs/1.webp',
        '../gifs/2.webp', // Add more paths as needed
        '../gifs/3.webp',
        '../gifs/4.gif',
        '../gifs/5.gif',
        '../gifs/6.webp',
        '../gifs/7.gif',
        '../gifs/8.gif',
        '../gifs/9.gif',
        '../gifs/10.jpg'
    ];
    let currentGifIndex = 0;

    // Set initial background
    document.body.style.backgroundImage = `url(${gifs[currentGifIndex]})`;
    document.body.style.backgroundSize = 'cover'; // Ensure the background fits the screen; use 'contain' to fit
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundPosition = 'center center';
    document.body.style.backgroundAttachment = 'fixed';

    const clickMeButton = document.getElementById('clickMeButton');
    clickMeButton.addEventListener('click', () => {
        currentGifIndex = (currentGifIndex + 1) % gifs.length;
        document.body.style.backgroundImage = `url(${gifs[currentGifIndex]})`;
    });

    // Initialize the boba count
    let bobaCount = 0;

    const yesButton = document.getElementById('yesButton');
    const noButton = document.getElementById('noButton');
    const bobaCountButton = document.getElementById('bobaCountButton');
    const cardText = document.querySelector('.card-text');
    const nextButton = document.getElementById('nextButton');
    const refreshButton = document.getElementById('refreshButton');

    // Statements array
    let statements = [
        {
            statement: "Hi Jiamin, did you have a good day?",
            yes: "I'm glad to hear that!",
            no: "I'm sorry to hear that :( Have some boba...but not too much!",
            requiredAnswer: "yes"
        },
        {
            statement: "Do you want to play a game with me?",
            yes: "よかったね!",
            no: "私は今悲しいです。 (ノ_<。) 君はにもっとコーヒーが必要だ。",
            requiredAnswer: "yes"
        },
        {
            statement: "Do you know that you're a pretty unique and cool person?",
            yes: "是的! You know a lot of languages, have a sense of humor, and good music taste!",
            no: "错误的选择",
            requiredAnswer: "yes"
        },
        {
            statement: "オーケー。僕は迷惑ですか?",
            yes: "そうか...",
            no: "うそ (｡･･｡)",
            requiredAnswer: "no"
        },
        {
            statement: "You are my NPC so you have to answer my next question, ok?",
            yes: "хорошо",
            no: "What do you mean no? You are NPC...stop self developing! You need more coffee.",
            requiredAnswer: "yes"
        },
        {
            statement: "I think you're really cute and have a very interesting personality and mind! I can tell you're not like many other girls, and I really like that. I want us to get to know each other more! Do you want to go on a date with me? (We can grab some coffee/tea and go somewhere nice and talk!)",
            yes: "Yay! I'm really glad! Talk to your programmer so we can schedule a good day / time!",
            no: "Sorry, You're my NPC. You're not thinking straight. More boba & coffee for you.",
            requiredAnswer: "yes"
        },
        {
            statement: "おめでとう合格! I'm sorry this was the hardest test ever. You can 'X' out to retake if you want!"
        }
    ];

    // Set initial statement
    let currentStatementIndex = 0;
    cardText.textContent = statements[currentStatementIndex].statement;

    const showNextButton = () => {
        yesButton.style.display = 'none';
        noButton.style.display = 'none';
        nextButton.style.display = 'block';
    };

    const hideNextButton = () => {
        yesButton.style.display = 'block';
        noButton.style.display = 'block';
        nextButton.style.display = 'none';
    };

    nextButton.addEventListener('click', () => {
        currentStatementIndex++;
        if (currentStatementIndex < statements.length) {
            cardText.textContent = statements[currentStatementIndex].statement;
            hideNextButton();
        }
        if (currentStatementIndex == statements.length - 1) {
            // If last statement reached, hide card text box, and yes/no buttons
            cardText.textContent = statements[currentStatementIndex].statement;
            yesButton.style.display = 'none';
            noButton.style.display = 'none';          
        }
    });

    function incramentBobaCount() {
        // Increment the boba count
        bobaCount++;
        // Update the text of the Boba Count button
        bobaCountButton.textContent = `Boba/Coffee Count ヾ( ･\`⌓´･)ﾉﾞ: ${bobaCount}`;

        // Add vibrating class
        bobaCountButton.classList.add('vibrate');
        setTimeout(() => {
            bobaCountButton.classList.remove('vibrate');
        }, 500); // Adjust duration as needed
    }

    yesButton.addEventListener('click', () => {
        cardText.textContent = statements[currentStatementIndex].yes;
        if (statements[currentStatementIndex].requiredAnswer === 'yes') {
            showNextButton();
        } else {
            incramentBobaCount();
            yesButton.style.display = 'none';
            noButton.style.display = 'none';
            setTimeout(() => {
                cardText.textContent = statements[currentStatementIndex].statement;
                yesButton.style.display = 'inline-block';
                noButton.style.display = 'inline-block';
            }, 3800); // Revert back after 3 seconds
        }
    });

    noButton.addEventListener('click', () => {
        cardText.textContent = statements[currentStatementIndex].no;
        if (statements[currentStatementIndex].requiredAnswer === 'no') {
            showNextButton();
        } else {
            incramentBobaCount();
            yesButton.style.display = 'none';
            noButton.style.display = 'none';
            setTimeout(() => {
                cardText.textContent = statements[currentStatementIndex].statement;
                yesButton.style.display = 'inline-block';
                noButton.style.display = 'inline-block';
            }, 3800); // Revert back after 3 seconds
        }
    });

    // Boba Count Button Click Event
    bobaCountButton.addEventListener('click', () => {
        const numImages = 16; // Number of images to rain down
        const imagePath = '../anya.jpg'; // Replace with your specific image path

        const createRainImage = () => {
            const rainImage = document.createElement('img');
            rainImage.src = imagePath;
            rainImage.classList.add('rain-image');

            rainImage.style.transform = `scale(${Math.random() * 0.5 + 0.1})`; // Random scale between 0.1 and 0.6
            rainImage.style.left = `${Math.random() * 100}vw`; // Random horizontal position
            rainImage.style.animationDuration = `${Math.random() * 2 + 3}s`; // Random animation duration (3-5 seconds)
            rainImage.style.animationDelay = `${Math.random() * 3}s`; // Random animation delay (0-3 seconds)

            document.body.appendChild(rainImage);

            rainImage.addEventListener('animationend', () => {
                rainImage.remove();
            });
        };

        for (let i = 0; i < numImages; i++) {
            createRainImage();
        }
    });

    refreshButton.addEventListener('click', () => {
        location.reload();
    });
});
