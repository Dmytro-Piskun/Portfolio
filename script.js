const cards = document.querySelectorAll("#userCardsContainer .cards");
let isCardConfirmed = false;
cards.forEach(card => {
    card.addEventListener('mouseover', event => {
        if (!isCardConfirmed) {
            cards[0].classList.add("activeCard");
            cards[1].classList.add("activeCard");
            cards[2].classList.add("activeCard");
            event.target.classList.add("chosenCard");
            switch (event.target.id) {
                case "rockCard":
                    cards[0].classList.add("chosenCard");
                    break;
                case "scissorsCard":
                    cards[1].classList.add("chosenCard");
                    break;
                case "paperCard":
                    cards[2].classList.add("chosenCard");
                    break;
            }
        }
    })
    card.addEventListener('mouseout', event => {
        if (!isCardConfirmed) {
            cards[0].classList.remove("activeCard");
            cards[1].classList.remove("activeCard");
            cards[2].classList.remove("activeCard");
            cards[0].classList.remove("chosenCard");
            cards[1].classList.remove("chosenCard");
            cards[2].classList.remove("chosenCard");
        }
    })
    card.addEventListener('click', event => {
        if (!isCardConfirmed) {
            event.target.classList.add("chosenCard");
            switch (event.target.id) {
                case "rockCard":
                    cards[0].classList.remove("chosenCard");
                    cards[1].classList.remove("chosenCard");
                    cards[2].classList.remove("chosenCard");
                    cards[0].classList.add("confirmedCard");
                    isCardConfirmed = true;
                    cards[1].classList.add("notConfirmedCard");
                    cards[2].classList.add("notConfirmedCard");
                    break;
                case "scissorsCard":
                    cards[0].classList.remove("chosenCard");
                    cards[1].classList.remove("chosenCard");
                    cards[2].classList.remove("chosenCard");
                    cards[1].classList.add("confirmedCard");
                    isCardConfirmed = true;
                    cards[0].classList.add("notConfirmedCard");
                    cards[2].classList.add("notConfirmedCard");
                    break;
                case "paperCard":
                    cards[0].classList.remove("chosenCard");
                    cards[1].classList.remove("chosenCard");
                    cards[2].classList.remove("chosenCard");
                    cards[2].classList.add("confirmedCard");
                    isCardConfirmed = true;
                    cards[0].classList.add("notConfirmedCard");
                    cards[1].classList.add("notConfirmedCard");
                    break;
            }
            generateComputerCard();
        }

    })
})
let counter = {
    computer: 0,
    user: 0
}
function generateComputerCard() {
    const resultText = document.getElementById("resultText");
    const scoreDisplay = document.getElementById("scoreDisplay")

    let randomCard = Math.floor(Math.random() * 3);
    const computerCard = document.getElementById("computerCard");
    const userCard = document.querySelector(".confirmedCard");
    const resultBox = document.getElementById("result");
    computerCard.classList.add("revealCard");
    switch (randomCard) {
        case 0://rock
            computerCard.querySelector("#cardBack").textContent = "🪨";
            switch (userCard.id) {
                case "rockCard":
                    drawGame();
                    break;
                case "scissorsCard":
                    lostGame();
                    break;
                case "paperCard":
                    wonGame();
                    break;
            }
            break;
        case 1://scissors
            computerCard.querySelector("#cardBack").textContent = "✂️";
            switch (userCard.id) {
                case "rockCard":
                    wonGame();
                    break;
                case "scissorsCard":
                    drawGame();
                    break;
                case "paperCard":
                    lostGame();
                    break;
            }
            break;
        case 2://paper
            computerCard.querySelector("#cardBack").textContent = "📃";
            switch (userCard.id) {
                case "rockCard":
                    lostGame();
                    break;
                case "scissorsCard":
                    wonGame();
                    break;
                case "paperCard":
                    drawGame();
                    break;
            }
            break;
    }


    function lostGame() {
        counter.computer++;
        resultText.textContent = "😩";
        scoreDisplay.textContent = `${counter.user}:${counter.computer}`;
        setTimeout(() => {
            computerCard.classList.add("offsetCard");
            userCard.classList.add("offsetCard");
            setTimeout(() => {
                resultBox.classList.add("revealResult");
            }, 150)
        }, 800);


    }
    function wonGame() {
        counter.user++;
        resultText.textContent = "😁";
        scoreDisplay.textContent = `${counter.user}:${counter.computer}`;
        setTimeout(() => {
            computerCard.classList.add("offsetCard");
            userCard.classList.add("offsetCard");
            setTimeout(() => {
                resultBox.classList.add("revealResult");

            }, 150)
        }, 800);

    }
    function drawGame() {
        setTimeout(() => {
            const declinedCards = document.querySelectorAll(".notConfirmedCard");
            computerCard.classList.remove("revealCard");
            userCard.classList.remove("confirmedCard");
            isCardConfirmed = false;
            declinedCards[0].classList.remove("notConfirmedCard")
            declinedCards[1].classList.remove("notConfirmedCard")
        }, 800);
    }
}
function playAgain(resetScore) {
    const computerCard = document.getElementById("computerCard");
    const userCard = document.querySelector(".confirmedCard");
    const resultBox = document.getElementById("result");
    const declinedCards = document.querySelectorAll(".notConfirmedCard");
    computerCard.classList.remove("offsetCard");
    userCard.classList.remove("offsetCard");
    computerCard.classList.remove("revealCard");
    userCard.classList.remove("confirmedCard");
    isCardConfirmed = false;
    declinedCards[0].classList.remove("notConfirmedCard")
    declinedCards[1].classList.remove("notConfirmedCard")
    resultBox.classList.remove("revealResult");
    if(resetScore){
        counter.computer=0;
        counter.user=0;
    }
}


// function getDistanceBetweenCards(card1, card2) {
//     const rect1 = card1.getBoundingClientRect();
//     const rect2 = card2.getBoundingClientRect();

//     const distance = rect2.top - rect1.top;

//     return distance;
// }





